function calculateMarketShare() {
    const companySales = parseFloat(document.getElementById('companySales').value);
    const totalMarketSales = parseFloat(document.getElementById('totalMarketSales').value);

    if (isNaN(companySales) || isNaN(totalMarketSales) || totalMarketSales <= 0) {
        document.getElementById('result').innerHTML = '<p class="error">Please enter valid sales values.</p>';
        return;
    }

    const marketShare = (companySales / totalMarketSales) * 100;

    document.getElementById('result').innerHTML = `
        <h3 class="text-2xl font-bold mb-4">Market Share Calculation</h3>
        <div class="mb-4">
            <p><strong>Company's Sales:</strong> $${companySales.toLocaleString()}</p>
            <p><strong>Total Market Sales:</strong> $${totalMarketSales.toLocaleString()}</p>
            <p><strong>Market Share:</strong> ${marketShare.toFixed(2)}%</p>
        </div>
        <canvas id="marketShareChart"></canvas>
    `;

    const ctx = document.getElementById('marketShareChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Company', 'Market'],
            datasets: [{
                label: 'Market Share',
                data: [companySales, totalMarketSales - companySales],
                backgroundColor: ['#4caf50', '#cbd5e0'],
                borderColor: ['#2d3748', '#2d3748'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                }
            }
        }
    });
}