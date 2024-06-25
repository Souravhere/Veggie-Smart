document.addEventListener('DOMContentLoaded', function () {
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');
    const totalAreaEl = document.getElementById('totalArea');
    const gardenTypeSelect = document.getElementById('gardenType');
    const unitsSelect = document.getElementById('units');
    const lengthInput = document.getElementById('length');
    const widthInput = document.getElementById('width');
    const heightInput = document.getElementById('height');
    const lengthContainer = document.getElementById('lengthContainer');
    const heightContainer = document.getElementById('heightContainer');
    const renderCanvas = document.getElementById('renderCanvas');
    const loadingSpinner = document.getElementById('loading');

    gardenTypeSelect.addEventListener('change', function () {
        const gardenType = gardenTypeSelect.value;
        if (gardenType === 'square') {
            lengthContainer.classList.add('hidden');
            heightContainer.classList.add('hidden');
        } else if (gardenType === 'rectangle') {
            lengthContainer.classList.remove('hidden');
            heightContainer.classList.add('hidden');
        } else {
            lengthContainer.classList.remove('hidden');
            heightContainer.classList.remove('hidden');
        }
    });

    calculateBtn.addEventListener('click', function () {
        const gardenType = gardenTypeSelect.value;
        const length = parseFloat(lengthInput.value);
        const width = parseFloat(widthInput.value);
        const height = parseFloat(heightInput.value);
        const units = unitsSelect.value;

        if (gardenType !== 'square' && (isNaN(length) || length <= 0)) {
            alert('Please enter a valid length.');
            return;
        }

        if (isNaN(width) || width <= 0) {
            alert('Please enter a valid width.');
            return;
        }

        if (gardenType === 'triangle' && (isNaN(height) || height <= 0)) {
            alert('Please enter a valid height.');
            return;
        }

        const lengthMeters = units === 'feet' ? length * 0.3048 : length;
        const widthMeters = units === 'feet' ? width * 0.3048 : width;
        const heightMeters = units === 'feet' ? height * 0.3048 : height;

        let areaMeters;

        if (gardenType === 'square') {
            areaMeters = widthMeters * widthMeters;
        } else if (gardenType === 'rectangle') {
            areaMeters = lengthMeters * widthMeters;
        } else {
            areaMeters = (lengthMeters * heightMeters) / 2;
        }

        const totalArea = units === 'feet' ? (areaMeters * 10.7639).toFixed(2) : areaMeters.toFixed(2);

        totalAreaEl.innerHTML = `<strong>Total Garden Area:</strong> ${totalArea} square ${units}`;

        resultDiv.classList.remove('hidden');

        loadingSpinner.classList.remove('hidden');
        renderCanvas.classList.add('hidden');

        setTimeout(() => {
            loadingSpinner.classList.add('hidden');
            renderCanvas.classList.remove('hidden');

            // Initialize 3D view with Babylon.js
            const engine = new BABYLON.Engine(renderCanvas, true);
            const scene = new BABYLON.Scene(engine);
            const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 4, 10, BABYLON.Vector3.Zero(), scene);
            camera.attachControl(renderCanvas, true);
            const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);
            const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 10, height: 10 }, scene);

            let garden;

            if (gardenType === 'square') {
                garden = BABYLON.MeshBuilder.CreateBox("garden", { size: widthMeters, height: 0.1 }, scene);
            } else if (gardenType === 'rectangle') {
                garden = BABYLON.MeshBuilder.CreateBox("garden", { width: lengthMeters, height: 0.1, depth: widthMeters }, scene);
            } else {
                garden = BABYLON.MeshBuilder.CreateGround("garden", { width: lengthMeters, height: heightMeters }, scene);
            }

            garden.position.y = 0.05;

            function addMeasurementText(text, position) {
                const dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", 512, scene, true);
                dynamicTexture.drawText(text, null, 250, "bold 44px Arial", "white", "transparent");
                const plane = BABYLON.MeshBuilder.CreatePlane("textPlane", { size: 2 }, scene);
                plane.material = new BABYLON.StandardMaterial("textPlaneMaterial", scene);
                plane.material.diffuseTexture = dynamicTexture;
                plane.position = position;
            }

            if (gardenType === 'square' || gardenType === 'rectangle') {
                addMeasurementText(`Width: ${width} ${units}`, new BABYLON.Vector3(0, widthMeters / 2 + 0.1, 0));
                if (gardenType === 'rectangle') {
                    addMeasurementText(`Length: ${length} ${units}`, new BABYLON.Vector3(lengthMeters / 2 + 0.1, 0, 0));
                }
            } else {
                addMeasurementText(`Base: ${length} ${units}`, new BABYLON.Vector3(lengthMeters / 2 + 0.1, 0, 0));
                addMeasurementText(`Height: ${height} ${units}`, new BABYLON.Vector3(0, heightMeters / 2 + 0.1, 0));
            }

            engine.runRenderLoop(function () {
                scene.render();
            });

            window.addEventListener("resize", function () {
                engine.resize();
            });
        }, 1000);
    });
});