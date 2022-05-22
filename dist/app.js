"use strict";
const progress = document.querySelectorAll(".progress");
async function getData() {
    const response = await fetch("./data.json");
    const data = await response.json();
    data.forEach((element) => {
        let procent = element.amount;
        let dayWeek = element.day;
        progress.forEach((el) => {
            if (el.id === dayWeek) {
                el.style.height = `${procent}%`;
                el.dataset.amount = `${procent}%`;
            }
        });
    });
}
function renderModal() {
    progress.forEach((el) => {
        el.addEventListener("click", createModal);
    });
}
function clearModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}
function createModal(e) {
    clearModal();
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.style.bottom = `${e.target.dataset.amount}`;
    modal.style.transform = `translateY(-10px)`;
    modal.innerHTML = `$${(e.target.dataset.amount).slice(0, -1)}`;
    let element = e.target.parentElement;
    element.appendChild(modal);
}
getData();
renderModal();
