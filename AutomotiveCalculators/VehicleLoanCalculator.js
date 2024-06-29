function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const annualInterestRate = parseFloat(document.getElementById('interestRate').value);
    const loanTenure = parseFloat(document.getElementById('loanTenure').value);
    const paymentFrequency = document.getElementById('paymentFrequency').value;

    if (isNaN(loanAmount) || isNaN(annualInterestRate) || isNaN(loanTenure)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    let periodsPerYear;
    switch (paymentFrequency) {
        case 'monthly':
            periodsPerYear = 12;
            break;
        case 'quarterly':
            periodsPerYear = 4;
            break;
        case 'semi-annually':
            periodsPerYear = 2;
            break;
        case 'annually':
            periodsPerYear = 1;
            break;
    }

    const interestRatePerPeriod = annualInterestRate / periodsPerYear / 100;
    const numberOfPayments = loanTenure * periodsPerYear;
    const paymentAmount = (loanAmount * interestRatePerPeriod * Math.pow(1 + interestRatePerPeriod, numberOfPayments)) / (Math.pow(1 + interestRatePerPeriod, numberOfPayments) - 1);
    const totalInterest = (paymentAmount * numberOfPayments) - loanAmount;

    document.getElementById('paymentAmount').innerText = `Estimated Payment: Rupees ${paymentAmount.toFixed(2)} per ${paymentFrequency === 'monthly' ? 'month' : paymentFrequency}`;
    document.getElementById('totalInterest').innerText = `Total Interest: Rupees ${totalInterest.toFixed(2)}`;
    document.getElementById('results').classList.remove('hidden');
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const loanAmount = document.getElementById('loanAmount').value;
    const annualInterestRate = document.getElementById('interestRate').value;
    const loanTenure = document.getElementById('loanTenure').value;
    const paymentFrequency = document.getElementById('paymentFrequency').value;
    const paymentAmount = document.getElementById('paymentAmount').innerText;
    const totalInterest = document.getElementById('totalInterest').innerText;

    doc.setFontSize(16);
    doc.text('Vehicle Loan Calculator', 105, 20, { align: 'center' });
    doc.setFontSize(12);
    doc.text(`Loan Amount: Rupees ${loanAmount}`, 20, 30);
    doc.text(`Annual Interest Rate: ${annualInterestRate}%`, 20, 40);
    doc.text(`Loan Tenure: ${loanTenure} years`, 20, 50);
    doc.text(`Payment Frequency: ${paymentFrequency}`, 20, 60);
    doc.text(paymentAmount, 20, 70);
    doc.text(totalInterest, 20, 80);

    // Adding table specific to loan information
    const tableData = [
        ["Input", "Value"],
        ["Loan Amount", `Rupees ${loanAmount}`],
        ["Annual Interest Rate", `${annualInterestRate}%`],
        ["Loan Tenure", `${loanTenure} years`],
        ["Payment Frequency", `${paymentFrequency}`],
        ["Estimated Payment", `${paymentAmount}`],
        ["Total Interest", `${totalInterest}`]
    ];
    doc.autoTable({
        head: [tableData[0]],
        body: tableData.slice(1),
        startY: 90
    });

    // Add explanation
    doc.text('The Vehicle Loan Calculator helps you estimate the monthly payments and total interest for a vehicle loan based on the given loan amount, interest rate, and loan tenure. This tool is useful for budgeting your vehicle purchase effectively.', 20, doc.autoTable.previous.finalY + 10);
    doc.text('How to Use:', 20, doc.autoTable.previous.finalY + 20);
    doc.text('1. Enter the loan amount in Rupees.', 20, doc.autoTable.previous.finalY + 30);
    doc.text('2. Enter the annual interest rate.', 20, doc.autoTable.previous.finalY + 40);
    doc.text('3. Enter the loan tenure in years.', 20, doc.autoTable.previous.finalY + 50);
    doc.text('4. Select the payment frequency.', 20, doc.autoTable.previous.finalY + 60);
    doc.text('5. Click "Calculate Loan" to see the estimated payment and total interest.', 20, doc.autoTable.previous.finalY + 70);

    // Add copyright notice
    doc.text('© 2024 Your Company Name. All rights reserved.', 105, doc.internal.pageSize.height - 20, { align: 'center' });

    doc.save('vehicle-loan-calculator.pdf');
}