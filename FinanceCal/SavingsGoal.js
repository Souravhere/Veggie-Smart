document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');
    const monthlySavingsEl = document.getElementById('monthlySavings');
    const savingsChartEl = document.getElementById('savingsChart');
    let savingsChart;

    calculateBtn.addEventListener('click', function() {
        const savingsGoal = parseFloat(document.getElementById('savingsGoal').value);
        const savingsDuration = parseInt(document.getElementById('savingsDuration').value);
        const durationType = document.getElementById('durationType').value;
        const annualInterestRate = parseFloat(document.getElementById('annualInterestRate').value);

        if (isNaN(savingsGoal) || savingsGoal <= 0) {
            alert('Please enter a valid savings goal.');
            return;
        }

        if (isNaN(savingsDuration) || savingsDuration <= 0) {
            alert('Please enter a valid duration.');
            return;
        }

        if (isNaN(annualInterestRate) || annualInterestRate < 0) {
            alert('Please enter a valid annual interest rate.');
            return;
        }

        const durationInMonths = durationType === 'years' ? savingsDuration * 12 : savingsDuration;
        const { monthlySavings, values } = calculateMonthlySavings(savingsGoal, durationInMonths, annualInterestRate);

        monthlySavingsEl.innerHTML = `<strong>Monthly Savings Required:</strong> ₹${monthlySavings.toFixed(2)}`;

        displaySavingsChart(values);

        resultDiv.classList.remove('hidden');
    });

    function calculateMonthlySavings(goal, months, annualRate) {
        const monthlyRate = annualRate / 12 / 100;
        const monthlySavings = goal / ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

        const values = [];
        let accumulatedSavings = 0;
        for (let i = 1; i <= months; i++) {
            accumulatedSavings = accumulatedSavings * (1 + monthlyRate) + monthlySavings;
            if (i % 12 === 0) {
                values.push({ year: i / 12, amount: accumulatedSavings });
            }
        }

        return { monthlySavings, values };
    }

    function displaySavingsChart(values) {
        if (savingsChart) {
            savingsChart.destroy();
        }

        const labels = values.map(value => `Year ${value.year}`);
        const data = values.map(value => value.amount);

        savingsChart = new Chart(savingsChartEl, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Savings Growth Over Time',
                    data: data,
                    borderColor: '#4CAF50',
                    backgroundColor: 'rgba(76, 175, 80, 0.2)',
                    fill: true,
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
                            label: function(tooltipItem) {
                                return `₹${tooltipItem.raw.toFixed(2)}`;
                            }
                        }
                    }
                }
            }
        });
    }
});
