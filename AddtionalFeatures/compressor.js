const compress = new Compress();

document.getElementById('compressionLevel').addEventListener('input', function() {
    document.getElementById('compressionValue').textContent = this.value + '%';
});

function compressFile() {
    const fileInput = document.getElementById('fileInput').files[0];
    const compressionLevel = document.getElementById('compressionLevel').value;
    const desiredFileSize = document.getElementById('fileSize').value;

    if (!fileInput) {
        alert('Please select a file to compress.');
        return;
    }

    if (fileInput.type.startsWith('image/')) {
        compressImage(fileInput, compressionLevel, desiredFileSize);
    } else {
        alert('Unsupported file type. Please select an image file.');
    }
}

function compressImage(file, compressionLevel, desiredFileSize) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.src = event.target.result;

        img.onload = function() {
            const options = {
                size: 4, // the max size in MB
                quality: compressionLevel / 100, // the quality of the image
                maxWidth: 1920, // max width of the output image
                maxHeight: 1920, // max height of the output image
                resize: true, // use resize for better results
                customOutput: desiredFileSize ? parseInt(desiredFileSize) * 1024 : null, // custom output size in bytes
            };

            compress.compress([file], options).then((results) => {
                const output = results[0];
                const { data, ext, size, alt } = output;

                const originalSize = (file.size / 1024).toFixed(2) + ' KB';
                const compressedSize = (size / 1024).toFixed(2) + ' KB';

                document.getElementById('originalImage').src = event.target.result;
                document.getElementById('originalSize').textContent = 'Original Size: ' + originalSize;

                const compressedImage = `data:image/${ext};base64,${data}`;
                document.getElementById('compressedImage').src = compressedImage;
                document.getElementById('compressedSize').textContent = 'Compressed Size: ' + compressedSize;

                const downloadLink = document.createElement('a');
                downloadLink.href = compressedImage;
                downloadLink.download = 'compressed.' + ext;
                downloadLink.textContent = 'Download Compressed Image';
                downloadLink.className = 'bg-green-500 hover:bg-green-600 text-white p-2 rounded mt-4 block';

                document.getElementById('result').innerHTML = '';
                document.getElementById('result').appendChild(downloadLink);
            });
        };
    };
    reader.readAsDataURL(file);
}
