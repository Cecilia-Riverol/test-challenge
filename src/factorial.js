/* Se debe crear una calculadora para factoriales, debe ser sensitivo para: Entero, Decimales, y negativos*/


function factorial(num) {
    //Pongo esta función para mover el numero a su entero más cercano porque no entendí como factorizar números que no sean enteros
    num = Math.round(num);
    //Revisar que no sea un número negativo
    if (num < 0) {
        throw new Error("No existe factorial para números negativos.");
        //En caso de que sea cero o uno, que mande diretamente uno
    } else if (num === 0 || num === 1) {
        return 1;
        
    } else {
        return num * factorial(num - 1);
    }
}

let num = 5;

try {
    // Mostrar el resultado de cada uno
    let y = factorial(num);
    console.log(`El factorial de ${num} es ${y}`);
} catch (error) {
    console.error(error.message);
}

module.exports = { factorial};