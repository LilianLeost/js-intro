//manière historique

function addition(a,b) {
    return a+b;
}

console.log(addition(1,2));

// Utiliser une constante
// Fonction anonyme
// addition est une constante qui est une référence sur une fonction

const addition2 = function (a,b) {
    return a+b;
}

console.log(addition2(2,4))

// Utiliser des arrow functions (fonctions fléchées)

const addition3 = (a,b)=> {
    return a+b;
}
console.log(addition3(2,7))

// Une seule instruciton return

const addition4 = (a,b)=> a+b;

console.log(addition4(4,8))