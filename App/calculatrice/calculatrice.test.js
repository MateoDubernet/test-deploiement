const calculatrice = require('./calculatrice')
class TestCalculatrice extends calculatrice.Calculatrice{

    constructor(){
        super();
    }

    isValide(){
        describe('Calc Test', () => {
            it('must calculate number', () => {
        
                const add = this.additionner(5, 10);
                const sub = this.soustraire(5, 10);
                const mul = this.multiplier(5, 10);
                const div = this.diviser(5, 10);
        
                expect(add).toBeDefined();
                expect(sub).toBeDefined();
                expect(mul).toBeDefined();
                expect(div).toBeDefined();

                expect(add).toEqual(15);
                expect(sub).toEqual(-5);
                expect(mul).toEqual(50);
                expect(div).toEqual(0.5);
            })
        })
    }
}

let testCalculatrice = new TestCalculatrice();
testCalculatrice.isValide();
