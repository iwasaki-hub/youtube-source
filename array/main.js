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

  // ここで、一度fruits array をfull fruits array にコピーします。
  // 次のように、記述するとコピーすることができます。一旦、こう書けばコピーされると覚えておいてください。
  // copy
  const fullFruits = [...fruits];

  // 配列の要素を削除するには、pop()を使えば最後の要素、shift()を使えば先頭の要素を削除することができます。
  // remove
  console.log("-------------delete---------------");
  fullFruits.pop(); // the last element
  fullFruits.shift(); // the first element
  console.log("fullFruits", fullFruits);

  // 削除したあとのfullfruits をremovedfruits にコピーします。
  // copy
  const removeFruits = [...fullFruits];

  // https://youtu.be/ziJuwH5AHXo?si=QTVWexVoE4DwyWtm　10:30
  // 次は、置き換えです。splice()を使えば、特定の要素を置き換えることが可能です。
  // fill() を使えば、すべての要素を置き換えることが可能です。
  // replace
  removeFruits.splice(0, 1, { name: "pineapple", price: 250 }); // remove or replace
  removeFruits.fill({ name: "apple", price: 100 });
  console.log("removeFruits", removeFruits);

  // ちなみに、fill()は次のような使い方も可能です。この記述は、よくアルゴリズムでも使われるので、覚えておくと便利です。
  const languages = Array(9).fill("1");
  console.log(languages);

  // ここまでで、push, unshit, pop, shift, splice, fill の６個の関数を扱いました。
  // これで、追加、削除、置き換えが可能になります。
};

// add_remove_replace();

const serach_roop_filter_reduce = () => {
  // 次に、新しい配列を2つ用意しましょう。一つは、数字、もう一つはキャラクターの配列になります。
  // キャラクターの配列には、名前と年齢のプロパティーを入れています。
  // new Array
  const numbers = [1, 2, 3, 4, 5, 5, 15, 20];
  const characters = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
  ];

  // ここでは、検索の機能を紹介します。
  // search
  // まず、includes()は、配列に引数が含まれているかをtrue or falseで返します。
  const include = numbers.includes(2); // include a certain value
  // 次に、indexOf()は、引数が含まれている場合、最初のindexを返します。
  // この場合、５という数字を配列から探して、４番目に最初の５があるので、４が返ってきます。
  const index = numbers.indexOf(5); // the first index
  // 次に、find()は、テスト関数（num > 10）を満たす配列内の最初の要素を返します。
  const findNum = numbers.find((num) => num > 10); // the first element
  // 次も同様にnameがAliceの最初の要素を返します。
  const findChar = characters.find((char) => char.name === "Alice");
  // 次に、some()は、テスト関数（num % 2 === 0）を満たす要素が一つでもあれば、trueを返します。
  const some = numbers.some((num) => num % 2 === 0); // at least one element in the array passes the test
  // 次に、every()は、すべての要素がテスト関数（num % 2 === 0）に合格した場合、trueを返します。
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
  // forEach()は、与えられた関数を、配列の各要素に対して一度ずつ実行します。
  // execute a provided function once for each array element
  numbers.forEach((num, index) => {
    console.log(index + " -", num * 10);
  });

  // map()は、与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成します。
  // create a new array populated with the results of calling a provided function
  const newNumbers = numbers.map((num) => {
    return num * 10;
  });
  console.log("newNumbers: ", newNumbers);

  // filter
  // filter()は、指定された関数で実装されているテスト（num >= 4）に合格した要素だけを抽出します。
  const filterArray = numbers.filter((num) => num >= 4);
  console.log("filterArray: ", filterArray);

  // reduce
  // reduce()は、ユーザーが提供した「縮小」コールバック関数を呼び出します。
  // その際、直前の要素の計算結果の返値を渡します。
  const initialValue = 0;
  const sumWithInitial = numbers.reduce(
    (total, num) => total + num,
    initialValue
  );
  console.log("sumWithInitial: ", sumWithInitial);

  // ここまでで、includes(), indexOF(), find(), some(), every(), forEach(), map(), filter, reduce()の9個の関数を扱いました。
};

// serach_roop_filter_reduce();

const sort_reverse_key_value = () => {
  // 新しい配列を準備します。シンプルなmonths配列と、数字の配列です。
  // new Array
  const months = ["March", "Jan", "Feb", "Dec"];
  const numbers = [3, 1, 4, 2, 15];

  // ここでは、ソートについて扱いいます。
  // sort
  // sort()は、要素を文字列に変換してから、UTF-16コード単位の値の並びとして比較します。
  const sortedArray1 = months.sort();
  console.log("sorted months: ", sortedArray1);

  // 数字を扱う場合、昇順でソートする場合は、次のように記述します。
  const sortedArray2 = numbers.sort((a, b) => a - b);
  console.log("sorted numbers: ", sortedArray2);

  // reverse
  // reverse()は、配列の要素を反転させ、その配列を返します。
  const reversedArray1 = sortedArray1.reverse();
  console.log("reversedArray1: ", reversedArray1);

  const reversedArray2 = sortedArray2.reverse();
  console.log("reversedArray2: ", reversedArray2);

  // 次にkeys(), values()を扱います。
  // new Array
  const characters = [
    { name: "mario", age: 25 },
    { name: "luigi", age: 30 },
  ];

  // key and value
  // keys()は、配列内の各インデックスの配列を返します。
  const keys = characters.keys();
  console.log(keys);
  for (const key of keys) {
    console.log("key: ", key);
  }

  // values()は、配列内の各要素の値の配列を返します。
  const values = characters.values();
  for (const value of values) {
    console.log("value: ", value);
  }

  // ここまでで、sort(), reverse(), keys(), values() の４つの関数を扱いました。
};

// sort_reverse_key_value();

const concat_join_toString = () => {
  // それでは、最後のセクションです。
  // 次のあたらしい配列を５つ準備します。
  // new Array
  const fruits = ["apple", "banana"];
  const moreFruits = ["orange", "grape"];

  const num1 = [1, 2, 3];
  const num2 = [4, 5, 6];
  const num3 = [7, 8, 9];

  // concat
  // concat()は、２つ以上の配列を結合するために使用します。このメソッドは新しい配列を返します。
  const allFruits = fruits.concat(moreFruits);
  const allNumbers = num1.concat(num2, num3);

  // display
  console.log(allFruits);
  console.log(allNumbers);

  // join
  // join()は、配列の全要素を順に結合した新しい文字列を返します。区切り文字はカンマ、
  // または、指定された文字列です。
  console.log(allFruits.join(", "));
  console.log(allNumbers.join(" - "));

  // toString
  // toString()は、配列の要素を表す文字列を返します。
  const toStr = num1.toString();
  console.log("toString: ", toStr);

  // toLocalString
  // toLocalString()は、配列の要素は、ローカル固有の文字列に変換されます。
  const array = [1, "a", new Date()];
  const localString = array.toLocaleString("ja", { timeZone: "Asia/Tokyo" });
  console.log(array);
  console.log(localString);

  // ここまでで、concat(), join(), toString(), toLocalString()の４つの関数を扱いました。
  // これで、全
};

// 締めのセリフ
/*
これで、今日のチューとリアを終わります。
この動画が役に立ったら、いいねとチャンネル登録してくれるとめ嬉しいです
それじゃあ、次の動画でまた会おうね
*/
