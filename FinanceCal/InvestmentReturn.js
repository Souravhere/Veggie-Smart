document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');
    const finalAmountEl = document.getElementById('finalAmount');
    const totalContributionsEl = document.getElementById('totalContributions');
    const totalInterestEarnedEl = document.getElementById('totalInterestEarned');
    const investmentChartEl = document.getElementById('investmentChart');
    const investmentTypeSelect = document.getElementById('investmentType');
    const monthlyContributionDiv = document.getElementById('monthlyContributionDiv');
    let investmentChart;

    investmentTypeSelect.addEventListener('change', function() {
        if (investmentTypeSelect.value === 'monthly') {
            monthlyContributionDiv.classList.remove('hidden');
        } else {
            monthlyContributionDiv.classList.add('hidden');
        }
    });

    calculateBtn.addEventListener('click', function() {
        const initialInvestment = parseFloat(document.getElementById('initialInvestment').value);
        const annualInterestRate = parseFloat(document.getElementById('annualInterestRate').value);
        const investmentDuration = parseInt(document.getElementById('investmentDuration').value);
        const monthlyContribution = investmentTypeSelect.value === 'monthly' ? parseFloat(document.getElementById('monthlyContribution').value) || 0 : 0;

        if (isNaN(initialInvestment) || initialInvestment <= 0) {
            alert('Please enter a valid initial investment amount.');
            return;
        }

        if (isNaN(annualInterestRate) || annualInterestRate <= 0) {
            alert('Please enter a valid annual interest rate.');
            return;
        }

        if (isNaN(investmentDuration) || investmentDuration <= 0) {
            alert('Please enter a valid investment duration.');
            return;
        }

        const { finalAmount, totalContributions, totalInterestEarned, values } = calculateInvestment(initialInvestment, annualInterestRate, investmentDuration, monthlyContribution);

        finalAmountEl.innerHTML = `<strong>Final Amount:</strong> ₹${finalAmount.toFixed(2)}`;
        totalContributionsEl.innerHTML = `<strong>Total Contributions:</strong> ₹${totalContributions.toFixed(2)}`;
        totalInterestEarnedEl.innerHTML = `<strong>Total Interest Earned:</strong> ₹${totalInterestEarned.toFixed(2)}`;

        displayInvestmentChart(values);

        resultDiv.classList.remove('hidden');
    });

    function calculateInvestment(initial, annualRate, years, monthlyContribution) {
        const monthlyRate = annualRate / 12 / 100;
        const months = years * 12;
        let finalAmount = initial;
        let totalContributions = initial;
        const values = [];

        for (let i = 1; i <= months; i++) {
            finalAmount = finalAmount * (1 + monthlyRate) + monthlyContribution;
            totalContributions += monthlyContribution;
            if (i % 12 === 0) {
                values.push({ year: i / 12, amount: finalAmount });
            }
        }

        const totalInterestEarned = finalAmount - totalContributions;

        return { finalAmount, totalContributions, totalInterestEarned, values };
    }

    function displayInvestmentChart(values) {
        if (investmentChart) {
            investmentChart.destroy();
        }

        const labels = values.map(value => `Year ${value.year}`);
        const data = values.map(value => value.amount);

        investmentChart = new Chart(investmentChartEl, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Investment Value Over Time',
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
