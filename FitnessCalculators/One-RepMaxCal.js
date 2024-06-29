function calculateOneRepMax() {
    const weight = document.getElementById('weight').value;
    const reps = document.getElementById('reps').value;

    if (weight && reps) {
        const oneRepMax = weight * (1 + reps / 30);
        const oneRepMaxRounded = oneRepMax.toFixed(2);

        document.getElementById('oneRepMax').innerText = `One-Rep Max: ${oneRepMaxRounded} kg`;
        document.getElementById('description').innerText = `This value represents the maximum weight you can lift for one repetition.`;

        document.getElementById('results').classList.remove('hidden');
    }
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const weight = document.getElementById('weight').value;
    const reps = document.getElementById('reps').value;
    const oneRepMax = document.getElementById('oneRepMax').innerText;
    const description = document.getElementById('description').innerText;

    doc.text('One-Rep Max Calculator', 105, 20, { align: 'center' });
    doc.text(`Weight Lifted: ${weight} kg`, 20, 30);
    doc.text(`Repetitions: ${reps}`, 20, 40);
    doc.text(oneRepMax, 20, 50);
    doc.text(description, 20, 60);

    // Add the body fat percentage table to the PDF
    const tableData = [
        ['Description', 'Women', 'Men'],
        ['Essential fat', '10-13%', '2-5%'],
        ['Athletes', '14-20%', '6-13%'],
        ['Fitness', '21-24%', '14-17%'],
        ['Average', '25-31%', '18-24%'],
        ['Obese', '32+%', '25+%']
    ];

    doc.autoTable({
        head: [tableData[0]],
        body: tableData.slice(1),
        startY: 70,
        theme: 'striped'
    });

    // Add copyright notice
    doc.text('© 2024 One-Rep Max Calculator By Veggie Smart', 105, doc.internal.pageSize.height - 20, { align: 'center' });

    doc.save('one-rep-max-calculator.pdf');
}