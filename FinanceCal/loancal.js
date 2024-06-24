document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');
    const monthlyPaymentEl = document.getElementById('monthlyPayment');
    const totalInterestEl = document.getElementById('totalInterest');
    const totalPaymentEl = document.getElementById('totalPayment');
    const scheduleBody = document.getElementById('scheduleBody');
    const loanPieChartEl = document.getElementById('loanPieChart');
    const tenureTypeEl = document.getElementById('tenureType');
    let loanPieChart;

    calculateBtn.addEventListener('click', function() {
        const loanAmount = parseFloat(document.getElementById('loanAmount').value);
        const interestRate = parseFloat(document.getElementById('interestRate').value);
        let loanTenure = parseInt(document.getElementById('loanTenure').value);
        const additionalFees = parseFloat(document.getElementById('additionalFees').value) || 0;
        const tenureType = tenureTypeEl.value;

        if (tenureType === 'years') {
            loanTenure *= 12; // Convert years to months
        }

        if (isNaN(loanAmount) || loanAmount <= 0) {
            alert('Please enter a valid loan amount.');
            return;
        }

        if (isNaN(interestRate) || interestRate <= 0) {
            alert('Please enter a valid interest rate.');
            return;
        }

        if (isNaN(loanTenure) || loanTenure <= 0) {
            alert('Please enter a valid loan tenure.');
            return;
        }

        const { monthlyPayment, totalInterest, totalPayment, schedule } = calculateLoan(loanAmount, interestRate, loanTenure, additionalFees);

        monthlyPaymentEl.innerHTML = `<strong>Monthly Payment:</strong> ₹${monthlyPayment.toFixed(2)}`;
        totalInterestEl.innerHTML = `<strong>Total Interest Paid:</strong> ₹${totalInterest.toFixed(2)}`;
        totalPaymentEl.innerHTML = `<strong>Total Payment:</strong> ₹${totalPayment.toFixed(2)}`;

        displayAmortizationSchedule(schedule);
        displayLoanPieChart(loanAmount, totalInterest);

        resultDiv.classList.remove('hidden');
    });

    function calculateLoan(amount, annualRate, months, fees) {
        const monthlyRate = annualRate / 12 / 100;
        const principal = amount + fees;
        const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
        const totalPayment = monthlyPayment * months;
        const totalInterest = totalPayment - amount;

        let balance = principal;
        const schedule = [];

        for (let i = 1; i <= months; i++) {
            const interestPayment = balance * monthlyRate;
            const principalPayment = monthlyPayment - interestPayment;
            balance -= principalPayment;
            schedule.push({
                month: i,
                principal: principalPayment,
                interest: interestPayment,
                total: monthlyPayment,
                balance: Math.max(balance, 0)
            });
        }

        return { monthlyPayment, totalInterest, totalPayment, schedule };
    }

    function displayAmortizationSchedule(schedule) {
        scheduleBody.innerHTML = '';
        schedule.forEach(payment => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="border px-4 py-2">${payment.month}</td>
                <td class="border px-4 py-2">₹${payment.principal.toFixed(2)}</td>
                <td class="border px-4 py-2">₹${payment.interest.toFixed(2)}</td>
                <td class="border px-4 py-2">₹${payment.total.toFixed(2)}</td>
                <td class="border px-4 py-2">₹${payment.balance.toFixed(2)}</td>
            `;
            scheduleBody.appendChild(row);
        });

        document.getElementById('amortizationSchedule').classList.remove('hidden');
    }

    function displayLoanPieChart(principal, interest) {
        if (loanPieChart) {
            loanPieChart.destroy();
        }

        loanPieChart = new Chart(loanPieChartEl, {
            type: 'pie',
            data: {
                labels: ['Principal', 'Interest'],
                datasets: [{
                    data: [principal, interest],
                    backgroundColor: ['#4CAF50', '#FF6384'],
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
                                return tooltipItem.label + ': ₹' + tooltipItem.raw.toFixed(2);
                            }
                        }
                    }
                }
            }
        });
    }
});