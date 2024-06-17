const nutritionData = {
    carrot: { calories: 41, protein: 0.9, carbs: 9.6, fat: 0.2 },
    broccoli: { calories: 34, protein: 2.8, carbs: 6.6, fat: 0.4 },
    spinach: { calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4 },
    potato: { calories: 77, protein: 2.0, carbs: 17.5, fat: 0.1 },
    tomato: { calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2 },
    onion: { calories: 40, protein: 1.1, carbs: 9.3, fat: 0.1 },
    cucumber: { calories: 15, protein: 0.7, carbs: 3.6, fat: 0.1 },
    pepper: { calories: 20, protein: 0.9, carbs: 4.6, fat: 0.2 },
    // Add more vegetables and their nutritional values as needed
};

function calculateNutrition() {
    const vegetableType = document.getElementById('vegetableType').value;
    const vegQty = parseFloat(document.getElementById('vegQty').value) || 0;

    if (!vegetableType || !vegQty) {
        document.getElementById('nutritionResult').innerText = 'Please enter a vegetable type and quantity.';
        return;
    }

    const nutrition = nutritionData[vegetableType];
    const totalCalories = (nutrition.calories * vegQty) / 100;
    const totalProtein = (nutrition.protein * vegQty) / 100;
    const totalCarbs = (nutrition.carbs * vegQty) / 100;
    const totalFat = (nutrition.fat * vegQty) / 100;

    document.getElementById('nutritionResult').innerHTML = `
        <span id="resultbox">
        <p>Calories: ${totalCalories.toFixed(2)} kcal</p>
        <p>Protein: ${totalProtein.toFixed(2)} g</p>
        <p>Carbohydrates: ${totalCarbs.toFixed(2)} g</p>
        <p>Fat: ${totalFat.toFixed(2)} g</p>
        <span>
    `;
}
