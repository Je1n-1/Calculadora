// Esta función inserta datos en el display de la calculadora.
// Si el dato es 'C', limpia el display. De lo contrario, agrega el dato al contenido actual.
function inserttoDisplay(data, display) {
  if (data === 'C') {
    display.textContent = '';
  } else {
    display.textContent += data;
  }
}

export { inserttoDisplay };
