class User {

    email;
    nom;
    prenom;
    age;

    constructor(){}

    setUserValue(email, nom, prenom, age){
        this.email = email /*"mateo.dubernet@gmail.com"*/;
        this.nom = nom/*"mateo"*/;
        this.prenom = prenom/*"dubernet"*/;
        this.age = age/*21*/;
    }
}

exports.User = User;