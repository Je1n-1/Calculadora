// Função para configurar os botões numéricos
function setupNumberButtons() {
  
  // Seleciona todos os botões que possuem o atributo data-value
  const numberButtons = document.querySelectorAll('button[data-value]');
  // Adiciona um event listener de clique para cada botão
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      
      // Exibe o botão clicado no console
      console.log(button);
      
    });
  });
}

// Função para configurar os botões de operação
function setupOperationButtons(display, inserttoDisplay) {
  // Seleciona todos os botões que possuem o atributo data-value
  const operationButtons = document.querySelectorAll('button[data-value]');
  // Adiciona um event listener de clique para cada botão
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Obtém o valor do atributo data-value do botão clicado
      const value = button.getAttribute('data-value');
      // Insere o valor no display usando a função fornecida
      inserttoDisplay(value, display);
    });
  });
}

// Exporta as funções para uso em outros arquivos
export { setupNumberButtons };
export { setupOperationButtons };