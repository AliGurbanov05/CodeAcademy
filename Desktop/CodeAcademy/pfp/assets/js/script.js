const dropArea = document.getElementById('dropArea');
let imageFile;

dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropArea.classList.add('hover');
});

dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('hover');
});

dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dropArea.classList.remove('hover');
    imageFile = e.dataTransfer.files[0];
    previewImage(imageFile);
});

dropArea.addEventListener('click', () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = (e) => {
        imageFile = e.target.files[0];
        previewImage(imageFile);
    };
    fileInput.click();
});

function previewImage(file) {
    const reader = new FileReader();
    reader.onload = () => {
        dropArea.innerHTML = `<img src="${reader.result}" alt="Profil şəkli">`;
        dropArea.dataset.image = reader.result;
    };
    reader.readAsDataURL(file);
}

document.getElementById('doneBtn').addEventListener('click', () => {
    const name = document.getElementById('firstName').value.trim();
    const surname = document.getElementById('lastName').value.trim();
    const imageSrc = dropArea.dataset.image;

    if (!name || !surname || !imageSrc) {
        alert("Zəhmət olmasa bütün sahələri doldurun.");
        return;
    }

    document.getElementById('profileEditor').style.display = 'none';
    document.getElementById('profileResult').style.display = 'block';
    document.getElementById('finalImage').src = imageSrc;
    document.getElementById('finalName').innerText = `${name} ${surname}`;
});