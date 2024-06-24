document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');
    const totalInterestEl = document.getElementById('totalInterest');
    const totalAmountEl = document.getElementById('totalAmount');
    const interestChartEl = document.getElementById('interestChart');
    let interestChart;

    calculateBtn.addEventListener('click', function() {
        const principal = parseFloat(document.getElementById('principal').value);
        const interestRate = parseFloat(document.getElementById('interestRate').value);
        const timePeriod = parseFloat(document.getElementById('timePeriod').value);
        const timeUnit = document.getElementById('timeUnit').value;
        const rateType = document.getElementById('rateType').value;

        if (isNaN(principal) || principal <= 0) {
            alert('Please enter a valid principal amount.');
            return;
        }

        if (isNaN(interestRate) || interestRate < 0) {
            alert('Please enter a valid interest rate.');
            return;
        }

        if (isNaN(timePeriod) || timePeriod <= 0) {
            alert('Please enter a valid time period.');
            return;
        }

        let time = timePeriod;
        if (timeUnit === 'months') {
            time = timePeriod / 12; // Convert months to years
        }

        let rate = interestRate;
        if (rateType === 'monthly') {
            rate = interestRate * 12; // Convert monthly rate to annual rate
        }

        const totalInterest = (principal * rate * time) / 100;
        const totalAmount = principal + totalInterest;

        totalInterestEl.innerHTML = `<strong>Total Interest:</strong> ₹${totalInterest.toFixed(2)}`;
        totalAmountEl.innerHTML = `<strong>Total Amount (Principal + Interest):</strong> ₹${totalAmount.toFixed(2)}`;

        // Create the chart
        if (interestChart) {
            interestChart.destroy();
        }

        interestChart = new Chart(interestChartEl, {
            type: 'pie',
            data: {
                labels: ['Principal', 'Total Interest'],
                datasets: [{
                    data: [principal, totalInterest],
                    backgroundColor: ['#4caf50', '#ff5722'],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Interest Breakdown'
                    }
                }
            },
        });

        resultDiv.classList.remove('hidden');
    });
});
