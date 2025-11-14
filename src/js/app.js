// js/app.js - Main application initialization and event handlers

/**
 * Initialize application on page load
 */
window.addEventListener("load", () => {
  loadSampleData();
  setupFileUpload();
});

/**
 * Load sample data on startup
 */
function loadSampleData() {
  Papa.parse(sampleCSV, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function (results) {
      displayOnMap(results.data);
    },
    error: function (error) {
      console.error("Error parsing sample data:", error);
    },
  });
}

/**
 * Setup file upload handler
 */
function setupFileUpload() {
  document.getElementById("csvFile").addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.name.endsWith(".csv")) {
      alert("Please upload a CSV file");
      return;
    }

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: function (results) {
        if (results.data && results.data.length > 0) {
          displayOnMap(results.data);
        } else {
          alert("No valid data found in the CSV file");
        }
      },
      error: function (error) {
        console.error("Error parsing CSV file:", error);
        alert("Error reading CSV file. Please check the file format.");
      },
    });
  });
}
