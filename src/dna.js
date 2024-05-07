/*var dnaToCheck = "CTAGTAGCTAAG"; // Para checar que contenga las 4 letras permitidas
var dnaToCheckEmpty = ""; // Ejemplo para la variable vacía*/


function DNAChecker(dnaString) {
    // Check for empty string and log a specific message
    if (dnaString.length === 0) {
        console.log("String is empty, try again");
        return false; // Mostrar un mensaje que diga que está vacío y que es falso 
    }

    // Función para iterar sobre el largo de nuestro string.
    for (let i = 0; i < dnaString.length; i++) {
        let char = dnaString[i];
        // Regresar falso si tiene un caracter que no esté permitido.
        if (char !== 'C' && char !== 'T' && char !== 'A' && char !== 'G') {
            return false;
        }
    }
    // Si todos los caracteres son válidos entonces regresar que está bien.
    return true;
}

// Usage example
console.log("Is valid DNA?", DNAChecker("CTAGA")); // Output the result
console.log("Is valid DNA?", DNAChecker("")); // Output the result

module.exports = DNAChecker; 