let ingredients = [];
let selectedSuggestionIndex = -1;

const ingredientSuggestions = [
    "Tomato", "Potato", "Onion", "Carrot", "Spinach", "Broccoli", "Pepper", "Cabbage", "Cauliflower", "Cucumber",
    "Garlic", "Ginger", "Peas", "Beans", "Mushroom", "Corn", "Lettuce", "Pumpkin", "Zucchini", "Eggplant"
];

function suggestIngredients() {
    const input = document.getElementById('ingredientName').value.toLowerCase();
    const suggestionBox = document.getElementById('suggestionBox');
    suggestionBox.innerHTML = '';
    selectedSuggestionIndex = -1;
    
    if (input) {
        const suggestions = ingredientSuggestions.filter(ingredient => 
            ingredient.toLowerCase().includes(input)
        );

        if (suggestions.length) {
            suggestionBox.style.display = 'block';
            suggestions.forEach(suggestion => {
                const suggestionElement = document.createElement('p');
                suggestionElement.textContent = suggestion;
                suggestionElement.onclick = () => selectSuggestion(suggestion);
                suggestionBox.appendChild(suggestionElement);
            });
        } else {
            suggestionBox.style.display = 'none';
        }
    } else {
        suggestionBox.style.display = 'none';
    }
}

function navigateSuggestions(event) {
    const suggestionBox = document.getElementById('suggestionBox');
    const suggestions = Array.from(suggestionBox.children);

    if (suggestions.length) {
        if (event.key === 'ArrowDown') {
            selectedSuggestionIndex = (selectedSuggestionIndex + 1) % suggestions.length;
            highlightSuggestion(suggestions);
        } else if (event.key === 'ArrowUp') {
            selectedSuggestionIndex = (selectedSuggestionIndex - 1 + suggestions.length) % suggestions.length;
            highlightSuggestion(suggestions);
        } else if (event.key === 'Enter') {
            if (selectedSuggestionIndex >= 0) {
                selectSuggestion(suggestions[selectedSuggestionIndex].textContent);
                event.preventDefault();
            }
        }
    }
}

function highlightSuggestion(suggestions) {
    suggestions.forEach((suggestion, index) => {
        suggestion.classList.toggle('selected', index === selectedSuggestionIndex);
    });
}

function selectSuggestion(suggestion) {
    document.getElementById('ingredientName').value = suggestion;
    document.getElementById('suggestionBox').style.display = 'none';
}

function addIngredient() {
    const ingredientName = document.getElementById('ingredientName').value;
    const ingredientQty = parseFloat(document.getElementById('ingredientQty').value) || 0;
    const ingredientPrice = parseFloat(document.getElementById('ingredientPrice').value) || 0;

    if (!ingredientName || !ingredientQty || !ingredientPrice) {
        alert('Please enter valid ingredient details.');
        return;
    }

    ingredients.push({ name: ingredientName, qty: ingredientQty, price: ingredientPrice });
    updateIngredientsList();

    // Clear input fields
    document.getElementById('ingredientName').value = '';
    document.getElementById('ingredientQty').value = '';
    document.getElementById('ingredientPrice').value = '';
}

function updateIngredientsList() {
    const ingredientsList = document.getElementById('ingredientsList');
    ingredientsList.innerHTML = ingredients.map((ingredient, index) => `
        <div class="flex justify-between items-center bg-gray-700 p-2 rounded mb-2">
            <p>${ingredient.name}: ${ingredient.qty}g at ₹${ingredient.price} per kg</p>
            <button class="bg-red-600 text-white p-1 rounded" onclick="removeIngredient(${index})">Remove</button>
        </div>
    `).join('');
}

function removeIngredient(index) {
    ingredients.splice(index, 1);
    updateIngredientsList();
}

function calculateRecipeCost() {
    const totalCost = ingredients.reduce((sum, ingredient) => {
        return sum + (ingredient.qty / 1000 * ingredient.price);
    }, 0);
    
    document.getElementById('recipeCostResult').innerHTML = `
        <p class="text-lg">Total Cost: ₹${totalCost.toFixed(2)}</p>
    `;
}
