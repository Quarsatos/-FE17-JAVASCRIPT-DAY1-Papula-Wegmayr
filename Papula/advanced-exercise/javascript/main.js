// Ecercise 1
// Sum the following variables and store the result in one new variable:
let a = 7;
let b = 14;
let c = "21";
let d = '36';
let e = 42;

let sum_1 = a + b + parseInt(c)+ parseInt(d) + e;
document.write(sum_1 + "<br>");
console.log(sum_1)

// Multiply the following variables and store the result in one new variable:
let f = '1';
let g = 15;
let h = 8;
let i = "1";

let sum_2 = parseInt(f) * g * h * parseInt(i);
document.write(sum_2 + "<br>" + "<hr>");
console.log(sum_2)
// Divide the two results that you got from the arithmetic operations and print the result in the web browser.
document.write(sum_1 / sum_2 +"<br>");
console.log(sum_1 / sum_2)

// Exercise 2
let  people = ["Greg", "Mary", "Devon","James"];
document.write(people + "<br>");
console.log(people)

// Remove "Greg" from the array.
people.shift();
document.write(people + "<br>");
console.log(people)

// Add "Matt" to the front of the array. 
people.unshift("Matt");
document.write(people + "<br>");
console.log(people)

// Remove “James” from the array.
people.pop();
document.write(people + "<br>");
console.log(people)

// Add your name to the end of the array.
people.push("Manuel");
document.write(people + "<br>");
console.log(people)

// Make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
document.write(people.slice(2,4) + "<br>");

//  Using the indexOf method, find the index of where "Mary" is located.
document.write(people.indexOf("Mary") + "<br>");

//  Using the indexOf method, find the index of where "Foo" is located (this should return -1)
document.write(people.indexOf("Foo") + "<br>");
console.log(people)

// Redefine the people variable with the values you started with.
people = ["Greg", "Mary", "Devon","James"];
document.write(people + "<br>")
console.log(people)

// Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Anna". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Anna", "James"
people.splice(2,1, "Elizabeth", "Anna")
document.write(people + "<br>");
console.log(people)

//Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob"
let withBob = people.concat("Bob")
document.write(withBob + "<br>");
console.log(withBob)

/* Exercise 3
 From the following multidimensional Array:
[ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ]
Select and output the numbers 11, 25, 17, 27 and 0 in the console.*/

let = numbers  = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ]

document.write(numbers[1][1] +","+ numbers[4][2] + "," + numbers[5][3] +","+ numbers[2][1] + "<br>");
console.log(numbers[1][1] +","+ numbers[4][2] +  "," + numbers[5][3] +","+ numbers[2][1])