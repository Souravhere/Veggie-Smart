document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');

    const MET_VALUES = {
        running: 11.0, // MET value for running
        cycling: 8.5, // MET value for cycling
        swimming: 7.0, // MET value for swimming
        walking: 3.8, // MET value for walking
        weightlifting: 3.0, // MET value for weight lifting
        basketball: 7.0, // MET value for basketball
        football: 8.0, // MET value for football
        tennis: 7.3, // MET value for tennis
        yoga: 2.5, // MET value for yoga
        dancing: 5.5 // MET value for dancing
    };
    calculateBtn.addEventListener('click', function() {
        const activity = document.getElementById('activity').value;
        const weight = parseFloat(document.getElementById('weight').value);
        const duration = parseFloat(document.getElementById('duration').value);

        if (isNaN(weight) || isNaN(duration) || weight <= 0 || duration <= 0) {
            resultDiv.innerHTML = `<p class="text-red-500">Please enter valid weight and duration.</p>`;
            resultDiv.classList.remove('hidden');
            return;
        }

        const metValue = MET_VALUES[activity];
        const caloriesBurned = calculateCaloriesBurned(metValue, weight, duration);

        resultDiv.innerHTML = `<p class="font-semibold">Calories Burned: <span class="text-green-500">${caloriesBurned.toFixed(1)}</span> kcal</p>`;
        resultDiv.classList.remove('hidden');
    });

    function calculateCaloriesBurned(met, weight, duration) {
        // Formula: Calories burned = MET value * weight (kg) * duration (hours)
        return met * weight * (duration / 60);
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
