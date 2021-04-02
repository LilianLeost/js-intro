const notes = [8,6,9,2,3]

// Affichage des notes

for(let note of notes) {
    console.log(note);
}

//function afficherNote(note) {
//    console.log(note);
//}

// const afficherNote = note => console.log(note);

notes.forEach(note => console.log(note));

// afficherNote : fonction de callback

// map d'un tableau

const notesSur20 = notes.map( note => note*2);

console.log(notesSur20)

// Notes supérieures à 10

const tabNotesSup10 = notesSur20.filter(note => note >10);

console.log(tabNotesSup10)

const tabNoteSur10Bis = notes.map(note => note*2).filter(note => note >10);
console.log(tabNoteSur10Bis)
