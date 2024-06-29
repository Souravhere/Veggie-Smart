let maintenanceRecords = [];

function addMaintenance() {
    const maintenanceType = document.getElementById('maintenanceType').value;
    const maintenanceCost = parseFloat(document.getElementById('maintenanceCost').value);
    const maintenanceDate = document.getElementById('maintenanceDate').value;

    if (!maintenanceType || isNaN(maintenanceCost) || !maintenanceDate) {
        alert("Please enter valid details for all fields.");
        return;
    }

    const record = {
        type: maintenanceType,
        cost: maintenanceCost,
        date: maintenanceDate
    };

    maintenanceRecords.push(record);
    updateMaintenanceTable();
    document.getElementById('maintenanceRecords').classList.remove('hidden');
    document.getElementById('maintenanceType').value = ''; // Clear input after adding
    document.getElementById('maintenanceCost').value = ''; // Clear input after adding
}

function updateMaintenanceTable() {
    const tableBody = document.getElementById('maintenanceTableBody');
    tableBody.innerHTML = '';

    let totalCost = 0;
    maintenanceRecords.forEach(record => {
        totalCost += record.cost;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="border-b border-gray-600 py-2 px-3">${record.type}</td>
            <td class="border-b border-gray-600 py-2 px-3">Rupees ${record.cost.toFixed(2)}</td>
            <td class="border-b border-gray-600 py-2 px-3">${record.date}</td>
        `;
        tableBody.appendChild(row);
    });

    document.getElementById('totalMaintenanceCost').innerText = `Total Maintenance Cost: Rupees ${totalCost.toFixed(2)}`;
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Maintenance Cost Calculator', 105, 20, { align: 'center' });
    doc.setFontSize(12);

    // Add records
    const tableData = maintenanceRecords.map(record => [record.type, `Rupees ${record.cost.toFixed(2)}`, record.date]);
    doc.autoTable({
        head: [['Maintenance Type', 'Cost (Rupees)', 'Date']],
        body: tableData,
        startY: 30
    });

    // Add total cost
    const totalCost = maintenanceRecords.reduce((acc, record) => acc + record.cost, 0);
    doc.text(`Total Maintenance Cost: Rupees ${totalCost.toFixed(2)}`, 20, doc.autoTable.previous.finalY + 10);

    // Add explanation
    doc.text('The Maintenance Cost Calculator helps you keep track of your vehicle maintenance expenses.', 20, doc.autoTable.previous.finalY + 20);
    doc.text('How to Use:', 20, doc.autoTable.previous.finalY + 30);
    doc.text('1. Enter the type of maintenance activity (e.g., Oil Change).', 20, doc.autoTable.previous.finalY + 40);
    doc.text('2. Enter the cost of the maintenance in Rupees.', 20, doc.autoTable.previous.finalY + 50);
    doc.text('3. Select the date of the maintenance.', 20, doc.autoTable.previous.finalY + 60);
    doc.text('4. Click "Add Maintenance" to record the maintenance activity.', 20, doc.autoTable.previous.finalY + 70);
    doc.text('5. Review the maintenance records and total cost displayed in the table.', 20, doc.autoTable.previous.finalY + 80);
    doc.text('6. Optionally, download a PDF report for record-keeping.', 20, doc.autoTable.previous.finalY + 90);

    // Add copyright notice
    doc.text('© 2024 Maintenance Cost Calculator By Veggie Smart', 105, doc.internal.pageSize.height - 20, { align: 'center' });

    doc.save('maintenance-cost-calculator.pdf');
}