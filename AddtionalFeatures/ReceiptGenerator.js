document.addEventListener('DOMContentLoaded', () => {
    const companyNameInput = document.getElementById('company-name');
    // const shopNameInput = document.getElementById('shop-name');
    const addressInput = document.getElementById('address');
    const emailInput = document.getElementById('email');
    const contactInfoInput = document.getElementById('contact-info');
    const ownerNameInput = document.getElementById('owner-name');
    const logoInput = document.getElementById('logo');
    const customerNameInput = document.getElementById('customer-name');
    const itemsContainer = document.getElementById('items');
    const addItemBtn = document.getElementById('add-item-btn');
    const receiptPreview = document.getElementById('receipt-preview');
    const generatePdfBtn = document.getElementById('generate-pdf-btn');

    const updateReceiptPreview = () => {
        const companyName = companyNameInput.value;
        const shopName = shopNameInput.value;
        const address = addressInput.value;
        const email = emailInput.value;
        const contactInfo = contactInfoInput.value;
        const ownerName = ownerNameInput.value;
        const customerName = customerNameInput.value;
        const currentDate = new Date().toLocaleString();
        const items = Array.from(document.querySelectorAll('.item')).map(item => {
            return {
                name: item.querySelector('.item-name').value,
                amount: parseFloat(item.querySelector('.item-amount').value),
                gst: parseFloat(item.querySelector('.item-gst').value)
            };
        });

        let total = 0;
        let previewHtml = `
            <div class="mb-4">
                <h2 class="text-2xl font-bold">${companyName}</h2>
                <p>${shopName}</p>
                <p>${address}</p>
                <p>${email}</p>
                <p>${contactInfo}</p>
            </div>
            <div class="mb-4">
                <p><strong>Customer Name:</strong> ${customerName}</p>
                <p><strong>Date:</strong> ${currentDate}</p>
            </div>
            <table class="w-full text-left mb-4">
                <thead>
                    <tr>
                        <th class="border p-2">Item</th>
                        <th class="border p-2">Amount</th>
                        <th class="border p-2">GST</th>
                        <th class="border p-2">Total</th>
                    </tr>
                </thead>
                <tbody>
        `;

        items.forEach(item => {
            const itemTotal = item.amount + (item.amount * (item.gst / 100));
            total += itemTotal;
            previewHtml += `
                <tr>
                    <td class="border p-2">${item.name}</td>
                    <td class="border p-2">${item.amount.toFixed(2)}</td>
                    <td class="border p-2">${item.gst.toFixed(2)}%</td>
                    <td class="border p-2">${itemTotal.toFixed(2)}</td>
                </tr>
            `;
        });

        previewHtml += `
                </tbody>
            </table>
            <div class="text-right">
                <p class="font-bold">Total: ${total.toFixed(2)}</p>
            </div>
            <div class="mt-4">
                <p><strong>Owner Name:</strong> ${ownerName}</p>
                <p><strong>Signature:</strong> _____________________</p>
            </div>
            <div class="mt-4">
                <p><strong>Customer Signature:</strong> _____________________</p>
            </div>
        `;

        receiptPreview.innerHTML = previewHtml;
    };

    addItemBtn.addEventListener('click', () => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item', 'mb-4');
        itemDiv.innerHTML = `
            <div class="flex mb-2">
                <input type="text" class="item-name w-1/3 p-2 bg-gray-700 border border-gray-600 rounded mr-2" placeholder="Item name">
                <input type="number" class="item-amount w-1/3 p-2 bg-gray-700 border border-gray-600 rounded mr-2" placeholder="Amount">
                <input type="number" class="item-gst w-1/3 p-2 bg-gray-700 border border-gray-600 rounded" placeholder="GST %">
            </div>
        `;
        itemsContainer.appendChild(itemDiv);
    });

    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', updateReceiptPreview);
    });

    updateReceiptPreview();

    generatePdfBtn.addEventListener('click', () => {
        const logoFile = logoInput.files[0];
        const companyName = companyNameInput.value;
        const shopName = shopNameInput.value;
        const address = addressInput.value;
        const email = emailInput.value;
        const contactInfo = contactInfoInput.value;
        const ownerName = ownerNameInput.value;
        const customerName = customerNameInput.value;
        const currentDate = new Date().toLocaleString();
        const items = Array.from(document.querySelectorAll('.item')).map(item => {
            return {
                name: item.querySelector('.item-name').value,
                amount: parseFloat(item.querySelector('.item-amount').value),
                gst: parseFloat(item.querySelector('.item-gst').value)
            };
        });

        let total = 0;
        const itemsTableBody = items.map(item => {
            const itemTotal = item.amount + (item.amount * (item.gst / 100));
            total += itemTotal;
            return [
                { text: item.name, style: 'tableCell' },
                { text: item.amount.toFixed(2), style: 'tableCell' },
                { text: `${item.gst.toFixed(2)}%`, style: 'tableCell' },
                { text: itemTotal.toFixed(2), style: 'tableCell' }
            ];
        });

        const docDefinition = {
            content: [
                { text: companyName, style: 'header' },
                { text: shopName, style: 'subheader' },
                { text: address, style: 'subheader' },
                { text: email, style: 'subheader' },
                { text: contactInfo, style: 'subheader' },
                { text: `Customer Name: ${customerName}`, style: 'subheader' },
                { text: `Date: ${currentDate}`, style: 'subheader' },
                {
                    style: 'table',
                    table: {
                        widths: ['*', '*', '*', '*'],
                        body: [
                            [
                                { text: 'Item', style: 'tableHeader' },
                                { text: 'Amount', style: 'tableHeader' },
                                { text: 'GST', style: 'tableHeader' },
                                { text: 'Total', style: 'tableHeader' }
                            ],
                            ...itemsTableBody
                        ]
                    },
                    layout: 'lightHorizontalLines'
                },
                { text: `Total: ${total.toFixed(2)}`, style: 'total' },
                { text: `Owner Name: ${ownerName}`, style: 'signature' },
                { text: 'Signature: _____________________', style: 'signature' },
                { text: 'Customer Signature: _____________________', style: 'signature' }
            ],
            styles: {
                header: { fontSize: 18, bold: true, marginBottom: 8 },
                subheader: { fontSize: 14, marginBottom: 4 },
                table: { marginBottom: 8 },
                tableHeader: { bold: true, fontSize: 12, color: 'black' },
                tableCell: { fontSize: 12 },
                total: { fontSize: 14, bold: true, alignment: 'right', marginTop: 8 },
                signature: { marginTop: 16, fontSize: 12 }
            }
        };

        if (logoFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                docDefinition.content.unshift({
                    image: e.target.result,
                    width: 150
                });
                pdfMake.createPdf(docDefinition).download('receipt.pdf');
            };
            reader.readAsDataURL(logoFile);
        } else {
            pdfMake.createPdf(docDefinition).download('receipt.pdf');
        }
    });
});
