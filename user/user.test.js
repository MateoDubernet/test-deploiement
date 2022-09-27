class Test extends User{

    constructor(){
        super();
    }

    isValid(){
        describe('Calc Test', () => {
            it('valide user', () => {
                expect(this.email).toBeDefined();
                expect(this.email).toMatch('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/');
                expect(this.nom).toBeDefined();
                expect(this.prenom).toBeDefined();
                expect(this.age).toBeGreaterThanOrEqual(13);
            })
        })
    }
}

