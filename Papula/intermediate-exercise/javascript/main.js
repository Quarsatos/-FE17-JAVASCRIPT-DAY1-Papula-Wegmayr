// Exercise 1
const cars = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];
document.write(cars.sort() +"<br>");

// Exercise 2
let  fruits = ["apple", "banana", "kiwi"];
fruits.push("orange");
document.write(fruits +"<br>");
fruits.pop();
document.write(fruits +"<br>");

let animals = ["monkey","horse","dog"];
document.write(animals +"<br>");
animals.unshift("cat");
document.write(animals +"<br>");

let more_fruits = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
// closer look line 19
document.write(more_fruits.split("/").join("\r\n"));  
console.log(more_fruits.split("/").join("\r\n"));

