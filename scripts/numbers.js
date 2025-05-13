function inserttoDisplay(data, display) {
    if (data === 'C') {
        display.textContent = '';
    } else {
        display.textContent += data;
    }
}

export { inserttoDisplay };
