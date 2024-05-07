const { factorial } = require('../factorial.js'); // Adjust the import according to your actual file structure

describe('Factorial Function Tests', () => {
    // Test para enteros positivos
    it('should correctly compute the factorial of a positive integer', () => {
        expect(factorial(5)).toBe(120);
        expect(factorial(4)).toBe(24);
    });

    // Test para cero para que de 1
    it('should return 1 when the input is 0', () => {
        expect(factorial(0)).toBe(1);
    });

    // Test para no enteros: deberia  entregar el factorial del entero más cercano
    it('should compute factorial using the floor of non-integer values', () => {
        expect(factorial(5.2)).toBe(120); // Porque lo baja a 5
        expect(factorial(1.9)).toBe(2); // Porque lo sube a 2
    });

    // Deberia regresarte que no existen los factoriales para números negativos
    it('should throw an error for negative inputs', () => {
        expect(() => factorial(-1)).toThrow("No existe factorial para números negativos.");
    });
});