// const inpt = document.getElementById('todo-input');
// const buton = document.getElementById('add-btn');
// const paragraph = document.querySelector('.todo-list');
// buton.onclick = function () {
//     let message = inpt.value.trim();
//     paragraph.innerText = message;
// }

const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.querySelector(".todo-list");

addBtn.onclick = () => {
    const value = input.value.trim();
    if (value) {
        const li = document.createElement("li");
        li.textContent = value;

        li.onclick = () => li.classList.toggle("done");
        list.appendChild(li);
        input.value = "";
    }
};