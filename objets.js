// Objet littéral

const dupond = {
    nom : "Dupond",
    prenom : "Jean",
    age : "37"
}

console.log(dupond);
console.log((dupond.nom));

// Copie d'objet

const dupond_copie = dupond;
dupond_copie.age = 55;
console.log(dupond);
console.log(dupond_copie);

// Copie en profondeur (shallow copie)

const dupondBis = {...dupond};
dupondBis.age = 25;
console.log(dupond);
console.log(dupondBis);

//Copie avec un ajout d'atribut

const dupond2 = {...dupond,sexe:'M'};
console.log(dupond2);

// Copie avec modification des valeurs existantes

const dupond3 = {...dupond,age: 89, sexe:'M'};
console.log(dupond3);

//Destructuring d'objets
//Création de variables à partir des champs d'un objet

const{nom,prenom} = dupond;
console.log(nom,prenom);

//Destructuring d'objets avec rennomage des variables

const {nom:n,prenom:p} = dupond;
console.log(n,p)

//Destructuring d'objets en tant que paramètre d'une fonction
//Fonction qui prend un objet en paramètre et qui retourne l'identité de la personne (prenom nom)

const getIdentity = personne =>
    personne.prenom + ' ' + personne.nom.toUpperCase();

console.log(getIdentity(dupond));

const getIdentity2 = ({nom,prenom}) =>
    prenom + ' ' + nom.toUpperCase();

console.log(getIdentity2(dupond));

