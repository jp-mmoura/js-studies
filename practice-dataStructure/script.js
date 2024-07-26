'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
    staterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu:{
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        }, 
        sat: {
            open: 0, //Open 24 hours
            close: 24,
        },
    },

    order: function(starterIndex, mainIndex){
        return [this.staterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:30', address}) {
        console.log(`Order received! ${this.staterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
};



/*
//Spread Operator
const arr = [7, 8, 9]; 
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); 

const newArr = [1, 2, ...arr]; 
console.log(newArr); 
*/

/*
//Desconstructing Object
restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21', 
    mainIndex: 2,
    starterIndex: 2,
}); 


/*Deprecated, but why?
const {name, openingHours, categories} = restaurant; 
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories:tags} = restaurant; 
console.log(restaurantName, hours, tags); 


//Default values
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

//Mutating Values
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

 ({a, b} = obj); 
console.log(a, b); 

//nested 
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);
*/

/*
//Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; 
console.log(x, y, z); 
console.log(arr);

let [main, secondery] = restaurant.categories;
console.log(main, secondery); 


[main, secondery] = [secondery, main]

const [starter, mainCourse] = (restaurant.order(2, 0));
console.log(starter, mainCourse); 

const nested = [2, 4, [5, 6]]; 
/*One Way
const [i, ,j] = nested; 
console.log(i, j)

const [i, ,[j, k]] = nested;
console.log(i, j, k);

//Default Values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);*/
