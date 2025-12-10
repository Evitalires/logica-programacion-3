function calcularFactorial(numero) {
    if (numero < 0) {
        return "Indefinido (número negativo)";
    }
    if (numero === 0) {
        return 1;
    }
    
    let factorial = {resultado: 1, process: ""};
    for (let i = 1; i <= numero; i++) {
        if(i == numero) {
            factorial.process += `${i}`
        } else {
            factorial.process += `${i} * `
        }
        factorial.resultado *= i; 
    }
    factorial.resultado = factorial.resultado.toLocaleString('es-ES');
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
        console.log(resultado);
        
        if (typeof resultado === 'number') {
            textoFactorial = `<strong>${numero}! </strong> = ${resultado.factorial}`;
        } else {
            textoFactorial = `<strong>${numero}! </strong> (${resultado.process}) = ${resultado.resultado}`;
        }
        
        nuevaEntrada.innerHTML = textoFactorial;
        
        if (listadoFactorial.firstChild) {
            listadoFactorial.insertBefore(nuevaEntrada, listadoFactorial.firstChild);
        } else {
            listadoFactorial.appendChild(nuevaEntrada);
        }
    }
});

console.log("5! es:", calcularFactorial(5)); // Debería ser 120