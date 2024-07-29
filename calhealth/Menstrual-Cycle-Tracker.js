function calculateMenstrualCycle() {
    const startDate = new Date(document.getElementById('cycleStartDate').value);
    const cycleLength = parseInt(document.getElementById('cycleLength').value, 10);
    const periodLength = parseInt(document.getElementById('periodLength').value, 10);
    const symptoms = document.getElementById('symptoms').value;
    const moodChanges = document.getElementById('moodChanges').value;
    const flowIntensity = document.getElementById('flowIntensity').value;
    const notes = document.getElementById('notes').value;

    if (isNaN(cycleLength) || isNaN(periodLength)) {
        document.getElementById('result').innerHTML = '<p class="error">Please enter valid cycle and period lengths.</p>';
        return;
    }

    const nextPeriodStart = new Date(startDate);
    nextPeriodStart.setDate(startDate.getDate() + cycleLength);

    const nextPeriodEnd = new Date(nextPeriodStart);
    nextPeriodEnd.setDate(nextPeriodStart.getDate() + periodLength - 1);

    const ovulationDate = new Date(nextPeriodStart);
    ovulationDate.setDate(nextPeriodStart.getDate() - 14);

    const fertileWindowStart = new Date(ovulationDate);
    fertileWindowStart.setDate(ovulationDate.getDate() - 5);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3 class="text-2xl font-bold mb-4">Cycle Prediction Results</h3>
        <div class="mb-4">
            <p><strong>Next Period Start Date:</strong> ${nextPeriodStart.toDateString()}</p>
            <p><strong>Next Period End Date:</strong> ${nextPeriodEnd.toDateString()}</p>
            <p><strong>Ovulation Date:</strong> ${ovulationDate.toDateString()}</p>
            <p><strong>Fertile Window:</strong> ${fertileWindowStart.toDateString()} to ${ovulationDate.toDateString()}</p>
        </div>
        <div>
            <h4 class="text-xl font-bold mb-2">Logged Symptoms and Notes:</h4>
            <p><strong>Symptoms:</strong> ${symptoms || 'None'}</p>
            <p><strong>Mood Changes:</strong> ${moodChanges || 'None'}</p>
            <p><strong>Flow Intensity:</strong> ${flowIntensity || 'None'}</p>
            <p><strong>Notes:</strong> ${notes || 'None'}</p>
        </div>
    `;
}