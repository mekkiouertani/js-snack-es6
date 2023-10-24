"use strict"

//SNACK #1

const guests = [ 
    'Brad Pitt', 
    'Johnny Depp',
    'Lady Gaga', 
    'Cristiano Ronaldo', 
    'Georgina Rodriguez', 
    'Chiara Ferragni', 
    'Fedez', 
    'George Clooney', 
    'Amal Clooney', 
    'Maneskin'
];


const printList = guests.map((guestName,i) => {
    let guest = {
        guestName: guestName,
        tableName: "VIP Table",
        place: i + 1
    };
    return guest
});

console.log("SNACK #1",printList);



//SNACK #2

const students = [
    {
        id : 213,
        name : 'Marco della Rovere',
        grades : 78
    },
    {
        id : 110,
        name : 'Paola Cortellessa',
        grades : 96
    },
    {
        id : 250,
        name : 'Andrea Mantegna',
        grades : 48
    },
    {
        id : 145,
        name : 'Gaia Borromini',
        grades : 74
    },
    {
        id : 196,
        name : 'Luigi Grimaldello',
        grades : 68
    },
    {
        id : 102,
        name : 'Piero della Francesca',
        grades : 50
    },
    {
        id : 120,
        name : 'Francesca da Polenta',
        grades : 84
    },
];

const studentsNames = students.map((el)=>  el.name.toUpperCase());
console.log("SNACK # 2(uppercase)",studentsNames);

const studentGrades = students.filter((el)=> el.grades > 70);
console.log("SNACK # 2(grades)",studentGrades);

const studentGradesId = students.filter((el)=> el.grades > 70 && el.id > 120);
console.log("SNACK # 2(ID & grades)",studentGradesId);


//SNACK # 3
    /* A partire da un array di stringhe, crea un secondo array formattando le
    stringhe del primo array in minuscolo e con l’iniziale maiuscola.
    Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */

const snack3 = [
    "pippo",
    "PLUTO",
    "Paperino",
    "MINNIE",
    "topolinO"
]

const newSnack3 = snack3.map((el)=>{
    let lower = el.toLowerCase()
    let upper = lower.charAt(0).toUpperCase() + lower.slice(1)
    return upper
})
console.log("SNACK 3", newSnack3);


//SNACK # 4
    /* Crea un array di oggetti che rappresentano degli animali.
    Ogni animale ha un nome, una famiglia e una classe. 
    Crea un nuovo array con la lista dei mammiferi.*/

const snack4 = [
    {
        specie: "leone",
        famiglie: "felidi",
        classe: "mammiferi"
    },
    {
        specie: "cane",
        famiglie: "canidi",
        classe: "mammiferi"
    },
    {
        specie: "gallina",
        famiglie: "fasianidi",
        classe: "uccelli"
    },
    {
        specie: "serpente",
        famiglie: "fasianidi",
        classe: "rettile"
    },
    {
        specie: "pappagallo",
        famiglie: "fasianidi",
        classe: "uccelli"
    },
]

const newSnack4 = snack4.filter((el) => el.classe === "mammiferi");
console.log("SNACK 4",newSnack4);