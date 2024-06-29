function calculatePace() {
    const distance = parseFloat(document.getElementById('distance').value);
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    const totalTimeInHours = hours + (minutes / 60) + (seconds / 3600);
    const paceMinutes = totalTimeInHours > 0 ? Math.floor(totalTimeInHours / distance) : 0;
    const paceSeconds = totalTimeInHours > 0 ? Math.round(((totalTimeInHours / distance) - paceMinutes) * 60) : 0;

    const pace = `${paceMinutes}:${paceSeconds < 10 ? '0' + paceSeconds : paceSeconds} min/km`;

    document.getElementById('pace').innerText = `Pace: ${pace}`;
    document.getElementById('description').innerText = `This value represents your running or cycling pace per kilometer.`;
    document.getElementById('results').classList.remove('hidden');
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const distance = document.getElementById('distance').value;
    const hours = document.getElementById('hours').value;
    const minutes = document.getElementById('minutes').value;
    const seconds = document.getElementById('seconds').value;
    const pace = document.getElementById('pace').innerText;
    const description = document.getElementById('description').innerText;

    doc.text('Pace Calculator', 105, 20, { align: 'center' });
    doc.text(`Distance: ${distance} km`, 20, 30);
    doc.text(`Time: ${hours} hours ${minutes} minutes ${seconds} seconds`, 20, 40);
    doc.text(pace, 20, 50);
    doc.text(description, 20, 60);

    // Add the pace categories table to the PDF
    const paceTableData = [
        ['Description', 'Pace (min/km or min/mi)'],
        ['Elite Athlete', '3-4 min/km (5-6 min/mi)'],
        ['Recreational Runner', '5-6 min/km (8-9 min/mi)'],
        ['Average Runner', '7-8 min/km (11-13 min/mi)'],
        ['Leisure Runner', '9-10 min/km (14-16 min/mi)'],
        ['Walkers', '10+ min/km (16+ min/mi)']
    ];

    doc.autoTable({
        head: [paceTableData[0]],
        body: paceTableData.slice(1),
        startY: 70,
        theme: 'striped'
    });

    // Add copyright notice
    doc.text('© 2024 Advanced Pace Calculator By Veggie Smart', 105, doc.internal.pageSize.height - 20, { align: 'center' });

    doc.save('pace-calculator.pdf');
}