const DNAChecker = require('../dna.js'); 

describe('DNAChecker Function Tests', () => {
    // Test para una función válida de ADN
        test('returns true for another valid DNA sequence "GATTACA"', () => {
        expect(DNAChecker("GATTACA")).toBe(true);
    });

    // Test para una función con caracteres erroneos
    test('returns false for sequence containing invalid character "CTXG"', () => {
        expect(DNAChecker("CTXG")).toBe(false);
    });

    // Test para los caracteres en minúscula
    test('returns false for lowercase sequence "ctag"', () => {
        expect(DNAChecker("ctag")).toBe(false);
    });

    // Test para la cadena vacia 
    test('returns false for an empty string', () => {
        // Mock console.log to prevent actual logging during tests
        console.log = jest.fn();
        expect(DNAChecker("")).toBe(false);
        expect(console.log).toHaveBeenCalledWith("String is empty, try again");
    });
});