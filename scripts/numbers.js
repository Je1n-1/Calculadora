function setupNumberButtons() {
  const numberButtons = document.querySelectorAll('button[data-value]');
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      console.log(button);
    });
  });
}

 function setupOperationButtons(display, inserttoDisplay) {
  const operationButtons = document.querySelectorAll('button[data-value]');
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.getAttribute('data-value');
      inserttoDisplay(value, display);
    });
  });
}
export { setupNumberButtons };
export { setupOperationButtons };