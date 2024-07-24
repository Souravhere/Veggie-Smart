document.addEventListener('DOMContentLoaded', () => {
    const companyNameInput = document.getElementById('company-name');
    const shopNameInput = document.getElementById('shop-name');
    const contactInfoInput = document.getElementById('contact-info');
    const logoInput = document.getElementById('logo');
    const itemsContainer = document.getElementById('items');
    const addItemBtn = document.getElementById('add-item-btn');
    const receiptPreview = document.getElementById('receipt-preview');
    const generatePdfBtn = document.getElementById('generate-pdf-btn');

    const updateReceiptPreview = () => {
        const companyName = companyNameInput.value;
        const shopName = shopNameInput.value;
        const contactInfo = contactInfoInput.value;
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
                <h2 class="text-xl font-bold">${companyName}</h2>
                <p>${shopName}</p>
                <p>${contactInfo}</p>
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
        updateReceiptPreview();
    });

    document.addEventListener('input', updateReceiptPreview);

    generatePdfBtn.addEventListener('click', () => {
        const companyName = companyNameInput.value;
        const shopName = shopNameInput.value;
        const contactInfo = contactInfoInput.value;
        const items = Array.from(document.querySelectorAll('.item')).map(item => {
            return {
                name: item.querySelector('.item-name').value,
                amount: parseFloat(item.querySelector('.item-amount').value),
                gst: parseFloat(item.querySelector('.item-gst').value)
            };
        });

        const docDefinition = {
            content: [
                { text: companyName, style: 'header' },
                shopName,
                contactInfo,
                '\n',
                {
                    table: {
                        headerRows: 1,
                        widths: ['*', 'auto', 'auto', 'auto'],
                        body: [
                            ['Item', 'Amount', 'GST', 'Total'],
                            ...items.map(item => {
                                const itemTotal = item.amount + (item.amount * (item.gst / 100));
                                return [
                                    item.name,
                                    item.amount.toFixed(2),
                                    `${item.gst.toFixed(2)}%`,
                                    itemTotal.toFixed(2)
                                ];
                            }),
                            [{ text: 'Total', colSpan: 3 }, {}, {}, items.reduce((sum, item) => sum + item.amount + (item.amount * (item.gst / 100)), 0).toFixed(2)]
                        ]
                    }
                }
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 0, 0, 10]
                }
            }
        };

        const logoFile = logoInput.files[0];
        if (logoFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
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
