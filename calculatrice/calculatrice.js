class Calculatrice {

    result;

    inputNumber1 = document.querySelector('#number1');
    inputNumber2 = document.querySelector('#number2');
    displayResult = document.querySelector('#result');

    constructor(){}

    additionner(){
        this.result = this.inputNumber1.valueAsNumber + this.inputNumber2.valueAsNumber;
        console.log(this.result);
        this.displayResult.innerHTML = this.result;
    }

    soustraire(){
        this.result = this.inputNumber1.valueAsNumber - this.inputNumber2.valueAsNumber;
        console.log(this.result);
        this.displayResult.innerHTML = this.result;
    }

    multiplier(){
        this.result = this.inputNumber1.valueAsNumber * this.inputNumber2.valueAsNumber;
        console.log(this.result);
        this.displayResult.innerHTML = this.result;
    }

    diviser(){
        this.result = this.inputNumber1.valueAsNumber / this.inputNumber2.valueAsNumber;
        console.log(this.result);
        this.displayResult.innerHTML = this.result;
    }
}

const add = document.querySelector("#add")
const sub = document.querySelector('#sub');
const mul = document.querySelector('#mul');
const div = document.querySelector('#div');

let calc = new Calculatrice();

if(add !== null){
    add.addEventListener('click', () => calc.additionner())
}

if(sub !== null){
    sub.addEventListener('click', () => calc.soustraire())
}

if(mul !== null){
    mul.addEventListener('click', () => calc.multiplier())
}

if(div !== null){
    div.addEventListener('click', () => calc.diviser())
}
