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
      drawPoint(a);
      drawPoint(b);
    }
  }
}


function getNode(id) {
  return nodes.find(n => n.id === id);
}

function clearRoute() {
  svg.innerHTML = "";
}



function drawLine(a, b) {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

  line.setAttribute("x1", a.x);
  line.setAttribute("y1", a.y);
  line.setAttribute("x2", b.x);
  line.setAttribute("y2", b.y);

  line.setAttribute("stroke", "#d40000");
  line.setAttribute("stroke-width", "1.5");
  line.setAttribute("stroke-linecap", "round");

  svg.appendChild(line);
}

function drawPoint(node) {
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

  circle.setAttribute("cx", node.x);
  circle.setAttribute("cy", node.y);
  circle.setAttribute("r", "1.2");
  circle.setAttribute("fill", "#0033cc");

  svg.appendChild(circle);
}
