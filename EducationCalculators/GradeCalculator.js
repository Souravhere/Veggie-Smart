document.getElementById('addAssignment').addEventListener('click', () => {
    const assignmentCount = document.getElementById('assignments').childElementCount + 1;
    const assignmentHTML = `
        <div class="mb-4">
            <label class="block text-sm font-bold mb-2">Assignment ${assignmentCount}</label>
            <input type="number" step="0.01" placeholder="Score" class="form-input mt-1 block w-full  p-2 rounded-lg text-black font-semibold" required>
            <input type="number" step="0.01" placeholder="Weight (%)" class="form-input mt-1 block w-full  p-2 rounded-lg text-black font-semibold mt-2" required>
        </div>`;
    document.getElementById('assignments').insertAdjacentHTML('beforeend', assignmentHTML);
});

document.getElementById('gradeForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll('#assignments input');
    let totalScore = 0;
    let totalWeight = 0;
    for (let i = 0; i < inputs.length; i += 2) {
        const score = parseFloat(inputs[i].value);
        const weight = parseFloat(inputs[i + 1].value);
        totalScore += score * (weight / 100);
        totalWeight += weight;
    }
    const finalGrade = totalScore / (totalWeight / 100);
    document.getElementById('finalGrade').innerHTML = `<p class="bg-green-400 rounded-lg py-3 font-bold">Final Grade: ${finalGrade.toFixed(2)}</p>`;
    document.getElementById('result').classList.remove('hidden');
});