// 👋 こんにちは！今回は「Amazon風ショッピングカート」を題材に、JavaScriptの【配列メソッド】を楽しく学んでいきましょう！
// 商品を追加・削除・検索・並び替え。本物のECサイトのように配列を自在に操作していきます！

// 🛒 まずは空のカートを用意！
let myCart = [];

// 🛍️ 商品をカートに追加します
myCart.push({ name: "iPhone", price: 200, quantity: 1 });
myCart.push({ name: "AirPods", price: 150, quantity: 1 });
myCart.push({ name: "Laptop", price: 300, quantity: 2 });

// 🖥️ カートの中身を確認
console.log("カートの中身", myCart);

// 🔝 セール商品をカートの先頭に追加（unshift）
myCart.unshift({ name: "Fire TV", price: 400, quantity: 1 });

// 🔄 カート内の商品一覧を表示（forEach）
myCart.forEach((item, index) => {
  console.log(`${index}. ${item.name} - $${item.price}`);
});

// 🧠 商品名だけを抜き出す（map）
const names = myCart.map((item) => item.name);
console.log("商品名一覧:", names);

// 🔍 商品が含まれているか調べる（includes）
const hasLaptop = names.includes("Laptop");
console.log("Laptopは入ってる？", hasLaptop);

// 🔎 商品の位置を調べる（indexOf）
const indexOfLaptop = names.indexOf("Laptop");
console.log("Laptopのインデックス:", indexOfLaptop);

// 💰 価格が$300以上の商品だけを抽出（filter）
const over300 = myCart.filter((item) => item.price >= 300);
console.log("300ドル以上の商品:", over300);

// 🔍 最初に見つかったiPhoneを取得（find）
const findIphone = myCart.find((item) => item.name === "iPhone");
console.log("見つけたiPhone:", findIphone);

// ✅ 個数が2個以上の商品がある？（some）
const someCheck = myCart.some((item) => item.quantity >= 2);
console.log("2個以上の商品がある？", someCheck);

// ✅ すべての商品が1個以上ある？（every）
const everyCheck = myCart.every((item) => item.quantity >= 1);
console.log("すべて1個以上？", everyCheck);

// 💵 合計金額を出す（reduce）
const total = myCart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);
console.log("合計金額: $", total);

// 📦 商品を新しい配列にコピー（スプレッド構文）
let selectedItems = [...myCart];

// 📊 価格の安い順に並び替え（sort）
selectedItems.sort((a, b) => a.price - b.price);

// 🖥️ 並び替えた商品を表示
selectedItems.forEach((item, index) => {
  console.log(`${index}. ${item.name} - $${item.price}`);
});

// 🔁 高い順に並び替えるには reverse を使います
console.log("高い順:", selectedItems.reverse());

// ❌ 最後と最初の商品を削除（pop, shift）
selectedItems.pop(); // 最後
selectedItems.shift(); // 最初

// ✏️ 特定の位置の商品を変更（splice）
selectedItems.splice(0, 1, { name: "Laptop", price: 300, quantity: 2 });

// 🗝️ 配列のインデックスを取得（keys）
for (let index of myCart.keys()) {
  console.log("index:", index);
}

// 🔎 配列の値を取得（values）
for (let item of myCart.values()) {
  console.log("value:", item);
}

// 📅 翌日のショッピングで新しい商品を追加（concat）
let newCart = [{ name: "iPad", price: 500 }];
let allItems = myCart.concat(newCart);
console.log("全商品リスト:", allItems);

// 📝 商品名を文字列にまとめる（join）
let allNames = allItems.map((item) => item.name);
console.log("全商品名:", allNames.join(", "));

// 🎉 配列メソッドをフル活用して、カートを管理できました！
// この動画が役に立ったら、👍いいねと📺チャンネル登録をお願いします！
// では、また次回の動画でお会いしましょう！👋