const qrTypeSelect = document.getElementById('qr-type');
const qrInputFields = document.getElementById('qr-input-fields');
const generateQrBtn = document.getElementById('generate-qr-btn');
const qrResult = document.getElementById('qr-result');
const qrCodeDiv = document.getElementById('qr-code');
const downloadJpgBtn = document.getElementById('download-jpg-btn');
const downloadPdfBtn = document.getElementById('download-pdf-btn');

const updateInputFields = () => {
    qrInputFields.innerHTML = '';
    let inputFieldsHtml = '';
    switch (qrTypeSelect.value) {
        case 'text':
            inputFieldsHtml = '<input id="qr-text" type="text" class="w-full p-2 bg-gray-700 border border-gray-600 rounded" placeholder="Enter text">';
            break;
        case 'email':
            inputFieldsHtml = `
                <input id="qr-email" type="email" class="w-full p-2 bg-gray-700 border border-gray-600 rounded mb-2" placeholder="Enter email">
                <input id="qr-subject" type="text" class="w-full p-2 bg-gray-700 border border-gray-600 rounded mb-2" placeholder="Enter subject">
                <textarea id="qr-body" class="w-full p-2 bg-gray-700 border border-gray-600 rounded" placeholder="Enter body"></textarea>
            `;
            break;
        case 'phone':
            inputFieldsHtml = '<input id="qr-phone" type="tel" class="w-full p-2 bg-gray-700 border border-gray-600 rounded" placeholder="Enter phone number">';
            break;
        case 'whatsapp':
            inputFieldsHtml = '<input id="qr-whatsapp" type="tel" class="w-full p-2 bg-gray-700 border border-gray-600 rounded mb-2" placeholder="Enter phone number"><textarea id="qr-whatsapp-msg" class="w-full p-2 bg-gray-700 border border-gray-600 rounded" placeholder="Enter message"></textarea>';
            break;
        case 'link':
            inputFieldsHtml = '<input id="qr-link" type="url" class="w-full p-2 bg-gray-700 border border-gray-600 rounded" placeholder="Enter link">';
            break;
    }
    qrInputFields.innerHTML = inputFieldsHtml;
};

const generateQRCode = () => {
    const header = document.getElementById('header').value;
    const footer = document.getElementById('footer').value;
    const logo = document.getElementById('logo').files[0];

    let qrData = '';
    switch (qrTypeSelect.value) {
        case 'text':
            qrData = document.getElementById('qr-text').value;
            break;
        case 'email':
            const email = document.getElementById('qr-email').value;
            const subject = document.getElementById('qr-subject').value;
            const body = document.getElementById('qr-body').value;
            qrData = `mailto:${email}?subject=${subject}&body=${body}`;
            break;
        case 'phone':
            qrData = `tel:${document.getElementById('qr-phone').value}`;
            break;
        case 'whatsapp':
            const whatsappNumber = document.getElementById('qr-whatsapp').value;
            const whatsappMessage = document.getElementById('qr-whatsapp-msg').value;
            qrData = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
            break;
        case 'link':
            qrData = document.getElementById('qr-link').value;
            break;
    }

    qrCodeDiv.innerHTML = '';

    QRCode.toDataURL(qrData, { errorCorrectionLevel: 'H' }, (err, url) => {
        if (err) throw err;

        const img = new Image();
        img.src = url;

        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = img.width;
            canvas.height = img.height + (header ? 30 : 0) + (footer ? 30 : 0);

            if (header) {
                ctx.font = '20px Arial';
                ctx.fillText(header, canvas.width / 2 - ctx.measureText(header).width / 2, 25);
            }

            ctx.drawImage(img, 0, header ? 30 : 0);

            if (footer) {
                ctx.font = '20px Arial';
                ctx.fillText(footer, canvas.width / 2 - ctx.measureText(footer).width / 2, canvas.height - 5);
            }

            if (logo) {
                const logoImg = new Image();
                const reader = new FileReader();
                reader.onload = () => {
                    logoImg.src = reader.result;
                    logoImg.onload = () => {
                        const logoSize = Math.min(canvas.width * 0.2, canvas.height * 0.2);
                        ctx.drawImage(logoImg, (canvas.width - logoSize) / 2, (canvas.height - logoSize) / 2, logoSize, logoSize);
                        qrCodeDiv.innerHTML = '';
                        qrCodeDiv.appendChild(canvas);
                        qrResult.classList.remove('hidden');
                    };
                };
                reader.readAsDataURL(logo);
            } else {
                qrCodeDiv.appendChild(canvas);
                qrResult.classList.remove('hidden');
            }
        };
    });
};

const downloadQRCode = (format) => {
    const canvas = qrCodeDiv.querySelector('canvas');
    if (!canvas) return;

    if (format === 'jpg') {
        const link = document.createElement('a');
        link.download = 'qr-code.jpg';
        link.href = canvas.toDataURL('image/jpeg');
        link.click();
    } 
};

qrTypeSelect.addEventListener('change', updateInputFields);
generateQrBtn.addEventListener('click', generateQRCode);
downloadJpgBtn.addEventListener('click', () => downloadQRCode('jpg'));

updateInputFields();
