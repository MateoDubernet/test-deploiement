class Calculatrice {

    result;

    inputNumber1 = document.querySelector('#number1');
    inputNumber2 = document.querySelector('#number2');
    displayResult = document.querySelector('#result');

    add = document.querySelector("#add")
    sub = document.querySelector('#sub');
    mul = document.querySelector('#mul');
    div = document.querySelector('#div');

    constructor(){}

    additionner(){
        this.result = this.inputNumber1.valueAsNumber + this.inputNumber2.valueAsNumber;
        this.displayResult.innerHTML = this.result;
    }

    soustraire(){
        this.result = this.inputNumber1.valueAsNumber - this.inputNumber2.valueAsNumber;
        this.displayResult.innerHTML = this.result;
    }

    multiplier(){
        this.result = this.inputNumber1.valueAsNumber * this.inputNumber2.valueAsNumber;
        this.displayResult.innerHTML = this.result;
    }

    diviser(){
        this.result = this.inputNumber1.valueAsNumber / this.inputNumber2.valueAsNumber;
        this.displayResult.innerHTML = this.result;
    }
}

let calc = new Calculatrice();
calc.add.addEventListener('click', () => calc.additionner());
calc.sub.addEventListener('click', () => calc.soustraire());
calc.mul.addEventListener('click', () => calc.multiplier());
calc.div.addEventListener('click', () => calc.diviser());

module.exports = { Calculatrice }