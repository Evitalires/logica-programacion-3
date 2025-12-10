function calcularFactorial(numero) {
    if (numero < 0) {
        return "Indefinido (número negativo)";
    }
    if (numero === 0) {
        return 1;
    }
    
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i; 
    }
    
    return factorial;
}
const inputFactorial = document.getElementById('Factorial');
const listadoFactorial = document.querySelector('.listadoFactorial');
inputFactorial.addEventListener('input', (event) => {
    const numero = parseInt(event.target.value);
    if (!isNaN(numero) && event.target.value !== "") {
        const resultado = calcularFactorial(numero);
        const nuevaEntrada = document.createElement('p');
        let textoFactorial = '';
        if (typeof resultado === 'number') {
            textoFactorial = `${numero}! = ${resultado}`;
        } else {
            textoFactorial = `${numero}! = ${resultado}`;
        }
        
        nuevaEntrada.textContent = textoFactorial;
        
        if (listadoFactorial.firstChild) {
            listadoFactorial.insertBefore(nuevaEntrada, listadoFactorial.firstChild);
        } else {
            listadoFactorial.appendChild(nuevaEntrada);
        }
    }
});

console.log("5! es:", calcularFactorial(5)); // Debería ser 120