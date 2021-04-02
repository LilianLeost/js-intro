// Creation d'un tableau d'objets

const personnes = [
    {id:1,nom:'dupond',prenom:'jean',age:55},
    {id:2,nom:'martin',prenom:'martine',age:40},
    {id:3,nom:'durand',prenom:'pierre',age:50},
    {id:4,nom:'doe',prenom:'john',age:33}
]

// Afficher le prenom et le nom(en majuscule) de chaque personne
// Utilisation du foreach

personnes.forEach(({nom,prenom}) => console.log(prenom + ' ' + nom.toUpperCase()));

// Créer un tableau qui contient l'identité (prenom,nom(maj)) de toutes les personnes de plus de 40 ans

const personnesPlus40ans = personnes
    .filter(personne => personne.age > 40)
    .map(personne => personne.prenom + ' ' + personne.nom.toUpperCase());

console.log(personnesPlus40ans)