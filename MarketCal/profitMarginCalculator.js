function calculateProfitMargin() {
    const costPrice = parseFloat(document.getElementById('costPrice').value);
    const sellingPrice = parseFloat(document.getElementById('sellingPrice').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(costPrice) || isNaN(sellingPrice)) {
        resultDiv.innerHTML = 'Please enter valid values for cost price and selling price.';
        return;
    }

    if (sellingPrice <= costPrice) {
        resultDiv.innerHTML = 'Selling price should be greater than cost price.';
        return;
    }

    const profit = sellingPrice - costPrice;
    const profitMargin = (profit / sellingPrice) * 100;

    resultDiv.innerHTML = `Your profit margin is approximately <strong>${profitMargin.toFixed(2)}%</strong>.`;

    // Display Chart
    const ctx = document.createElement('canvas');
    resultDiv.appendChild(ctx);
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
