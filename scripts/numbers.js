function setupNumberButtons(display) {
  const numberButtons = document.querySelectorAll('button[data-value]');
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.getAttribute('data-value');
      console.log(button);
    });
  });
}

export { setupNumberButtons };
