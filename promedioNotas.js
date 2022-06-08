const notes = [
    {
        course: "Matemáticas",
        note: 10,
        credit: 3,
    },
    {
        course: "Quimica",
        note: 8,
        credit: 4,
    },
    {
        course: "Lectura",
        note: 9,
        credit: 2,
    },
];

const notesCredits = notes.map(function (noteObject){
    return noteObject.note * noteObject.credit;
});

const sumaNotesCredits = notesCredits.reduce(function(suma = 0, newValue){
    return suma + newValue;
});

const credits = notes.map(function(noteObject){
    return noteObject.credit;
});

const sumaCredits = credits.reduce(function(suma = 0, newValue){
    return suma + newValue;
});

const promedioPonderado = sumaNotesCredits / sumaCredits;