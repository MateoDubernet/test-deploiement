import { Calculatrice } from './calculatrice/calculatrice.js';

describe("Calc Test", () => {
    let calc;

    beforeEach(() => {
        calc = new Calculatrice();
    });

    test("addition", () => {
        expect(calc.additionner(5, 10)).toBe(15);
    });

    test("soustraction", () => {
        expect(calc.soustraire(5, 10)).toBe(-5);
    });

    test("multiplication", () => {
        expect(calc.multiplier(5, 10)).toBe(50);
    });

    test("division", () => {
        expect(calc.diviser(5, 10)).toBe(0.5);
    });

    test("division par zéro", () => {
        expect(calc.diviser(5, 0)).toBe("Erreur : division par 0");
    });
});
