document.addEventListener('DOMContentLoaded', function () {
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');
    const totalAreaEl = document.getElementById('totalArea');
    const paintNeededEl = document.getElementById('paintNeeded');
    const estimatedCostEl = document.getElementById('estimatedCost');
    const unitsSelect = document.getElementById('units');
    const lengthInput = document.getElementById('length');
    const widthInput = document.getElementById('width');
    const heightInput = document.getElementById('height');
    const paintCostInput = document.getElementById('paintCost');
    const laborCostInput = document.getElementById('laborCost');
    const colorOptionSelect = document.getElementById('colorOption');
    const renderCanvas = document.getElementById('renderCanvas');

    calculateBtn.addEventListener('click', function () {
        const length = parseFloat(lengthInput.value);
        const width = parseFloat(widthInput.value);
        const height = parseFloat(heightInput.value);
        const units = unitsSelect.value;
        const paintCost = parseFloat(paintCostInput.value);
        const laborCost = parseFloat(laborCostInput.value);
        const colorOption = colorOptionSelect.value;

        if (isNaN(length) || length <= 0) {
            alert('Please enter a valid length.');
            return;
        }

        if (isNaN(width) || width <= 0) {
            alert('Please enter a valid width.');
            return;
        }

        if (isNaN(height) || height <= 0) {
            alert('Please enter a valid height.');
            return;
        }

        if (isNaN(paintCost) || paintCost <= 0) {
            alert('Please enter a valid paint cost per liter.');
            return;
        }

        if (isNaN(laborCost) || laborCost <= 0) {
            alert('Please enter a valid labor cost per square foot.');
            return;
        }

        const lengthMeters = units === 'feet' ? length * 0.3048 : length;
        const widthMeters = units === 'feet' ? width * 0.3048 : width;
        const heightMeters = units === 'feet' ? height * 0.3048 : height;

        const wallAreaMeters = 2 * (lengthMeters * heightMeters + widthMeters * heightMeters);
        const ceilingAreaMeters = lengthMeters * widthMeters;
        const totalAreaMeters = wallAreaMeters + ceilingAreaMeters;
        const paintNeededLiters = totalAreaMeters / 10; // Assuming 1 liter covers 10 square meters

        const totalArea = units === 'feet' ? (totalAreaMeters * 10.7639).toFixed(2) : totalAreaMeters.toFixed(2);
        const paintNeeded = paintNeededLiters.toFixed(2);

        totalAreaEl.innerHTML = `<strong>Total Area to be Painted:</strong> ${totalArea} square ${units}`;
        paintNeededEl.innerHTML = `<strong>Paint Needed:</strong> ${paintNeeded} liters`;

        let estimatedCost = paintCost * paintNeededLiters + laborCost * (totalAreaMeters * 10.7639);

        if (colorOption === 'both-sides') {
            estimatedCost *= 2;
        }

        estimatedCostEl.innerHTML = `<strong>Estimated Cost:</strong> ₹ ${estimatedCost.toFixed(2)}`;

        resultDiv.classList.remove('hidden');

        // Initialize 3D view with Babylon.js
        const engine = new BABYLON.Engine(renderCanvas, true);
        const scene = new BABYLON.Scene(engine);
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 4, 10, BABYLON.Vector3.Zero(), scene);
        camera.attachControl(renderCanvas, true);
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);

        // Create box for the room
        const box = BABYLON.MeshBuilder.CreateBox("box", {
            height: heightMeters,
            width: lengthMeters,
            depth: widthMeters
        }, scene);

        box.material = new BABYLON.StandardMaterial("boxMat", scene);
        box.material.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);

        // Add text labels
        const dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", { width: 512, height: 256 }, scene, false);
        dynamicTexture.drawText(`Height: ${height} ${units}`, null, 140, "bold 24px Arial", "white", "transparent", true);
        dynamicTexture.drawText(`Width: ${width} ${units}`, null, 220, "bold 24px Arial", "white", "transparent", true);
        dynamicTexture.drawText(`Length: ${length} ${units}`, null, 300, "bold 24px Arial", "white", "transparent", true);

        const labelPlane = BABYLON.MeshBuilder.CreatePlane("labelPlane", { width: 3, height: 1.5 }, scene);
        labelPlane.material = new BABYLON.StandardMaterial("labelMat", scene);
        labelPlane.material.diffuseTexture = dynamicTexture;
        labelPlane.position.y = heightMeters / 2 + 0.1;

        engine.runRenderLoop(function () {
            scene.render();
        });

        window.addEventListener("resize", function () {
            engine.resize();
        });
    });
});