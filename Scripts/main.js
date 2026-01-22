const MAP_FOLDER = "maps/";
const SVG_VIEWBOX = "0 0 100 100";

const startSelect = document.getElementById("start");
const endSelect = document.getElementById("end");
const mapImage = document.getElementById("map-image");
const svg = document.getElementById("route-layer");
const routeBtn = document.getElementById("route-btn");

const mapContainer = document.getElementById("map-container");
const mapInner = document.getElementById("map-inner");

mapImage.addEventListener("dragstart", e => e.preventDefault());
mapContainer.style.cursor = "grab";


let scale = 1;
let translateX = 0;
let translateY = 0;
let isPanning = false;
let startX = 0;
let startY = 0;

// Transform (zoom/pan)
function updateTransform() {
	mapInner.style.transform =
		`translate(${translateX}px, ${translateY}px) scale(${scale})`;
}

// Zoom
mapContainer.addEventListener("wheel", e => {
	e.preventDefault();
	const zoomSpeed = 0.0015;
	scale += -e.deltaY * zoomSpeed;
	scale = Math.min(Math.max(scale, 0.6), 3);
	updateTransform();
}, { passive: false });

// Pan
mapContainer.addEventListener("mousedown", e => {
	isPanning = true;
	startX = e.clientX - translateX;
	startY = e.clientY - translateY;
	mapContainer.style.cursor = "grabbing";
});
window.addEventListener("mousemove", e => {
	if (!isPanning) return;
	translateX = e.clientX - startX;
	translateY = e.clientY - startY;
	updateTransform();
});
window.addEventListener("mouseup", () => { 
	isPanning = false;
	mapContainer.style.cursor = "grab";
});

mapContainer.addEventListener("touchstart", e => {
	if (e.touches.length !== 1) return;
	isPanning = true;
	startX = e.touches[0].clientX - translateX;
	startY = e.touches[0].clientY - translateY;
	mapContainer.style.cursor = "grabbing";
});
mapContainer.addEventListener("touchmove", e => {
	if (!isPanning) return;
	translateX = e.touches[0].clientX - startX;
	translateY = e.touches[0].clientY - startY;
	updateTransform();
}, { passive: false });
mapContainer.addEventListener("touchend", () => { 
	isPanning = false; 
	mapContainer.style.cursor = "grab";
});

// Populate selects
nodes.filter(n => n.type === "poi").forEach(node => {
	startSelect.add(new Option(node.name, node.id));
	endSelect.add(new Option(node.name, node.id));
});
startSelect.addEventListener("change", handleSameSelection);
endSelect.addEventListener("change", handleSameSelection);

// SVG setup
svg.setAttribute("viewBox", SVG_VIEWBOX);
svg.setAttribute("preserveAspectRatio", "none");

// Route button
if (routeBtn) routeBtn.addEventListener("click", calculateRoute);

// Prevent same start/end
function handleSameSelection() {
	const startId = startSelect.value;
	const endId = endSelect.value;
	if (!startId || !endId) return;
	if (startId === endId) {
		alert("Starting point and destination must be different.");
		if (this === startSelect) startSelect.selectedIndex = 0;
		else endSelect.selectedIndex = 0;
	}
}

// Calculate route
function calculateRoute() {
	const startId = startSelect.value;
	const endId = endSelect.value;
	if (!startId || !endId) { alert("Please select both start and destination."); return; }
	clearRoute();
	const path = dijkstra(startId, endId);
	if (!path || path.length < 2) { alert("No route found."); return; }
	renderRouteSmooth(path);
}

function getNode(id) { return nodes.find(n => n.id === id); }
function clearRoute() { svg.innerHTML = ""; }
function drawPin(node, type) {
	const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	circle.setAttribute("cx", node.x);
	circle.setAttribute("cy", node.y - 1.5);
	circle.setAttribute("r", "1.5");
	circle.setAttribute("fill", type === "start" ? "#00cc00" : "#cc0000");
	svg.appendChild(circle);

	const triangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
	triangle.setAttribute(
		"points",
		`${node.x-0.8},${node.y-0.2} ${node.x+0.8},${node.y-0.2} ${node.x},${node.y+1.2}`
	);
	triangle.setAttribute("fill", type === "start" ? "#00cc00" : "#cc0000");
	svg.appendChild(triangle);
}

// Smooth path rendering
function renderRouteSmooth(path) {
	let currentMap = null;

	const segments = [];
	for (let i = 0; i < path.length - 1; i++) {
		const a = getNode(path[i]);
		const b = getNode(path[i+1]);
		if (!a || !b) continue;

		if (a.map !== currentMap) {
			currentMap = a.map;
			mapImage.src = MAP_FOLDER + currentMap;
			clearRoute();
		}

		if (a.map === b.map) segments.push({a,b});
	}

	if (segments.length === 0) return;

	let t = 0;
	let speed = 0.1; // adjust for slower/faster animation
	let currentSegment = 0;
	let startPinDrawn = false; // track start pin

	function animate() {
		if (currentSegment >= segments.length) {
			// Draw end pin at the last node
			drawPin(getNode(path[path.length - 1]), "end");
			return;
		}

		const {a, b} = segments[currentSegment];
		const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
		line.setAttribute("x1", a.x);
		line.setAttribute("y1", a.y);
		line.setAttribute("x2", a.x);
		line.setAttribute("y2", a.y);
		line.setAttribute("stroke", "#000000");
		line.setAttribute("stroke-width", "0.8");
		line.setAttribute("stroke-linecap", "round");
		svg.appendChild(line);

		function drawStep() {
			t += speed;
			if (t > 1) t = 1;

			const newX = a.x + (b.x - a.x) * t;
			const newY = a.y + (b.y - a.y) * t;
			line.setAttribute("x2", newX);
			line.setAttribute("y2", newY);

			// Draw start pin after first segment has started
			if (!startPinDrawn) {
				drawPin(getNode(path[0]), "start");
				startPinDrawn = true;
			}

			if (t < 1) requestAnimationFrame(drawStep);
			else {
				currentSegment++;
				t = 0;
				animate();
			}
		}
		drawStep();
	}

	animate();
}


