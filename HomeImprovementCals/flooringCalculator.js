document.addEventListener('DOMContentLoaded', function () {
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');
    const totalAreaEl = document.getElementById('totalArea');
    const materialNeededEl = document.getElementById('materialNeeded');
    const wastageAmountEl = document.getElementById('wastageAmount');
    const finalMaterialEl = document.getElementById('finalMaterial');
    const estimatedPriceEl = document.getElementById('estimatedPrice');
    const unitsSelect = document.getElementById('units');
    const lengthInput = document.getElementById('length');
    const widthInput = document.getElementById('width');
    const flooringTypeSelect = document.getElementById('flooringType');
    const wastageInput = document.getElementById('wastage');
    const priceInput = document.getElementById('price');
    const renderCanvas = document.getElementById('renderCanvas');

    calculateBtn.addEventListener('click', function () {
        const length = parseFloat(lengthInput.value);
        const width = parseFloat(widthInput.value);
        const units = unitsSelect.value;
        const flooringType = flooringTypeSelect.value;
        const wastage = parseFloat(wastageInput.value);
        const pricePerSquareUnit = parseFloat(priceInput.value);

        if (isNaN(length) || length <= 0) {
            alert('Please enter a valid room length.');
            return;
        }

        if (isNaN(width) || width <= 0) {
            alert('Please enter a valid room width.');
            return;
        }

        if (isNaN(wastage) || wastage < 0) {
            alert('Please enter a valid wastage percentage.');
            return;
        }

        if (isNaN(pricePerSquareUnit) || pricePerSquareUnit <= 0) {
            alert('Please enter a valid price per square unit.');
            return;
        }

        const lengthMeters = units === 'feet' ? length * 0.3048 : length;
        const widthMeters = units === 'feet' ? width * 0.3048 : width;
        const totalAreaMeters = lengthMeters * widthMeters;
        const wastageFactor = 1 + (wastage / 100);
        const materialNeeded = totalAreaMeters * wastageFactor;

        const totalAreaFeet = units === 'meters' ? (totalAreaMeters * 10.7639).toFixed(2) : (length * width).toFixed(2);
        const materialNeededMeters = materialNeeded.toFixed(2);
        const materialNeededFeet = (materialNeeded * 10.7639).toFixed(2);
        const wastageAmountMeters = (totalAreaMeters * (wastage / 100)).toFixed(2);
        const estimatedPrice = (materialNeeded * pricePerSquareUnit).toFixed(2);

        totalAreaEl.innerHTML = `<strong>Total Area:</strong> ${totalAreaMeters.toFixed(2)} square meters (${totalAreaFeet} square feet)`;
        materialNeededEl.innerHTML = `<strong>Material Needed:</strong> ${materialNeededMeters} square meters (${materialNeededFeet} square feet) (including wastage)`;
        wastageAmountEl.innerHTML = `<strong>Wastage Amount:</strong> ${wastageAmountMeters} square meters`;
        finalMaterialEl.innerHTML = `<strong>Final Material:</strong> ${materialNeededMeters} square meters`;
        estimatedPriceEl.innerHTML = `<strong>Estimated Price:</strong> $${estimatedPrice}`;

        resultDiv.classList.remove('hidden');

        // Babylon.js 3D model
        const engine = new BABYLON.Engine(renderCanvas, true);
        const scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color3(0.1, 0.1, 0.1);

        const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
        camera.attachControl(renderCanvas, true);

        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
        light.intensity = 0.7;

        const box = BABYLON.MeshBuilder.CreateBox("box", { width: widthMeters, height: 0.1, depth: lengthMeters }, scene);
        const boxMaterial = new BABYLON.StandardMaterial("boxMaterial", scene);
        boxMaterial.diffuseColor = new BABYLON.Color3(0.3, 0.6, 0.8);
        box.material = boxMaterial;

        function addMeasurementText(text, position) {
            const plane = BABYLON.MeshBuilder.CreatePlane("textPlane", { size: 1 }, scene);
            plane.position = position;
            const advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(plane);
            const textBlock = new BABYLON.GUI.TextBlock();
            textBlock.text = text;
            textBlock.color = "white";
            textBlock.fontSize = 24;
            advancedTexture.addControl(textBlock);
        }

        addMeasurementText(`Width: ${width} ${units}`, new BABYLON.Vector3(0, 0.5, -widthMeters / 2));
        addMeasurementText(`Length: ${length} ${units}`, new BABYLON.Vector3(lengthMeters / 2, 0.5, 0));

        engine.runRenderLoop(() => {
            scene.render();
        });

        window.addEventListener("resize", () => {
            engine.resize();
        });
    });
});