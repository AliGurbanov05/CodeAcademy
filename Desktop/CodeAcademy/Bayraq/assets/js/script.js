const uploadAreas = document.querySelectorAll(".cn");

document.querySelectorAll(".dragElement").forEach((dragElm) => {
    dragElm.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("alt", this.alt);
    });
});

uploadAreas.forEach((uploadArea) => {
    uploadArea.ondragover = (e) => {
        e.preventDefault();
    };

    uploadArea.ondrop = function (e) {
        e.preventDefault();

        const draggedElementAlt = e.dataTransfer.getData("alt");

        if (uploadArea.getAttribute("name") === draggedElementAlt) {
            const draggedElement = document.querySelector(`img[alt='${draggedElementAlt}']`);
            uploadArea.appendChild(draggedElement);
        } else {
            alert('Xeta: Fayl adi bu div ilə uygun deyil!');
        }
    };
});
