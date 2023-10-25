"use strict"


//SNACK #1
    /* Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
    Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
    [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
    Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
    nome del tavolo, (tableName)
    nome dell'ospite,  (guestName)
    posto occupato. (place)
    Generiamo e stampiamo in console la lista per i segnaposto. */

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

/* const printList = guests.map((guestName,i) => {
    let guest = {
        guestName: guestName,
        tableName: "VIP Table",
        place: i + 1
    };
    return guest
}); */

const printList = guests.map((guestName,i) => 
    ({
        guestName: guestName,
        tableName: "VIP Table",
        place: i + 1
    })

);

console.log("SNACK #1",printList);

const placeHolders = guests.map
//SNACK #2
    /* Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
    1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
    ES (Marco della Rovere => MARCO DELLA ROVERE);
    2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
    3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120 */

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
console.log("SNACK #2(uppercase)",studentsNames);

const studentGrades = students.filter((el)=> el.grades > 70);
console.log("SNACK #2(grades)",studentGrades);

const studentGradesId = students.filter((el)=> el.grades > 70 && el.id > 120);
console.log("SNACK #2(ID & grades)",studentGradesId);


//SNACK #A
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
console.log("SNACK extra:A", newSnack3);


//SNACK #B
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
console.log("SNACK extra:B",newSnack4);


//SNACK #C
    /* Crea un array di oggetti che rappresentano delle persone.
    Ogni persona ha un nome, un cognome e un’età.
    Crea quindi un nuovo array inserendo, per ogni persona, una frase con il
    nome e cognome e l’indicazione se può guidare, in base all’età. */

const snack5 = [
    {
        name: "Marco",
        surname: "Rossi",
        age: 30
    },
    {
        name: "Gino",
        surname: "Paoli",
        age: 80
    },
    {
        name: "Enza",
        surname: "Ferrari",
        age: 18
    },
    {
        name: "Michela",
        surname: "Bravo",
        age: 75
    },
    {
        name: "Amber",
        surname: "Gentile",
        age: 22
    },
    {
        name: "Johnny",
        surname: "Bravo",
        age: 15
    },
];

let maxAgeForDrive = 71;
let minAgeForDrive = 18;

const newSnack5 = snack5.filter((el)=> el.age < maxAgeForDrive && el.age >= minAgeForDrive)
console.log("SNACK extra:C",newSnack5);


//SNACK #D
    /* Crea un array composto da 10 automobili.
    Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e
    alimentazione (benzina, diesel, gpl, elettrico, metano).
    Dividi le automobili in 3 array separati: nel primo array solo le auto a
    benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
    Infine stampa separatamente i 3 array. */

const cars = [
    {
      brand: "fiat",
      model: "500",
      fuel: "diesel"
    },
    {
      brand: "merceds",
      model: "Series-1",
      fuel: "gasoline"
    },
    {
      brand: "Alfa Romeo",
      model: "mito",
      fuel: "gpl"
    },
    {
      brand: "ferrari",
      model: "enzo",
      fuel: "gasoline"
    },
    {
      brand: "porche",
      model: "cayenne",
      fuel: "diesel"
    },
    {
      brand: "audi",
      model: "toto",
      fuel: "hybrid"
    },
];
  
const dieselCars = cars.filter((car)=> car.fuel === "diesel");

const gasolineCars = cars.filter((car)=> car.fuel === "gasoline");

const gplCars = cars.filter((car)=> car.fuel ==="gpl");

const otherCars = cars.filter((car)=>{
    return car.fuel !== "gpl" && car.fuel !== "diesel" &&  car.fuel !== "gasoline";
}) ;

console.log("SNACK extra:D (Diesel)",dieselCars);
console.log("SNACK extra:D (Gasoline)",gasolineCars);
console.log("SNACK extra:D (Gpl)",gplCars);
console.log("SNACK extra:D (Other Cars)", otherCars);
