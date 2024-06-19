document.addEventListener('DOMContentLoaded', (event) => {
    let map = L.map('map').setView([20.5937, 78.9629], 5); // Centered on India

    // Add OpenStreetMap tiles with satellite option
    let tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://bit.ly/Souravhere">Sourav Chhimpa</a>'
    }).addTo(map);

    // Initialize the map with satellite view option
    let satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Sourav Chhimpa'
    });

    // Feature Group to store editable layers
    let drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    // Drawing controls
    let drawControl = new L.Control.Draw({
        edit: {
            featureGroup: drawnItems
        },
        draw: {
            polygon: true,
            rectangle: true,
            circle: false,
            marker: false,
            polyline: false
        }
    });
    map.addControl(drawControl);

    // Event listener for creation of new layers
    map.on(L.Draw.Event.CREATED, function (event) {
        let layer = event.layer;
        drawnItems.addLayer(layer);
    });

    // Search box using Leaflet Control Geocoder
    let geocoder = L.Control.geocoder({
        defaultMarkGeocode: false,
        collapsed: false // Show expanded by default
    }).on('markgeocode', function(e) {
        let bbox = e.geocode.bbox;
        let poly = L.polygon([
            [bbox.getSouthEast().lat, bbox.getSouthEast().lng],
            [bbox.getNorthEast().lat, bbox.getNorthEast().lng],
            [bbox.getNorthWest().lat, bbox.getNorthWest().lng],
            [bbox.getSouthWest().lat, bbox.getSouthWest().lng]
        ]).addTo(map);
        map.fitBounds(poly.getBounds());
    }).addTo(map);

    // Function to calculate area in different units
    window.calculateArea = function () {
        let totalArea = 0;
        drawnItems.eachLayer(function (layer) {
            if (layer instanceof L.Polygon || layer instanceof L.Rectangle) {
                totalArea += L.GeometryUtil.geodesicArea(layer.getLatLngs()[0]);
            }
        });

        let areaHectares = (totalArea / 10000).toFixed(2);
        let areaSquareMeters = totalArea.toFixed(2);
        let areaSquareFeet = (totalArea * 10.7639).toFixed(2);

        document.getElementById('result').innerHTML = `
            <p class="text-lg mb-2">Total Area:</p>
            <ul class="list-disc pl-5 space-y-2">
                <li>${areaHectares} hectares</li>
                <li>${areaSquareMeters} square meters</li>
                <li>${areaSquareFeet} square feet</li>
            </ul>`;
    };

    // Function to reset the map
    window.resetMap = function () {
        drawnItems.clearLayers();
        document.getElementById('result').innerHTML = '';
    };

    // Event listener for the search box
    document.getElementById('searchBox').addEventListener('input', function (e) {
        geocoder.options.geocoder.geocode(e.target.value, function(results) {
            if (results && results.length > 0) {
                map.fitBounds(results[0].bbox);
            }
        });
    });

    // Event listener for satellite view checkbox
    document.getElementById('satelliteView').addEventListener('change', function (e) {
        if (e.target.checked) {
            map.removeLayer(tileLayer);
            map.addLayer(satelliteLayer);
        } else {
            map.removeLayer(satelliteLayer);
            map.addLayer(tileLayer);
        }
    });

    // Prevent map scroll when scrolling on the interface elements
    let container = map.getContainer();
    container.addEventListener('wheel', function(e) {
        if (e.ctrlKey) {
            e.preventDefault();
        }
    });
});
