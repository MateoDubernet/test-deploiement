const user = require("./user")
class Test extends user.User{

    constructor(){
        super();
    }

    isValid(){
        describe('User Test', () => {
            this.setUserValue("mateo.dubernet@gmail.com", "mateo", "dubernet", 21);

            it('valide user', () => {
                expect(this.email).toBeDefined();
                expect(this.email).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
                expect(this.nom).toBeDefined();
                expect(this.prenom).toBeDefined();
                expect(this.age).toBeGreaterThanOrEqual(13);
            })
        })
    }
}

let testUser = new Test();
testUser.isValid();

