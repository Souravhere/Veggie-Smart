document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');
    const totalInterestEl = document.getElementById('totalInterest');
    const totalAmountEl = document.getElementById('totalAmount');
    const interestChartEl = document.getElementById('interestChart');

    calculateBtn.addEventListener('click', function() {
        const principal = parseFloat(document.getElementById('principal').value);
        const interestRate = parseFloat(document.getElementById('interestRate').value);
        const compoundingFrequency = document.getElementById('compoundingFrequency').value;
        const timePeriod = parseFloat(document.getElementById('timePeriod').value);

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

        let n;
        switch (compoundingFrequency) {
            case 'annual':
                n = 1;
                break;
            case 'semi-annual':
                n = 2;
                break;
            case 'quarterly':
                n = 4;
                break;
            case 'monthly':
                n = 12;
                break;
            case 'weekly':
                n = 52;
                break;
            case 'daily':
                n = 365;
                break;
            default:
                n = 1;
        }

        const r = interestRate / 100;
        const A = principal * Math.pow((1 + r / n), n * timePeriod);
        const totalInterest = A - principal;

        totalInterestEl.innerHTML = `<strong>Total Interest:</strong> ₹${totalInterest.toFixed(2)}`;
        totalAmountEl.innerHTML = `<strong>Total Amount (Principal + Interest):</strong> ₹${A.toFixed(2)}`;

        resultDiv.classList.remove('hidden');

        // Generate chart data
        const labels = [];
        const data = [];
        for (let i = 1; i <= timePeriod * n; i++) {
            const t = i / n;
            labels.push(t.toFixed(1).toString());
            data.push(principal * Math.pow((1 + r / n), i));
        }

        // Create chart
        new Chart(interestChartEl, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Investment Growth Over Time',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    data: data,
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Time (Years)'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Amount (₹)'
                        }
                    }
                }
            }
        });
    });
});
