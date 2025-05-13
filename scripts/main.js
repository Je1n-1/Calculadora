import { inserttoDisplay } from "./numbers.js";

export const numberButtons = document.querySelectorAll('button[data-value]');
const display = document.getElementById('display');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        // console.log(button.getAttribute('data-value'));
        const value = button.getAttribute('data-value');
        inserttoDisplay(value, display);
    });
});
