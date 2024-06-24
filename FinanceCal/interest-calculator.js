document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');
    const totalInterestEl = document.getElementById('totalInterest');
    const totalAmountEl = document.getElementById('totalAmount');

    calculateBtn.addEventListener('click', function() {
        const principal = parseFloat(document.getElementById('principal').value);
        const annualInterestRate = parseFloat(document.getElementById('annualInterestRate').value);
        const timePeriod = parseInt(document.getElementById('timePeriod').value);
        const compoundFrequency = document.getElementById('compoundFrequency').value;

        if (isNaN(principal) || principal <= 0) {
            alert('Please enter a valid principal amount.');
            return;
        }

        if (isNaN(annualInterestRate) || annualInterestRate < 0) {
            alert('Please enter a valid annual interest rate.');
            return;
        }

        if (isNaN(timePeriod) || timePeriod <= 0) {
            alert('Please enter a valid time period.');
            return;
        }

        const n = compoundFrequency === 'monthly' ? 12 : 1;
        const totalAmount = principal * Math.pow((1 + annualInterestRate / (n * 100)), n * timePeriod);
        const totalInterest = totalAmount - principal;

        totalInterestEl.innerHTML = `<strong>Total Interest:</strong> ₹${totalInterest.toFixed(2)}`;
        totalAmountEl.innerHTML = `<strong>Total Amount (Principal + Interest):</strong> ₹${totalAmount.toFixed(2)}`;

        resultDiv.classList.remove('hidden');
    });
});
