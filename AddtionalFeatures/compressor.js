function updateCompressionValue() {
    const compressionLevel = document.getElementById('compressionLevel').value;
    document.getElementById('compressionValue').textContent = `${compressionLevel}%`;
}

async function compressFile() {
    const fileInput = document.getElementById('fileInput').files[0];
    const compressionLevel = document.getElementById('compressionLevel').value;

    if (!fileInput) {
        alert('Please select a file to compress.');
        return;
    }

    if (fileInput.type.startsWith('image/')) {
        await compressImage(fileInput, compressionLevel);
    } else {
        alert('Unsupported file type. Please select an image file.');
    }
}

async function compressImage(file, compressionLevel) {
    const options = {
        maxSizeMB: compressionLevel / 100, // Maximum file size in MB
        maxWidthOrHeight: 1920, // Maximum width or height
        useWebWorker: true, // Use a web worker to prevent blocking the main thread
        maxIteration: 10,
        initialQuality: compressionLevel / 100,
        alwaysKeepResolution: true,
    };

    try {
        const compressedFile = await imageCompression(file, options);
        const originalSize = (file.size / 1024).toFixed(2) + ' KB';
        const compressedSize = (compressedFile.size / 1024).toFixed(2) + ' KB';

        const reader = new FileReader();
        reader.readAsDataURL(compressedFile);
        reader.onloadend = function () {
            document.getElementById('originalImage').src = URL.createObjectURL(file);
            document.getElementById('originalImage').style.display = 'block';
            document.getElementById('originalSize').textContent = 'Original Size: ' + originalSize;

            document.getElementById('compressedImage').src = reader.result;
            document.getElementById('compressedImage').style.display = 'block';
            document.getElementById('compressedSize').textContent = 'Compressed Size: ' + compressedSize;

            const downloadLink = document.createElement('a');
            downloadLink.href = reader.result;
            downloadLink.download = 'compressed_image.jpg'; // Ensure the extension matches the format
            downloadLink.textContent = 'Download Compressed Image';
            downloadLink.className = 'bg-green-500 hover:bg-green-600 text-white p-2 rounded mt-4 block';

            document.getElementById('result').innerHTML = '';
            document.getElementById('result').appendChild(downloadLink);
        };

        // Update progress bar
        const progressBar = document.getElementById('progressBar');
        const progress = (file.size - compressedFile.size) / file.size * 100;
        progressBar.style.width = `${progress}%`;
        progressBar.classList.add('bg-green-500');
    } catch (error) {
        console.error(error);
        alert('Compression failed. Please try again.');
    }
}