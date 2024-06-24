document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', function() {
        const age = parseInt(document.getElementById('age').value);
        const weight = parseFloat(document.getElementById('weight').value);
        const activity = document.getElementById('activity').value;

        if (isNaN(age) || age < 1 || age > 100) {
            resultDiv.innerHTML = `<p class="text-red-500">Please enter a valid age (1-100).</p>`;
            resultDiv.classList.remove('hidden');
            return;
        }

        if (isNaN(weight) || weight < 10 || weight > 300) {
            resultDiv.innerHTML = `<p class="text-red-500">Please enter a valid weight (10-300 kg).</p>`;
            resultDiv.classList.remove('hidden');
            return;
        }

        const waterIntake = calculateWaterIntake(age, weight, activity);
        resultDiv.innerHTML = `<p class="font-semibold">Daily Water Intake: <span class="text-green-500">${waterIntake.toFixed(1)}</span> liters</p>`;
        resultDiv.classList.remove('hidden');
    });

    function calculateWaterIntake(age, weight, activity) {
        let baseWaterIntake = weight * 0.033; // Base water intake in liters

        if (age < 30) {
            baseWaterIntake *= 1.0;
        } else if (age < 55) {
            baseWaterIntake *= 0.95;
        } else {
            baseWaterIntake *= 0.9;
        }

        switch (activity) {
            case 'light':
                baseWaterIntake *= 1.2;
                break;
            case 'moderate':
                baseWaterIntake *= 1.5;
                break;
            case 'active':
                baseWaterIntake *= 1.8;
                break;
            case 'very_active':
                baseWaterIntake *= 2.0;
                break;
            case 'super_active':
                baseWaterIntake *= 2.2;
                break;
            default:
                break;
        }
        return baseWaterIntake;
    }

    // Toggle note visibility
    const noteToggleBtn = document.getElementById('noteToggleBtn');
    const noteContent = document.getElementById('noteContent');
    noteToggleBtn.addEventListener('click', function() {
        noteContent.classList.toggle('hidden');
    });

    // Toggle instructions visibility
    const instructionsToggleBtn = document.getElementById('instructionsToggleBtn');
    const instructionsContent = document.getElementById('instructionsContent');
    instructionsToggleBtn.addEventListener('click', function() {
        instructionsContent.classList.toggle('hidden');
    });
});
