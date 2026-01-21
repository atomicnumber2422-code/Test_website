const MAP_FOLDER = "maps/";
const SVG_VIEWBOX = "0 0 100 100";

const startSelect = document.getElementById("start");
const endSelect = document.getElementById("end");
const mapImage = document.getElementById("map-image");
const svg = document.getElementById("route-layer");
const routeBtn = document.getElementById("route-btn");

if (!startSelect || !endSelect || !mapImage || !svg) {
  console.error("Missing required HTML elements.");
}

nodes
  .filter(node => node.type === "poi")
  .forEach(node => {
    startSelect.add(new Option(node.name, node.id));
    endSelect.add(new Option(node.name, node.id));
  });
  
  startSelect.addEventListener("change", handleSameSelection);
  endSelect.addEventListener("change", handleSameSelection);

// Setup SVG overlay
svg.setAttribute("viewBox", SVG_VIEWBOX);
svg.setAttribute("preserveAspectRatio", "none");


if (routeBtn) {
  routeBtn.addEventListener("click", calculateRoute);
}


function calculateRoute() {
  const startId = startSelect.value;
  const endId = endSelect.value;

  if (!startId || !endId) {
    alert("Please select both start and destination.");
    return;
  }

  clearRoute();

  const path = dijkstra(startId, endId);

  console.log("Calculated path:", path);

  if (!path || path.length < 2) {
    alert("No route found.");
    return;
  }

  renderRoute(path);
}

function handleSameSelection(){
	const startId = startSelect.value;
	const endId = endSelect.value;
	
	if (!startId || !endId) return;

	if (startId === endId) {
		alert("Starting point and destination must be different.");
	
		if (this === startSelect) {
			startSelect.selectedIndex = 0;
		} else {
		endSelect.selectedIndex = 0;
		}
	}
}


function renderRoute(path) {
  let currentMap = null;

  for (let i = 0; i < path.length - 1; i++) {
    const a = getNode(path[i]);
    const b = getNode(path[i + 1]);

    if (!a || !b) continue;

    // Switch map if needed
    if (a.map !== currentMap) {
      currentMap = a.map;
      mapImage.src = MAP_FOLDER + currentMap;
      clearRoute();
    }

    // Only draw lines if both points are on same map
    if (a.map === b.map) {
      drawLine(a, b);
      if (i === 0) drawPin(a, "start");
      if (i === path.length - 2) drawPin(b, "end");
    }
  }
}


function getNode(id) {
  return nodes.find(n => n.id === id);
}

function clearRoute() {
  svg.innerHTML = "";
}

/*function drawDottedLine(a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const distance = Math.hypot(dx, dy);
  const dotSpacing = 2; // distance between dots in SVG units

  const steps = Math.floor(distance / dotSpacing);

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const cx = a.x + dx * t;
    const cy = a.y + dy * t;

    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("cx", cx);
    dot.setAttribute("cy", cy);
    dot.setAttribute("r", "0.6");          // radius of each dot
    dot.setAttribute("fill", "none");      // no fill
    dot.setAttribute("stroke", "#d40000"); // outline color
    dot.setAttribute("stroke-width", "0.5"); // thickness of outline

    svg.appendChild(dot);
  }
}*/



function drawLine(a, b) {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

  line.setAttribute("x1", a.x);
  line.setAttribute("y1", a.y);
  line.setAttribute("x2", b.x);
  line.setAttribute("y2", b.y);

  line.setAttribute("stroke", "#000000");
  line.setAttribute("stroke-width", "0.8");
  line.setAttribute("stroke-dasharray", "0.5,2");
  line.setAttribute("stroke-linecap", "round");

  svg.appendChild(line);
}

/*function drawPoint(node, type) {
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

  circle.setAttribute("cx", node.x);
  circle.setAttribute("cy", node.y);
  
  if (type === "start" || type === "end") {
  circle.setAttribute("r", "1.2");
  circle.setAttribute("fill", "#0033cc");
  } else {
	  return;
  }

  svg.appendChild(circle);
}*/

function drawPin(node, type) {
  // Circle for the pin head
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

