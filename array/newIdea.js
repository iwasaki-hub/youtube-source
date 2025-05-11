// こんにちは！今回は、Amazon風の「ショッピングカート」を使って、JavaScriptの配列メソッドを楽しく学んでいきましょう。
//商品を追加したり、削除したり、並び替えたり。まるで本物のECサイトみたいに、配列を自在に操作していきましょう！


// まずはカートを空の状態で準備します。
let myCart = [];

// それでは、買い物を初めていきます。
// pushで商品をカートに追加、unshiftで先頭に追加します。
myCart.push({ name: "iphone", price: 200, quantity: 1 });
myCart.push({ name: "AirPods", price: 150, quantity: 1 });
myCart.push({ name: "Laptop", price: 300, quantity: 2 });
// ここで、カートの中身を見てみましょう。
console.log(myCart);
// それぞれの商品の情報にアクセスするには、
console.log(myCart[0]);
// ここで、セール商品があったので先頭に固定します。
myCart.unshift({ name: "Fire TV", price: 400, quantity: 1 });


// 一覧を表示させます。display each item
myCart.forEach((item, index) => {
  console.log(`${index}. ${item.name} -- $${item.price}`);
});

// 名前だけを抽出した、配列を作ります。display the name of each item
let names = myCart.map((item) => {
  return item.name;
});
console.log("names", names);

// forEach と、mapの違いは返値があるかないかの違いです。

// search　次に、カートに入れた商品の検索をしましょう。
// まずは、Laptopが入っているか確認します。
const hasLaptop = names.includes("Laptop");
console.log("Cart has a laptop?", hasLaptop);

// index　Laptopが何番目に入っているか確認します。
const indexOfLaptop = names.indexOf("Laptop");
console.log("Lapotp index", indexOfLaptop);

// over price 300　filterを使って　price が$300以上の商品を抽出します。
let over300 = myCart.filter((item) => item.price >= 300);
console.log("over300", over300);

// find ->the first element　別の手段で、iphoneを検索します。
// find を使うと、テスト関数を満たす配列内の最初の要素を返します。
const findIphone = myCart.find((item) => item.name === "iphone");
console.log(findIphone);

// some -> at least one element　個数が２個以上の商品があるかチェックします。
// some()を使えば、一つでも、配列内の要素がテスト関数を満たしていれば、trueを返します。
const someCheck = myCart.some((item) => item.quantity >= 2);
console.log("someCheck", someCheck);

// every -> all elements in the array pass the test
// every を使うことによって、すべての要素がテスト関数を通過すれば、trueを返します。
const everyCheck = myCart.every((item) => item.quantity >= 1);
console.log("everySchek", everyCheck);

// total　最後に、reduce で合計を算出します。
let total = myCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
console.log("my cart total: $", total);

// copy　ここで買った、商品を新しい配列にコピーします。
let selectedItems = [...myCart];

// sort　買った商品を安い順に並べます。
selectedItems.sort((a, b) => a.price - b.price);

// display each item　一覧を見てみましょう。
selectedItems.forEach((item, index) => {
  console.log(`${index}. ${item.name} -- $${item.price}`);
});
// reverseを使えば高い順に並べることも可能です。
console.log("get Item reverse", selectedItems.reverse());

// 間違っていれた商品は、popで最初の要素、shiftで先頭から削除できます。
selectedItems.pop(); // remove last element
selectedItems.shift(); // the first element

// splice を使えば、指定した一のアイテムを自由に削除もしくは変更できます。
selectedItems.splice(0, 1, { name: "Laptop", price: 300, quantity: 2 });

// キーや、値のみを取得する方法を紹介します。
// keysでインデックス、valuesで中身を一つずつ取得することができます。
// display keys
for (let index of myCart.keys()) {
  console.log(index);
}

// display values
for (let values of myCart.values()) {
  console.log(values);
}

// 翌日新しいショッピングカートに商品をいれます。
// concat
let newCart = [{ name: "ipad", price: 500 }];

// concatを使うことによって、すべての商品を一つの配列に結合することができます。
let allItems = myCart.concat(newCart);
console.log(allItems);

// また、joinを使うと、配列の全要素を順に連結した新しい文字列を返すことも可能です。
// 区切り文字は、joinの引数で指定するいことができます。
let allNames = allItems.map((item) => item.name);
console.log(allNames.join(", "));

// 配列の基本から応用まで、ショッピングカートを通して紹介しました。
// この動画が役になったら、いいねとチャンネル登録をお願いします！
// では、次回の動画でお会いしましょう。


// chatgpt

