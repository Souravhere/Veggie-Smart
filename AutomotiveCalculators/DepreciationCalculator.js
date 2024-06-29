function calculateDepreciation() {
    const vehicleCost = parseFloat(document.getElementById('vehicleCost').value);
    const residualValue = parseFloat(document.getElementById('residualValue').value);
    const usefulLife = parseInt(document.getElementById('usefulLife').value);
    const depreciationMethod = document.getElementById('depreciationMethod').value;

    if (isNaN(vehicleCost) || isNaN(residualValue) || isNaN(usefulLife)) {
        alert("Please enter valid details for all fields.");
        return;
    }

    let depreciationAmount = 0;

    if (depreciationMethod === 'straight-line') {
        depreciationAmount = (vehicleCost - residualValue) / usefulLife;
    } else if (depreciationMethod === 'double-declining') {
        depreciationAmount = (2 / usefulLife) * (vehicleCost - residualValue);
    }

    displayDepreciation(depreciationAmount);
}

function displayDepreciation(amount) {
    const depreciationResults = document.getElementById('depreciationResults');
    depreciationResults.classList.remove('hidden');

    const depreciationAmount = document.getElementById('depreciationAmount');
    depreciationAmount.innerText = `Estimated Depreciation Amount: Rupees ${amount.toFixed(2)}`;
}