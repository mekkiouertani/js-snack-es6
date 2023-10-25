"use strict"

//SNACK 3
    /* Creare un array di oggetti:
    Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
    Stampare in console la bici con peso minore utilizzando destructuring e template literal */

const bikes = [
    {
        name: "Ferrari",
        weight: 15
    },
    {
        name: "Alfa",
        weight: 10
    },
    {
        name: "Romeo",
        weight: 8
    },
    {
        name: "Michielin",
        weight: 20
    },
];

/* const lowerWeightBike = [];

bikes.forEach((bike)=>{
    const bikeWeight = bike.weight 
    lowerWeightBike.push(bikeWeight)
})

const bikeWithLowerWeight =  Math.min(...lowerWeightBike)
console.log(`SNACK #3: La bici che pesa di meno :${bikeWithLowerWeight}kg`);
 */

let biciMinore = bikes[0];

bikes.forEach((bike)=>{
    if (bike.weight < biciMinore.weight){
        biciMinore.name = bike.name;
        biciMinore.weight = bike.weight;
    }
});

console.log(`la bici più si chiama ${biciMinore.name} ed ha un peso di ${biciMinore.weight}kg`);




//SNACK #4
    /* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
    Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
    Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
    Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */