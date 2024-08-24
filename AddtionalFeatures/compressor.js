async function compressFile() {
    const fileInput = document.getElementById('fileInput').files[0];
    const customSize = document.getElementById('customSize').value;

    if (!fileInput) {
        alert('Please select a file to compress.');
        return;
    }

    const fileType = fileInput.type;

    if (fileType === 'application/pdf') {
        await compressPDF(fileInput, customSize);
    } else if (fileType.startsWith('image/')) {
        await compressImage(fileInput, customSize);
    } else {
        alert('Unsupported file type. Please select a PDF or image file.');
    }
}

async function compressPDF(file, customSize) {
    const apiKey = 'YOUR_PDFCO_API_KEY';  // Replace with your PDF.co API key
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', file.name);
    formData.append('customSize', customSize);

    try {
        const response = await fetch('https://api.pdf.co/v1/pdf/optimize', {
            method: 'POST',
            headers: {
                'x-api-key': apiKey
            },
            body: formData
        });

        const result = await response.json();
        if (result.error) {
            alert('Compression failed: ' + result.message);
            return;
        }

        displayResult(result.url, 'compressed.pdf');
    } catch (error) {
        alert('An error occurred: ' + error.message);
    }
}

async function compressImage(file, customSize) {
    const apiKey = 'YOUR_CLOUDINARY_API_KEY';  // Replace with your Cloudinary API key
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'YOUR_UPLOAD_PRESET');  // Replace with your Cloudinary upload preset
    formData.append('folder', 'compressed_images');
    formData.append('quality', 'auto');
    formData.append('customSize', customSize);

    const beforeImageUrl = URL.createObjectURL(file);
    document.getElementById('beforeImage').src = beforeImageUrl;

    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload`, {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        if (result.error) {
            alert('Compression failed: ' + result.error.message);
            return;
        }

        document.getElementById('afterImage').src = result.secure_url;
        document.getElementById('preview').classList.remove('hidden');

        displayResult(result.secure_url, 'compressed.jpg');
    } catch (error) {
        alert('An error occurred: ' + error.message);
    }
}

function displayResult(downloadUrl, fileName) {
    const downloadLink = document.createElement('a');
    downloadLink.href = downloadUrl;
    downloadLink.download = fileName;
    downloadLink.textContent = `Download Compressed ${fileName}`;
    downloadLink.className = 'bg-green-500 hover:bg-green-600 text-white p-2 rounded';

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    resultDiv.appendChild(downloadLink);
}
