document.addEventListener('DOMContentLoaded', function () {
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');
    const totalAreaEl = document.getElementById('totalArea');
    const materialCostResultEl = document.getElementById('materialCostResult');
    const laborCostResultEl = document.getElementById('laborCostResult');
    const additionalCostsResultEl = document.getElementById('additionalCostsResult');
    const contingencyCostEl = document.getElementById('contingencyCost');
    const totalEstimatedCostEl = document.getElementById('totalEstimatedCost');

    calculateBtn.addEventListener('click', function () {
        const units = document.getElementById('units').value;
        const length = parseFloat(document.getElementById('length').value);
        const width = parseFloat(document.getElementById('width').value);
        const height = parseFloat(document.getElementById('height').value);
        const renovationType = document.getElementById('renovationType').value;
        const materialCost = parseFloat(document.getElementById('materialCost').value);
        const laborCost = parseFloat(document.getElementById('laborCost').value);
        const estimatedHours = parseFloat(document.getElementById('estimatedHours').value);
        const additionalCosts = parseFloat(document.getElementById('additionalCosts').value);
        const contingencyPercentage = parseFloat(document.getElementById('contingencyPercentage').value);

        const totalArea = length * width;
        const totalMaterialCost = totalArea * materialCost;
        const totalLaborCost = laborCost * estimatedHours;
        const contingencyCost = (totalMaterialCost + totalLaborCost + additionalCosts) * (contingencyPercentage / 100);
        const totalEstimatedCost = totalMaterialCost + totalLaborCost + additionalCosts + contingencyCost;

        resultDiv.classList.remove('hidden');
        totalAreaEl.textContent = `Total Area: ${totalArea.toFixed(2)} ${units === 'meters' ? 'm²' : 'ft²'}`;
        materialCostResultEl.textContent = `Material Cost: ₹${totalMaterialCost.toFixed(2)}`;
        laborCostResultEl.textContent = `Labor Cost: ₹${totalLaborCost.toFixed(2)}`;
        additionalCostsResultEl.textContent = `Additional Costs: ₹${additionalCosts.toFixed(2)}`;
        contingencyCostEl.textContent = `Contingency Cost: ₹${contingencyCost.toFixed(2)}`;
        totalEstimatedCostEl.textContent = `Total Estimated Cost: ₹${totalEstimatedCost.toFixed(2)}`;
    });
});