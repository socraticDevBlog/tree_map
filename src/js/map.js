// js/map.js - Map initialization and rendering logic

let map;
let markers = [];
let allData = [];
const speciesColors = {};
const colorPalette = [
  "#22c55e",
  "#3b82f6",
  "#f59e0b",
  "#ec4899",
  "#8b5cf6",
  "#14b8a6",
  "#f97316",
  "#06b6d4",
  "#a855f7",
  "#84cc16",
];

/**
 * Get or assign a color for a species
 */
function getColorForSpecies(species) {
  if (!speciesColors[species]) {
    const colorIndex = Object.keys(speciesColors).length % colorPalette.length;
    speciesColors[species] = colorPalette[colorIndex];
  }
  return speciesColors[species];
}

/**
 * Initialize the map
 */
function initializeMap() {
  if (!map) {
    document.getElementById("map").style.display = "block";
    map = L.map("map").setView([46.8, -71.235], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
      maxZoom: 19,
    }).addTo(map);
  }
}

/**
 * Display data on map
 */
function displayOnMap(data) {
  allData = data;
  initializeMap();
  populateFilters();
  renderMarkers();
}

/**
 * Populate filter dropdowns
 */
function populateFilters() {
  const species = [
    ...new Set(
      allData.map((d) => d.NOM_FRANCAIS || d.NOM_LATIN).filter(Boolean)
    ),
  ].sort();
  const types = [
    ...new Set(allData.map((d) => d.TYPE_ARBRE).filter(Boolean)),
  ].sort();
  const streets = [
    ...new Set(allData.map((d) => d.NOM_TOPOGRAPHIE).filter(Boolean)),
  ].sort();

  const speciesFilter = document.getElementById("speciesFilter");
  const typeFilter = document.getElementById("typeFilter");
  const streetFilter = document.getElementById("streetFilter");

  // Populate species
  speciesFilter.innerHTML =
    '<option value="">All Species / Toutes les espèces</option>';
  species.forEach((s) => {
    speciesFilter.innerHTML += `<option value="${s}">${s}</option>`;
  });

  // Populate types
  typeFilter.innerHTML = '<option value="">All Types / Tous les types</option>';
  types.forEach((t) => {
    typeFilter.innerHTML += `<option value="${t}">${t}</option>`;
  });

  // Populate streets
  streetFilter.innerHTML =
    '<option value="">All Streets / Toutes les rues</option>';
  streets.forEach((st) => {
    streetFilter.innerHTML += `<option value="${st}">${st}</option>`;
  });

  // Add event listeners
  speciesFilter.onchange = renderMarkers;
  typeFilter.onchange = renderMarkers;
  streetFilter.onchange = renderMarkers;
}

/**
 * Render markers on map based on filters
 */
function renderMarkers() {
  // Clear existing markers
  markers.forEach((m) => map.removeLayer(m));
  markers = [];

  // Get filter values
  const speciesFilter = document.getElementById("speciesFilter").value;
  const typeFilter = document.getElementById("typeFilter").value;
  const streetFilter = document.getElementById("streetFilter").value;

  // Filter data
  const filteredData = allData.filter((row) => {
    if (
      speciesFilter &&
      row.NOM_FRANCAIS !== speciesFilter &&
      row.NOM_LATIN !== speciesFilter
    )
      return false;
    if (typeFilter && row.TYPE_ARBRE !== typeFilter) return false;
    if (streetFilter && row.NOM_TOPOGRAPHIE !== streetFilter) return false;
    return true;
  });

  // Add markers
  const bounds = [];
  filteredData.forEach((row) => {
    const lat = parseFloat(row.LATITUDE);
    const lon = parseFloat(row.LONGITUDE);

    if (isNaN(lat) || isNaN(lon)) return;

    bounds.push([lat, lon]);

    const species = row.NOM_FRANCAIS || row.NOM_LATIN || "Unknown";
    const color = getColorForSpecies(species);

    // Create custom marker icon
    const icon = L.divIcon({
      className: "custom-marker",
      html: `<div style="background: ${color}; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

    // Create popup content
    let popupContent = `<div class="popup-title">${species}</div>`;
    popupContent += `<div class="popup-row"><span class="popup-label">Latin:</span> ${
      row.NOM_LATIN || "N/A"
    }</div>`;
    popupContent += `<div class="popup-row"><span class="popup-label">Type:</span> ${
      row.TYPE_ARBRE || "N/A"
    }</div>`;
    popupContent += `<div class="popup-row"><span class="popup-label">Diamètre:</span> ${
      row.DIAMETRE || "N/A"
    } cm</div>`;
    popupContent += `<div class="popup-row"><span class="popup-label">Rue:</span> ${
      row.NOM_TOPOGRAPHIE || "N/A"
    }</div>`;
    popupContent += `<div class="popup-row"><span class="popup-label">Propriété:</span> ${
      row.TYPE_PROP || "N/A"
    }</div>`;

    const marker = L.marker([lat, lon], { icon }).addTo(map);
    marker.bindPopup(popupContent);
    markers.push(marker);
  });

  // Fit map to bounds
  if (bounds.length > 0) {
    map.fitBounds(bounds, { padding: [50, 50] });
  }

  updateStats(filteredData);
  updateLegend();
}

/**
 * Update statistics panel
 */
function updateStats(data) {
  const statsDiv = document.getElementById("stats");
  statsDiv.style.display = "block";

  const totalTrees = data.length;
  const uniqueSpecies = new Set(
    data.map((d) => d.NOM_FRANCAIS || d.NOM_LATIN).filter(Boolean)
  ).size;
  const avgDiameter = (
    data.reduce((sum, d) => sum + (d.DIAMETRE || 0), 0) / totalTrees
  ).toFixed(1);
  const uniqueStreets = new Set(
    data.map((d) => d.NOM_TOPOGRAPHIE).filter(Boolean)
  ).size;

  statsDiv.innerHTML = `
        <h2>📊 Statistiques / Statistics</h2>
        <div class="stat-grid">
            <div class="stat-item">
                <div class="stat-label">Total Trees</div>
                <div class="stat-value">${totalTrees}</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">Unique Species</div>
                <div class="stat-value">${uniqueSpecies}</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">Avg Diameter</div>
                <div class="stat-value">${avgDiameter} cm</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">Streets</div>
                <div class="stat-value">${uniqueStreets}</div>
            </div>
        </div>
    `;
}

/**
 * Update map legend
 */
function updateLegend() {
  // Remove existing legend
  const existingLegend = document.querySelector(".legend");
  if (existingLegend) existingLegend.remove();

  // Create new legend
  const legend = document.createElement("div");
  legend.className = "legend";
  legend.innerHTML = "<h3>Species / Espèces</h3>";

  // Show up to 8 species
  Object.entries(speciesColors)
    .slice(0, 8)
    .forEach(([species, color]) => {
      legend.innerHTML += `
            <div class="legend-item">
                <div class="legend-color" style="background: ${color};"></div>
                <span>${species}</span>
            </div>
        `;
    });

  // Show "more" indicator if needed
  if (Object.keys(speciesColors).length > 8) {
    legend.innerHTML += `<div class="legend-item" style="font-style: italic; margin-top: 5px;">+ ${
      Object.keys(speciesColors).length - 8
    } more...</div>`;
  }

  document.getElementById("map").appendChild(legend);
}
