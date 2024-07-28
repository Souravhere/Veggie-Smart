function updateForm() {
    const calcType = document.getElementById('calcType').value;
    document.querySelectorAll('.calc-fields').forEach(field => field.classList.add('hidden'));
    switch (calcType) {
        case 'normal':
            document.getElementById('normalMarginFields').classList.remove('hidden');
            break;
        case 'quantity':
            document.getElementById('quantityMarginFields').classList.remove('hidden');
            break;
        case 'shop':
            document.getElementById('shopMarginFields').classList.remove('hidden');
            break;
    }
}

function calculateProfitMargin() {
    const calcType = document.getElementById('calcType').value;
    let profitMargin = 0;
    let profit = 0;
    let resultDiv = document.getElementById('result');

    switch (calcType) {
        case 'normal':
            const costPrice = parseFloat(document.getElementById('costPrice').value);
            const sellingPrice = parseFloat(document.getElementById('sellingPrice').value);

            if (isNaN(costPrice) || isNaN(sellingPrice)) {
                resultDiv.innerHTML = 'Please enter valid values for cost price and selling price.';
                return;
            }

            if (sellingPrice <= costPrice) {
                resultDiv.innerHTML = 'Selling price should be greater than cost price.';
                return;
            }

            profit = sellingPrice - costPrice;
            profitMargin = (profit / sellingPrice) * 100;
            break;

        case 'quantity':
            const quantity = parseFloat(document.getElementById('quantity').value);
            const pricePerKg = parseFloat(document.getElementById('pricePerKg').value);
            const sellingPriceKg = parseFloat(document.getElementById('sellingPriceKg').value);

            if (isNaN(quantity) || isNaN(pricePerKg) || isNaN(sellingPriceKg)) {
                resultDiv.innerHTML = 'Please enter valid values for quantity, price per kg, and selling price.';
                return;
            }

            const totalCost = quantity * pricePerKg;
            profit = (sellingPriceKg * quantity) - totalCost;
            profitMargin = (profit / (sellingPriceKg * quantity)) * 100;
            break;

        case 'shop':
            const costPriceShop = parseFloat(document.getElementById('costPriceShop').value);
            const expenses = parseFloat(document.getElementById('expenses').value);
            const sellingPriceShop = parseFloat(document.getElementById('sellingPriceShop').value);

            if (isNaN(costPriceShop) || isNaN(expenses) || isNaN(sellingPriceShop)) {
                resultDiv.innerHTML = 'Please enter valid values for cost price, expenses, and selling price.';
                return;
            }

            const totalCostShop = costPriceShop + expenses;
            profit = sellingPriceShop - totalCostShop;
            profitMargin = (profit / sellingPriceShop) * 100;
            break;
    }

    resultDiv.innerHTML = `Your profit amount is <strong>₹${profit.toFixed(2)}</strong> and your profit margin is approximately <strong>${profitMargin.toFixed(2)}%</strong>.`;

    // Display Chart
    resultDiv.innerHTML += '<canvas id="profitMarginChart" class="mt-4"></canvas>';
    const ctx = document.getElementById('profitMarginChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Profit Margin', 'Cost'],
            datasets: [{
                data: [profitMargin.toFixed(2), (100 - profitMargin).toFixed(2)],
                backgroundColor: ['#4caf50', '#f44336'],
                borderColor: ['#388e3c', '#d32f2f'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });
}
