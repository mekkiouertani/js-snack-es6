//SNACK #1
"use strict"

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

console.log(printList);

