document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', function() {
        const age = parseInt(document.getElementById('age').value);
        const weight = parseFloat(document.getElementById('weight').value);
        let height = parseFloat(document.getElementById('height').value);
        const heightUnit = document.getElementById('heightUnit').value;
        const activity = document.getElementById('activity').value;
        const goal = document.getElementById('goal').value;

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

        if (isNaN(height) || (heightUnit === 'cm' && (height < 50 || height > 250))) {
            resultDiv.innerHTML = `<p class="text-red-500">Please enter a valid height in cm (50-250).</p>`;
            resultDiv.classList.remove('hidden');
            return;
        } else if (heightUnit === 'feet' && (height < 3 || height > 8)) {
            resultDiv.innerHTML = `<p class="text-red-500">Please enter a valid height in feet/inches (3-8).</p>`;
            resultDiv.classList.remove('hidden');
            return;
        }

        if (heightUnit === 'feet') {
            height = convertFeetToCm(height);
        }

        const macros = calculateMacros(age, weight, height, activity, goal);
        const dietSuggestion = getDietSuggestion(macros);

        resultDiv.innerHTML = `
            <p class="font-semibold">Daily Macro Nutrient Requirements:</p>
            <ul class="list-disc pl-5">
                <li>Proteins: <span class="text-green-500">${macros.protein.toFixed(1)}</span> grams</li>
                <li>Fats: <span class="text-green-500">${macros.fat.toFixed(1)}</span> grams</li>
                <li>Carbohydrates: <span class="text-green-500">${macros.carbs.toFixed(1)}</span> grams</li>
            </ul>
            <div class="mt-4">
                <p class="font-semibold">Diet Suggestions:</p>
                <p class="mb-2">For Vegetarians: ${dietSuggestion.vegetarian}</p>
                <p>For Non-Vegetarians: ${dietSuggestion.nonVegetarian}</p>
            </div>
        `;
        resultDiv.classList.remove('hidden');
    });

    function calculateMacros(age, weight, height, activity, goal) {
        // Calculate Basal Metabolic Rate (BMR) using Mifflin-St Jeor Equation
        const bmr = 10 * weight + 6.25 * height - 5 * age + 5; // For men; for women, subtract 161

        let activityMultiplier;
        switch (activity) {
            case 'light':
                activityMultiplier = 1.375;
                break;
            case 'moderate':
                activityMultiplier = 1.55;
                break;
            case 'active':
                activityMultiplier = 1.725;
                break;
            case 'very_active':
                activityMultiplier = 1.9;
                break;
            case 'super_active':
                activityMultiplier = 2.2;
                break;
            default:
                activityMultiplier = 1.2; // Sedentary
                break;
        }

        const tdee = bmr * activityMultiplier; // Total Daily Energy Expenditure

        let calorieIntake;
        switch (goal) {
            case 'weight_loss':
                calorieIntake = tdee - 500;
                break;
            case 'muscle_gain':
                calorieIntake = tdee + 500;
                break;
            default:
                calorieIntake = tdee; // Maintenance
                break;
        }

        // Macronutrient distribution (assuming a balanced diet: 30% protein, 25% fat, 45% carbs)
        const protein = (calorieIntake * 0.30) / 4;
        const fat = (calorieIntake * 0.25) / 9;
        const carbs = (calorieIntake * 0.45) / 4;

        return { protein, fat, carbs };
    }

    function getDietSuggestion(macros) {
        const proteinGrams = macros.protein.toFixed(1);
        const fatGrams = macros.fat.toFixed(1);
        const carbGrams = macros.carbs.toFixed(1);

        // Example diet suggestions (replace with actual recommendations)
        const vegetarianDiet = `
            <span class="font-semibold">Proteins:</span> ${proteinGrams}g - Foods rich in protein like tofu, lentils, beans.<br>
            <span class="font-semibold">Fats:</span> ${fatGrams}g - Healthy fats from nuts, avocado.<br>
            <span class="font-semibold">Carbohydrates:</span> ${carbGrams}g - Whole grains, fruits, vegetables.
        `;
        const nonVegetarianDiet = `
            <span class="font-semibold">Proteins:</span> ${proteinGrams}g - Lean meats like chicken breast, fish.<br>
            <span class="font-semibold">Fats:</span> ${fatGrams}g - Omega-3 rich fats from fish, nuts.<br>
            <span class="font-semibold">Carbohydrates:</span> ${carbGrams}g - Whole grains, fruits, vegetables.
        `;

        return { vegetarian: vegetarianDiet, nonVegetarian: nonVegetarianDiet };
    }

    function convertFeetToCm(feet) {
        const inches = feet * 12;
        return inches * 2.54; // 1 inch = 2.54 cm
    }

    // Toggle instructions visibility
    const instructionsToggleBtn = document.getElementById('instructionsToggleBtn');
    const instructionsContent = document.getElementById('instructionsContent');
    instructionsToggleBtn.addEventListener('click', function() {
        instructionsContent.classList.toggle('hidden');
    });
});
