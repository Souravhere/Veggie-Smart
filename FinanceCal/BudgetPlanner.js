document.addEventListener('DOMContentLoaded', function() {
    const addExpenseBtn = document.getElementById('addExpenseBtn');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');
    const totalIncomeEl = document.getElementById('totalIncome');
    const totalExpensesEl = document.getElementById('totalExpenses');
    const totalSavingsEl = document.getElementById('totalSavings');
    const budgetChartEl = document.getElementById('budgetChart');
    const expensesContainer = document.getElementById('expensesContainer');
    let budgetChart;

    addExpenseBtn.addEventListener('click', function() {
        const expenseItem = document.createElement('div');
        expenseItem.className = 'expenseItem mb-2 flex';
        expenseItem.innerHTML = `
            <input type="text" placeholder="Expense Description" class="expenseDescription mt-1 block w-1/2 p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 mr-2">
            <input type="number" placeholder="Amount (₹)" class="expenseAmount mt-1 block w-1/2 p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
        `;
        expensesContainer.appendChild(expenseItem);
    });

    calculateBtn.addEventListener('click', function() {
        const monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value);
        const expenseDescriptions = document.querySelectorAll('.expenseDescription');
        const expenseAmounts = document.querySelectorAll('.expenseAmount');

        if (isNaN(monthlyIncome) || monthlyIncome <= 0) {
            alert('Please enter a valid monthly income.');
            return;
        }

        let totalExpenses = 0;
        expenseAmounts.forEach(amount => {
            const value = parseFloat(amount.value);
            if (!isNaN(value) && value > 0) {
                totalExpenses += value;
            }
        });

        const totalSavings = monthlyIncome - totalExpenses;

        totalIncomeEl.innerHTML = `<strong>Total Income:</strong> ₹${monthlyIncome.toFixed(2)}`;
        totalExpensesEl.innerHTML = `<strong>Total Expenses:</strong> ₹${totalExpenses.toFixed(2)}`;
        totalSavingsEl.innerHTML = `<strong>Total Savings:</strong> ₹${totalSavings.toFixed(2)}`;

        displayBudgetChart(monthlyIncome, totalExpenses, totalSavings);

        resultDiv.classList.remove('hidden');
    });

    function displayBudgetChart(income, expenses, savings) {
        if (budgetChart) {
            budgetChart.destroy();
        }

        budgetChart = new Chart(budgetChartEl, {
            type: 'pie',
            data: {
                labels: ['Income', 'Expenses', 'Savings'],
                datasets: [{
                    data: [income, expenses, savings],
                    backgroundColor: ['#4CAF50', '#F44336', '#2196F3'],
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
                                return `${tooltipItem.label}: ₹${tooltipItem.raw.toFixed(2)}`;
                            }
                        }
                    }
                }
            }
        });
    }
});
