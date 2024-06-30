let expenses = [];

function addExpense() {
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (description && category && amount) {
        expenses.push({ description, category, amount });
        updateExpenseTable();
        updateSummary();
        clearForm();
    } else {
        alert('Please fill all fields');
    }
}

function editExpense(index) {
    const expense = expenses[index];
    document.getElementById('description').value = expense.description;
    document.getElementById('category').value = expense.category;
    document.getElementById('amount').value = expense.amount;

    expenses.splice(index, 1);
    updateExpenseTable();
    updateSummary();
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    updateExpenseTable();
    updateSummary();
}

function updateExpenseTable() {
    const tableBody = document.getElementById('expenseTableBody');
    tableBody.innerHTML = '';

    expenses.forEach((expense, index) => {
        const row = document.createElement('tr');

        const descriptionCell = document.createElement('td');
        descriptionCell.classList.add('px-4', 'py-2');
        descriptionCell.textContent = expense.description;
        row.appendChild(descriptionCell);

        const categoryCell = document.createElement('td');
        categoryCell.classList.add('px-4', 'py-2');
        categoryCell.textContent = expense.category;
        row.appendChild(categoryCell);

        const amountCell = document.createElement('td');
        amountCell.classList.add('px-4', 'py-2');
        amountCell.textContent = expense.amount;
        row.appendChild(amountCell);

        const actionsCell = document.createElement('td');
        actionsCell.classList.add('px-4', 'py-2');
        actionsCell.innerHTML = `
            <button onclick="editExpense(${index})" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded mr-2">Edit</button>
            <button onclick="deleteExpense(${index})" class="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded">Delete</button>
        `;
        row.appendChild(actionsCell);

        tableBody.appendChild(row);
    });
}

function updateSummary() {
    const totalBudget = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    document.getElementById('totalBudget').textContent = totalBudget;

    const categoryBreakdown = expenses.reduce((breakdown, expense) => {
        if (!breakdown[expense.category]) {
            breakdown[expense.category] = 0;
        }
        breakdown[expense.category] += expense.amount;
        return breakdown;
    }, {});

    const breakdownList = document.getElementById('categoryBreakdown');
    breakdownList.innerHTML = '';
    for (const [category, amount] of Object.entries(categoryBreakdown)) {
        const listItem = document.createElement('li');
        listItem.textContent = `${category}: ${amount} Rupees`;
        breakdownList.appendChild(listItem);
    }
}

function clearForm() {
    document.getElementById('description').value = '';
    document.getElementById('category').value = 'Venue';
    document.getElementById('amount').value = '';
}

async function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text('Budget Planner', 14, 16);
    doc.text('Total Budget: ' + document.getElementById('totalBudget').textContent + ' Rupees', 14, 24);

    const rows = expenses.map(expense => [expense.description, expense.category, expense.amount]);
    doc.autoTable({
        head: [['Description', 'Category', 'Amount (Rupees)']],
        body: rows,
        startY: 30
    });

    // Show loading indicator
    document.getElementById('loadingIndicator').classList.remove('hidden');

    setTimeout(() => {
        doc.save('budget_planner.pdf');
        // Hide loading indicator
        document.getElementById('loadingIndicator').classList.add('hidden');
    }, 1000);
}