const numberButtons = document.querySelectorAll('.numbers');
const input = document.getElementById('display');


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        input.value += button.textContent;
        console.log(input.value);
    });
});