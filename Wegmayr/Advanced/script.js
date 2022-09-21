// Exercise 1

let a = 7;

let b = 14;

let c = 21;

let d = 36;

let e = 42;

let sum = a + b + c + d + e;
console.log(sum);


let f = 1;

let g = 15;

let h = 8;

let i = 1;

let multi = f * g * h * i;
console.log(multi);


let division = sum / multi;
console.log(division);



// Exercise 2

let people = ["Greg", "Mary", "Devon", "James"];

// Remove "Greg" from the array
people.shift(0 , 1); // Alternative people.splice(0, 1);
console.log(people);

// Add "Matt" to the front of the array
people.splice(0, 0, "Matt");
console.log(people);

// Remove "James" from the array
people.pop(); // Alternative people.splice(3, 1)
console.log(people);

// Add your name to the end of the array.
people.push("Julia");
console.log(people);

// Make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
console.log(people.slice(2, 4));

// Using the indexOf method, find the index of where "Mary" is located.
console.log(people.indexOf("Mary"));


// Using the indexOf method, find the index of where "Foo" is located (this should return -1).
console.log(people.indexOf("Foo"));

// Redefine the people variable with the values you started with.

people = ["Greg", "Mary", "Devon", "James"];
console.log(people);


// Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Anna". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Anna", "James"].
people.splice(2, 1, "Elizabeth", "Anna");
console.log(people);

// Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
let withBob = people.concat("Bob");
console.log(withBob);




/* Exercise 3
From the following multidimensional Array:

[ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ]

Select and output the numbers 11, 25, 17, 27 and 0 in the console. */

let numbers = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ];
console.log(numbers[1][1], numbers[4][2], numbers[5][3], numbers[2][3], numbers [2][1]);


