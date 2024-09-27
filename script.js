document.getElementById('generateButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;

    fetch('/generate-image', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: inputText })
    })
    .then(response => response.blob())
    .then(imageBlob => {
        const imageObjectURL = URL.createObjectURL(imageBlob);
        const img = document.createElement('img');
        img.src = imageObjectURL;
        const imageContainer = document.getElementById('imageContainer');
        imageContainer.innerHTML = ''; // Șterge imaginea anterioară
        imageContainer.appendChild(img);
    })
    .catch(error => console.error('Error:', error));
});
