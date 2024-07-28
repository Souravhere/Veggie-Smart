function calculateIdealWeight() {
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightValue = parseFloat(document.getElementById('heightValue').value);
    const heightUnit = document.getElementById('heightUnit').value;
    const resultDiv = document.getElementById('result');

    let heightInCm;

    if (isNaN(age) || isNaN(heightValue)) {
        resultDiv.innerHTML = 'Please enter valid values for age and height.';
        return;
    }

    // Convert height to cm if necessary
    if (heightUnit === 'm') {
        heightInCm = heightValue * 100;
    } else if (heightUnit === 'ft') {
        heightInCm = heightValue * 30.48;
    } else {
        heightInCm = heightValue;
    }

    let idealWeight;

    // Ideal Weight Calculation using Devine formula
    if (gender === 'male') {
        idealWeight = 50 + 0.9 * (heightInCm - 152);
    } else {
        idealWeight = 45.5 + 0.9 * (heightInCm - 152);
    }

    // Age adjustment
    if (age > 40) {
        idealWeight += (age - 40) * 0.2;
    }

    resultDiv.innerHTML = `Your ideal weight is approximately <strong>${idealWeight.toFixed(2)} kg</strong>.`;

    // Display Chart
    const ctx = document.createElement('canvas');
    resultDiv.appendChild(ctx);
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Ideal Weight'],
            datasets: [{
                label: 'Weight (kg)',
                data: [idealWeight.toFixed(2)],
                backgroundColor: ['#4caf50'],
                borderColor: ['#388e3c'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
