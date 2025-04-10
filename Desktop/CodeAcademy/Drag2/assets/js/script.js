const showArea = document.querySelector(".showDiv");
const uploadArea = document.querySelector(".uploadDiv");

uploadArea.ondragover = (e) => {
    e.preventDefault();
};
 
uploadArea.ondrop = function (e) {
    e.preventDefault();

    showArea.querySelector("img") && 0 || (() => {
        const file = e.dataTransfer.files[0];
        const reader = new FileReader();

        reader.onload = function (element) {
            let image = `<img src='${element.target.result}'>`;
            showArea.innerHTML = image;
            showArea.style.display = "flex";
        };

        reader.readAsDataURL(file);
    })();
};
