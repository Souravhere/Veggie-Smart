document.addEventListener('DOMContentLoaded', function() {
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
    const view3D = document.getElementById('3dView');

    let scene, camera, renderer, controls;

    calculateBtn.addEventListener('click', function() {
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

        const wallArea = 2 * (lengthMeters * heightMeters + widthMeters * heightMeters);
        const ceilingArea = lengthMeters * widthMeters;
        const totalArea = wallArea + ceilingArea;
        const paintNeeded = totalArea / 10; // Assuming 1 liter covers 10 square meters

        totalAreaEl.innerHTML = `<strong>Total Area to be Painted:</strong> ${totalArea.toFixed(2)} square meters`;
        paintNeededEl.innerHTML = `<strong>Paint Needed:</strong> ${paintNeeded.toFixed(2)} liters`;

        let estimatedCost = paintCost * paintNeeded + laborCost * totalArea;

        if (colorOption === 'both-sides') {
            estimatedCost *= 2;
        }

        estimatedCostEl.innerHTML = `<strong>Estimated Cost:</strong> ₹ ${estimatedCost.toFixed(2)}`;

        resultDiv.classList.remove('hidden');

        // Initialize 3D view
        if (!scene) {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, view3D.clientWidth / view3D.clientHeight, 0.1, 1000);
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(view3D.clientWidth, view3D.clientHeight);
            view3D.appendChild(renderer.domElement);

            controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.25;
            controls.enableZoom = true;

            camera.position.z = 5;
        }

        // Clear previous 3D objects
        while (scene.children.length > 0) { 
            scene.remove(scene.children[0]); 
        }

        // Create 3D room
        const geometry = new THREE.BoxGeometry(lengthMeters, heightMeters, widthMeters);
        const material = new THREE.MeshPhongMaterial({ color: 0x6e7f80 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Add text labels for dimensions
        const loader = new THREE.FontLoader();
        loader.load('https://cdn.jsdelivr.net/npm/three/examples/fonts/helvetiker_regular.typeface.json', function(font) {
            const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
            const textOptions = {
                font: font,
                size: 0.1,
                height: 0.01,
                curveSegments: 12,
                bevelEnabled: false
            };

            // Length
            const lengthText = new THREE.TextGeometry(`Length: ${length} ${units}`, textOptions);
            const lengthLabel = new THREE.Mesh(lengthText, textMaterial);
            lengthLabel.position.set(-lengthMeters / 2, heightMeters / 2, widthMeters / 2 + 0.1);
            scene.add(lengthLabel);

            // Width
            const widthText = new THREE.TextGeometry(`Width: ${width} ${units}`, textOptions);
            const widthLabel = new THREE.Mesh(widthText, textMaterial);
            widthLabel.position.set(lengthMeters / 2 + 0.1, heightMeters / 2, -widthMeters / 2);
            widthLabel.rotation.y = Math.PI / 2;
            scene.add(widthLabel);

            // Height
            const heightText = new THREE.TextGeometry(`Height: ${height} ${units}`, textOptions);
            const heightLabel = new THREE.Mesh(heightText, textMaterial);
            heightLabel.position.set(lengthMeters / 2 + 0.1, heightMeters, widthMeters / 2);
            heightLabel.rotation.y = Math.PI / 2;
            scene.add(heightLabel);

            function animate() {
                requestAnimationFrame(animate);
                controls.update();
                renderer.render(scene, camera);
            }
            animate();
        });
    });

    // Resize the 3D view with window resizing
    window.addEventListener('resize', function() {
        const width = view3D.clientWidth;
        const height = view3D.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });
});
