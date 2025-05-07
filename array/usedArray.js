const name = "apple";
const fruit = { name: "apple", price: 100 };

const fruits = [
  { name: "apple", price: 100 },
  { name: "banana", price: 150 },
];

// add
fruits.push({ name: "peach", price: 200 }); // add the element to the end of an array
fruits.unshift({ name: "orange", price: 200 }); // add the element to the beginning of the array
fruits[4] = { name: "mango", price: 250 };

// delete
fruits.pop(); // remove the last element
fruits.shift(); // remove the first element
fruits.splice(0, 1, { name: "grape", price: 300 }); // remove or replace
const selectedFruits = fruits.slice(0, 1);

// display array
console.log("Fruits Array: ", fruits);
console.log(Object.keys(fruits));
console.log("length: ", fruits.length);
console.log("selectedFruit Array: ", selectedFruits);

// fill()
fruits.fill({ name: "apple", price: 100 }); // change all element
console.log("FIll Fruits: ", fruits);

// new  Array
const numbers = [1, 2, 3, 4, 5, 5, 15];
const characters = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

// search
const include = numbers.includes(1); // include a certain value
const index = numbers.indexOf(5); // the first index
const findNum = numbers.find((number) => number > 10); // the first element
const findChar = characters.find((char) => (char.name = "Alice"));
const some = numbers.some((number) => number % 2 === 0); // at least one element in the array passes the test
const every = numbers.every((number) => number % 2 === 0); // all elements in the array pass the test

// display
console.log("include:", include);
console.log("index: ", index);
console.log("findNum: ", findNum);
console.log("findChar: ", findChar);
console.log("some: ", some);
console.log("every: ", every);

// roop
// execute a provided function once for each array element
numbers.forEach((number) => {
  console.log(number + 10);
});

// create a new array populated with the results of calling a provided function
const newNumber = numbers.map((number) => {
  return number * 2;
});
console.log("new Numbers: ", newNumber);

const filterArray = numbers.filter((number) => number >= 4);
console.log(filterArray);

const initialValue = 0;
const sumWithInitial = numbers.reduce(
  (total, num) => total + num,
  initialValue
);
console.log(sumWithInitial);

// new Array
const months = ["March", "Jan", "Feb", "Dec"];
const newNumbers = [3, 1, 4, 2, 15];

// sort
const sortedArray1 = months.sort();
console.log("sorted: ", sortedArray1);

const sortedArray2 = newNumbers.sort((a, b) => a - b);
console.log("sorted: ", sortedArray2);

const reversedArray1 = months.reverse();
console.log("reversed: ", reversedArray1);

const reversedArray2 = newNumbers.reverse();
console.log("reversed: ", reversedArray2);

// new Array
const newCharacters = [
  { name: "mario", age: 25 },
  { name: "luigi", age: 30 },
];

// key
const keys = characters.keys();
for (const key of keys) {
  console.log("key: ", key);
}
// value
const values = characters.values();
for (const value of values) {
  console.log("value: ", value);
}
