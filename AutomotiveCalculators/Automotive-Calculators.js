function calculateFuelCost() {
    const distance = parseFloat(document.getElementById('distance').value);
    const efficiency = parseFloat(document.getElementById('efficiency').value);
    const price = parseFloat(document.getElementById('price').value);

    if (isNaN(distance) || isNaN(efficiency) || isNaN(price)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    const fuelCost = (distance / efficiency) * price;

    document.getElementById('fuelCost').innerHTML = `<h3 class="block text-center bg-green-500 hover:bg-green-300 font-bold py-2 rounded-lg">Estimated Fuel Cost: ₹${fuelCost.toFixed(2)}</h3>`;
    document.getElementById('description').innerText = `This value represents the estimated cost of fuel required for your trip.`;
    document.getElementById('results').classList.remove('hidden');
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const distance = document.getElementById('distance').value;
    const efficiency = document.getElementById('efficiency').value;
    const price = document.getElementById('price').value;
    const fuelCost = document.getElementById('fuelCost').innerText;
    const description = document.getElementById('description').innerText;

    doc.setFontSize(16);
    doc.text('Fuel Cost Calculator', 105, 20, { align: 'center' });
    doc.setFontSize(12);
    doc.text(`Distance: ${distance} km`, 20, 30);
    doc.text(`Fuel Efficiency: ${efficiency} km/l`, 20, 40);
    doc.text(`Fuel Price: ${price} per liter`, 20, 50);
    doc.text(fuelCost, 20, 60);
    doc.text(description, 20, 70);

    // Adding table specific to fuel cost information
    const tableData = [
        ["Input", "Value"],
        ["Distance", `${distance} km`],
        ["Fuel Efficiency", `${efficiency} km/l`],
        ["Fuel Price", `${price} per liter`],
        ["Estimated Fuel Cost", `${(distance / efficiency * price).toFixed(2)} Rupee`]
    ];
    doc.autoTable({
        startY: 80,
        head: [tableData[0]],
        body: tableData.slice(1),
        theme: 'grid',
        styles: { fontSize: 10 },
        headStyles: { fillColor: [22, 160, 133] },
        alternateRowStyles: { fillColor: [240, 240, 240] }
    });

    // Additional detailed information about the calculator
    doc.text('The Fuel Cost Calculator helps you estimate the total cost of fuel required for a trip based on the given distance, fuel efficiency, and fuel price. This tool is useful for budgeting your travel expenses efficiently.', 20, doc.autoTable.previous.finalY + 10);
    doc.text('How to Use:', 20, doc.autoTable.previous.finalY + 20);
    doc.text('1. Enter the distance to be covered in kilometers.', 20, doc.autoTable.previous.finalY + 30);
    doc.text('2. Enter the fuel efficiency of your vehicle in kilometers per liter.', 20, doc.autoTable.previous.finalY + 40);
    doc.text('3. Enter the price of fuel per liter in Indian Rupees.', 20, doc.autoTable.previous.finalY + 50);
    doc.text('4. Click "Calculate Fuel Cost" to see the estimated cost.', 20, doc.autoTable.previous.finalY + 60);

    // Add copyright notice
    doc.text('© 2024 Advanced Fuel Cost Calculator By Veggie Smart', 105, doc.internal.pageSize.height - 20, { align: 'center' });

    doc.save('fuel-cost-calculator.pdf');
}