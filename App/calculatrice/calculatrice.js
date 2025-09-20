class Calculatrice {
    result;

    constructor() {}

    additionner(number1, number2) {
        this.result = number1 + number2;
        return this.result;
    }

    soustraire(number1, number2) {
        this.result = number1 - number2;
        return this.result;
    }

    multiplier(number1, number2) {
        this.result = number1 * number2;
        return this.result;
    }

    diviser(number1, number2) {
        if (number2 === 0) {
            this.result = "Erreur : division par 0";
        } else {
            this.result = number1 / number2;
        }
        return this.result;
    }
}

// Export pour Jest (Node)
module.exports = Calculatrice;
