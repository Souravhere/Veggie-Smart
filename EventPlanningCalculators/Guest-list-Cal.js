const guests = [];

function addGuest() {
    const guestName = document.getElementById('guestName').value.trim();
    const category = document.getElementById('category').value;
    const mealPreference = document.getElementById('mealPreference').value;
    const rsvp = document.getElementById('rsvp').value;

    if (!guestName) {
        alert('Please enter a guest name.');
        return;
    }

    guests.push({ guestName, category, mealPreference, rsvp });
    document.getElementById('guestName').value = '';
    document.getElementById('category').value = 'Family';
    document.getElementById('mealPreference').value = 'Vegetarian';
    document.getElementById('rsvp').value = 'Pending';

    renderTable();
}

function renderTable() {
    const guestTable = document.getElementById('guestTable');
    const rsvpFilter = document.getElementById('rsvpFilter').value;
    const searchGuest = document.getElementById('searchGuest').value.toLowerCase();

    guestTable.innerHTML = '';
    const filteredGuests = guests.filter(guest => {
        return (rsvpFilter === 'All' || guest.rsvp === rsvpFilter) && guest.guestName.toLowerCase().includes(searchGuest);
    });

    filteredGuests.forEach((guest, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-4 py-2 border-b border-gray-600">${guest.guestName}</td>
            <td class="px-4 py-2 border-b border-gray-600">${guest.category}</td>
            <td class="px-4 py-2 border-b border-gray-600">${guest.mealPreference}</td>
            <td class="px-4 py-2 border-b border-gray-600">${guest.rsvp}</td>
            <td class="px-4 py-2 border-b border-gray-600">
                <button onclick="editGuest(${index})" class="text-blue-500 hover:underline">Edit</button> |
                <button onclick="deleteGuest(${index})" class="text-red-500 hover:underline">Delete</button>
            </td>
        `;
        guestTable.appendChild(row);
    });

    renderSummary();
}

function editGuest(index) {
    const guest = guests[index];
    document.getElementById('guestName').value = guest.guestName;
    document.getElementById('category').value = guest.category;
    document.getElementById('mealPreference').value = guest.mealPreference;
    document.getElementById('rsvp').value = guest.rsvp;

    deleteGuest(index);
}

function deleteGuest(index) {
    guests.splice(index, 1);
    renderTable();
}

function renderSummary() {
    const guestSummary = document.getElementById('guestSummary');
    const totalGuests = guests.length;
    const familyCount = guests.filter(guest => guest.category === 'Family').length;
    const friendsCount = guests.filter(guest => guest.category === 'Friends').length;
    const colleaguesCount = guests.filter(guest => guest.category === 'Colleagues').length;

    guestSummary.innerHTML = `
        <p>Total Guests: ${totalGuests}</p>
        <p>Family: ${familyCount}</p>
        <p>Friends: ${friendsCount}</p>
        <p>Colleagues: ${colleaguesCount}</p>
    `;
}

function downloadPDF() {
    const docDefinition = {
        content: [
            { text: 'Guest List', style: 'header' },
            {
                table: {
                    headerRows: 1,
                    widths: ['*', '*', '*', '*'],
                    body: [
                        ['Guest Name', 'Category', 'Meal Preference', 'RSVP'],
                        ...guests.map(guest => [guest.guestName, guest.category, guest.mealPreference, guest.rsvp])
                    ]
                }
            },
            { text: '\n' },
            { text: 'Total Guests: ' + guests.length, margin: [0, 10, 0, 0] },
            { text: 'Family: ' + guests.filter(guest => guest.category === 'Family').length },
            { text: 'Friends: ' + guests.filter(guest => guest.category === 'Friends').length },
            { text: 'Colleagues: ' + guests.filter(guest => guest.category === 'Colleagues').length },
            { text: '\n' },
            { text: 'Copyright © Guest List Calculator By Veggi Smart', alignment: 'center' }
        ],
        styles: {
            header: {
                fontSize: 22,
                bold: true,
                alignment: 'center'
            }
        }
    };

    pdfMake.createPdf(docDefinition).download('Guest_List.pdf');
}