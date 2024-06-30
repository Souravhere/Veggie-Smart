function calculateVenueSize() {
    const eventType = document.getElementById('eventType').value;
    const attendees = parseInt(document.getElementById('attendees').value);

    // Advanced logic for venue size estimation based on Indian cultural events
    let venueSize;
    if (eventType === 'wedding') {
        venueSize = Math.ceil(attendees / 1.5); // More space needed for weddings
    } else if (eventType === 'party') {
        venueSize = Math.ceil(attendees / 1.2); // Moderate space for parties
    } else if (eventType === 'conference') {
        venueSize = Math.ceil(attendees / 2); // Efficient use of space for conferences
    } else if (eventType === 'cultural') {
        venueSize = Math.ceil(attendees / 1.8); // Consideration for dance and cultural activities
    } else if (eventType === 'religious') {
        venueSize = Math.ceil(attendees / 1.5); // Space for rituals and congregations
    }

    // Display result
    const resultText = `For ${attendees} attendees at a ${eventType}, recommend a venue size of ${venueSize} square meters.`;
    document.getElementById('resultText').textContent = resultText;

    // Show result section
    document.getElementById('resultSection').classList.remove('hidden');
}