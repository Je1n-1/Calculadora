function inserttoDisplay(data, display) {
  if (data === 'C') {
    display.textContent = '';
  } else {
    display.textContent += data;
  }
}

export function setupOperationButtons(display, inserttoDisplay) {
  const operationButtons = document.querySelectorAll('button[data-value]');
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.getAttribute('data-value');
      inserttoDisplay(value, display);
    });
  });
}

export { inserttoDisplay };