// Version CommonJS pour Jest
class Calculatrice {
  result;
  
  constructor() {}

  additionner(a, b) {
    return this.result = a + b;
  }

  soustraire(a, b) {
    return this.result = a - b;
  }

  multiplier(a, b) {
    return this.result = a * b;
  }

  diviser(a, b) {
    this.result = b === 0 ? "Erreur : division par 0" : a / b;
    return this.result;
  }
}

// Export pour Jest
module.exports = Calculatrice;
