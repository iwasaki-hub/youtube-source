// new Array
const fruits = ["apple", "banana"];
const moreFruits = ["orange", "grape"];

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

// concat
const allFruits = fruits.concat(moreFruits);
const allNumbers = num1.concat(num2, num3);

// display
console.log(allFruits);
console.log(allNumbers);

// join
console.log(allFruits.join(", "));
console.log(allNumbers.join("-"));

// toString
console.log("toString: ", num1.toString());

// toLocalString
const array = [1, "a", new Date()];
const localString = array.toLocaleString("ja", { timeZone: "Asia/Tokyo" });
console.log(array);
console.log(localString);
