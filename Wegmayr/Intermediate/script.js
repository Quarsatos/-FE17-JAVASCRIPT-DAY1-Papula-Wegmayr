var cars = ['Tesla', 'Audi', 'Renault', 'Volvo', 'Mazda', 'Fiat', 'Ferrari'];

console.log(cars.sort());


var fruits= ['apple', 'banana', 'kiwi'];

fruits.push("orange");
console.log(fruits);
fruits.pop("orange");
console.log(fruits);

// Second Exercise

var animals = ['monkey', 'horse', 'dog'];

animals.sort();
console.log(animals);

animals.splice(0, 0, "cat");
console.log(animals);


// Third Exercise 

var fruit1 = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";

var fruit2 = fruit1.split("/");
console.log(fruit2.join("\n"));