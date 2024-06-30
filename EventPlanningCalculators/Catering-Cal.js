function calculateCatering() {
    const guestCount = parseInt(document.getElementById('guestCount').value);
    const foodOption = document.getElementById('foodOption').value;
    const drinkOption = document.getElementById('drinkOption').value;

    if (!guestCount || guestCount <= 0) {
        alert('Please enter a valid number of guests.');
        return;
    }

    // Example calculation - You can replace this with your own logic
    let foodPerGuest = 1.5; // Default units of food per guest
    let drinkPerGuest = 2; // Default units of drinks per guest

    // Adjust food and drink quantities based on options selected
    switch (foodOption) {
        case 'premium':
            foodPerGuest = 2.5;
            break;
        case 'custom':
            // Implement custom logic for custom menu
            break;
        default:
            // Default is basic meal
            break;
    }

    switch (drinkOption) {
        case 'premium':
            drinkPerGuest = 3;
            break;
        case 'custom':
            // Implement custom logic for custom drinks
            break;
        default:
            // Default is standard drinks
            break;
    }

    const totalFood = guestCount * foodPerGuest;
    const totalDrinks = guestCount * drinkPerGuest;
    const totalCost = calculateTotalCost(totalFood, totalDrinks);

    // Display results
    document.getElementById('foodResults').textContent = `Food Needed: ${totalFood} units`;
    document.getElementById('drinkResults').textContent = `Drinks Needed: ${totalDrinks} units`;
    document.getElementById('totalCost').textContent = `Estimated Cost: ₹${totalCost.toFixed(2)}`;

    // Show results section
    document.getElementById('results').classList.remove('hidden');
}

function calculateTotalCost(totalFood, totalDrinks) {
    // Example calculation for total cost estimation
    const foodUnitCost = 50; // Cost per unit of food (adjust as per actual pricing)
    const drinkUnitCost = 30; // Cost per unit of drink (adjust as per actual pricing)

    const totalCost = (totalFood * foodUnitCost) + (totalDrinks * drinkUnitCost);
    return totalCost;
}