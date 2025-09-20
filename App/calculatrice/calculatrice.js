class Calculatrice {

    result;

    // Commentaire à modifier pour tester github actions :
    // Test

    constructor(){}

    additionner(number1, number2){
        this.result = number1 + number2;
        return this.result
    }

    soustraire(number1, number2){
        this.result = number1 - number2;
        return this.result
    }

    multiplier(number1, number2){
        this.result = number1 * number2;
        return this.result
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

// --- Liaison avec le HTML ---
const calc = new Calculatrice();

function getValues() {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    return { number1, number2 };
}

document.getElementById("add").addEventListener("click", () => {
    const { number1, number2 } = getValues();
    document.getElementById("result").innerText = "Résultat : " + calc.additionner(number1, number2);
});

document.getElementById("sub").addEventListener("click", () => {
    const { number1, number2 } = getValues();
    document.getElementById("result").innerText = "Résultat : " + calc.soustraire(number1, number2);
});

document.getElementById("mul").addEventListener("click", () => {
    const { number1, number2 } = getValues();
    document.getElementById("result").innerText = "Résultat : " + calc.multiplier(number1, number2);
});

document.getElementById("div").addEventListener("click", () => {
    const { number1, number2 } = getValues();
    document.getElementById("result").innerText = "Résultat : " + calc.diviser(number1, number2);
});
