document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');
    const suggestionDiv = document.getElementById('suggestion');
    const suggestionText = document.getElementById('suggestionText');

    calculateBtn.addEventListener('click', function() {
        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);
        const heightUnit = document.getElementById('heightUnit').value;
        const weightUnit = document.getElementById('weightUnit').value;

        let bmi;

        if (heightUnit === 'cm') {
            bmi = calculateBMI(height / 100, weight, 'kg');
        } else if (heightUnit === 'ft') {
            const heightInMeters = height * 0.3048; // 1 foot = 0.3048 meters
            bmi = calculateBMI(heightInMeters, weight, 'kg');
        } else {
            bmi = calculateBMI(height, weight, weightUnit);
        }

        resultDiv.innerHTML = `<p class="font-semibold">Your BMI: <span class="text-blue-500">${bmi.toFixed(1)}</span></p>`;
        resultDiv.classList.remove('hidden');

        // Show BMI suggestion
        showBMISuggestion(bmi);

        // Reset fields
        document.getElementById('height').value = '';
        document.getElementById('weight').value = '';
    });

    function calculateBMI(height, weight, weightUnit) {
        if (weightUnit === 'lbs') {
            // Convert pounds to kilograms (1 lb = 0.453592 kg)
            weight = weight * 0.453592;
        }

        // Calculate BMI
        return weight / (height * height);
    }

    function showBMISuggestion(bmi) {
        let suggestion = '';

        if (bmi < 18.5) {
            suggestion = 'Underweight - You may need to gain some weight.';
        } else if (bmi < 25) {
            suggestion = 'Normal weight - Keep up the good work!';
        } else if (bmi < 30) {
            suggestion = 'Overweight - Consider losing some weight for better health.';
        } else {
            suggestion = 'Obese - It\'s important to lose weight for better health.';
        }

        suggestionText.textContent = suggestion;
        suggestionDiv.classList.remove('hidden');
    }
});
