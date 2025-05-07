const add_remove_replace = () => {

/*
 こんにちは！今回はjavascriptの配列について学んでいきましょう。
 配列とは、複数のデータをひとまとまりにして扱える構造になっています。
 たとえば、apple, bananaのように、果物の一覧を１つにまとめたり、複数の数値やオブジェクトを整理したりするのにべんりです。

 配列は、web開発だけでなく、
 ネットショップのカート機能
 AIの大量データの処理
 グラフや統計を扱うデータサイエンス
 など、あらゆる現場の「当たり前」を支える超重要なツールです。

 この動画では、配列の基本操作から応用まで、23個の関数を一気に紹介します。
 追加、削除、置換、検索など、よく使う操作を網羅しています。
 これらを理解すれば、あらゆる場面で配列を自由自在に活用していただけます。
 それでは、さっそく初めていきましょう。
*/

  // What is the Array？
  // A collection of objects organized into an array


  const fruits = [
    { name: "apple", price: 100 },
    { name: "banana", price: 150 },
  ];

//   配列に要素を追加するには、push()を使えば末尾に、inshift()を使えば先頭に追加できます。次の例では、peachが末尾に、orangeが先頭に追加されます。
// 特定のindexに追加したい場合は、次のように記述します。

  // add
  fruits.push({ name: "peach", price: 200 }); // the end of an array
  fruits.unshift({ name: "orange", price: 200 }); // the beginning of an array
  fruits[4] = { name: "mango", price: 250 };

  // console.log
  console.log("--------------add-----------------");
  console.log("Fruits Array: ", fruits);
  console.log("keys: ", Object.keys(fruits));
  console.log("index 3: ", fruits[3]);
  console.log("length: ", fruits.length);

  // copy
  const fullFruits = [...fruits];

  // remove
  console.log("-------------delete---------------");
  fullFruits.pop(); // the last element
  fullFruits.shift(); // the first element
  console.log("fullFruits", fullFruits);

  // copy
  const removeFruits = [...fullFruits];

  // replace
  removeFruits.splice(0, 1, { name: "pineapple", price: 250 }); // remove or replace
  removeFruits.fill({ name: "apple", price: 100 });
  console.log("removeFruits", removeFruits);
};

const serach_roop_filter_reduce = () => {
  // new Array
  const numbers = [1, 2, 3, 4, 5, 5, 15, 20];
  const characters = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
  ];

  // search
  const include = numbers.includes(2); // include a certain value
  const index = numbers.indexOf(5); // the first index
  const findNum = numbers.find((num) => num > 10); // the first element
  const findChar = characters.find((char) => char.name === "Alice");
  const some = numbers.some((num) => num % 2 === 0); // at least one element in the array passes the test
  const every = numbers.every((num) => num % 2 === 0); // all elements in the array pass the test

  // console.log
  console.log(numbers);
  console.log("include: ", include);
  console.log("index: ", index);
  console.log("find: ", findNum);
  console.log("findChar: ", findChar);
  console.log("some: ", some);
  console.log("every: ", every);

  // roop
  // execute a provided function once for each array element
  numbers.forEach((num, index) => {
    console.log(index + " -", num * 10);
  });

  // create a new array populated with the results of calling a provided function
  const newNumbers = numbers.map((num) => {
    return num * 10;
  });
  console.log("newNumbers: ", newNumbers);

  // filter
  const filterArray = numbers.filter((num) => num >= 4);
  console.log("filterArray: ", filterArray);

  // reduce
  const initialValue = 0;
  const sumWithInitial = numbers.reduce(
    (total, num) => total + num,
    initialValue
  );
  console.log("sumWithInitial: ", sumWithInitial);
};

const sort_reverse_key_value = () => {
  // new Array
  const months = ["March", "Jan", "Feb", "Dec"];
  const numbers = [3, 1, 4, 2, 15];

  // sort
  const sortedArray1 = months.sort();
  console.log("sorted months: ", sortedArray1);

  const sortedArray2 = numbers.sort((a, b) => a - b);
  console.log("sorted numbers: ", sortedArray2);

  // reverse
  const reversedArray1 = sortedArray1.reverse();
  console.log("reversedArray1: ", reversedArray1);

  const reversedArray2 = sortedArray2.reverse();
  console.log("reversedArray2: ", reversedArray2);

  // new Array
  const characters = [
    { name: "mario", age: 25 },
    { name: "luigi", age: 30 },
  ];

  // key and value
  const keys = characters.keys();
  for (const key of keys) {
    console.log("key: ", key);
  }
  const values = characters.values();
  for (const value of values) {
    console.log("value: ", value);
  }
};

const concat_join_toString = () => {
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
  console.log(allNumbers.join(" - "));

  // toString
  console.log("toString: ", num1.toString());

  // toLocalString
  const array = [1, "a", new Date()];
  const localString = array.toLocaleString("ja", { timeZone: "Asia/Tokyo" });
  console.log(array);
  console.log(localString);
};

