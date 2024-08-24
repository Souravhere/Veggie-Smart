document.getElementById('compressionLevel').addEventListener('input', function() {
    document.getElementById('compressionValue').textContent = this.value + '%';
});

function compressFile() {
    const fileInput = document.getElementById('fileInput').files[0];
    const compressionLevel = document.getElementById('compressionLevel').value;

    if (!fileInput) {
        alert('Please select a file to compress.');
        return;
    }

    const fileType = fileInput.type;

    if (fileType === 'application/pdf') {
        compressPDF(fileInput, compressionLevel);
    } else if (fileType.startsWith('image/')) {
        compressImage(fileInput, compressionLevel);
    } else {
        alert('Unsupported file type. Please select a PDF or image file.');
    }
}

function compressPDF(file, compressionLevel) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const pdfData = event.target.result;

        // Simulate compression (in a real app, you would send this to a server for compression)
        const compressedPDF = pdfData.slice(0, pdfData.length * (compressionLevel / 100));

        const blob = new Blob([compressedPDF], { type: 'application/pdf' });
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = 'compressed.pdf';
        downloadLink.textContent = 'Download Compressed PDF';
        downloadLink.className = 'bg-green-500 hover:bg-green-600 text-white p-2 rounded';

        document.getElementById('result').innerHTML = '';
        document.getElementById('result').appendChild(downloadLink);
    };
    reader.readAsArrayBuffer(file);
}

function compressImage(file, compressionLevel) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.src = event.target.result;

        img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            const compressedImage = canvas.toDataURL('image/jpeg', compressionLevel / 100);

            const downloadLink = document.createElement('a');
            downloadLink.href = compressedImage;
            downloadLink.download = 'compressed.jpg';
            downloadLink.textContent = 'Download Compressed Image';
            downloadLink.className = 'bg-green-500 hover:bg-green-600 text-white p-2 rounded';

            document.getElementById('result').innerHTML = '';
            document.getElementById('result').appendChild(downloadLink);
        };
    };
    reader.readAsDataURL(file);
}
