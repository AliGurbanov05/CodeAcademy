const dragElmements = document.querySelectorAll(".dragElement");
const dropElm = document.querySelector(".dropElement");

dragElmements.forEach(dragElm => {
    dragElm.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("id", this.id);
    });
});

dropElm.ondragover = function (e) {
    e.preventDefault();
}

dropElm.ondrop = function (e) {
    let myID = e.dataTransfer.getData('id');
    dropElm.appendChild(document.getElementById(myID));
}
