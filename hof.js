// let sayHallo = (name) => `Hallo, ${name}`;
// let result = sayHallo("Adi");

// let double = (x) => x * 2;
// let doubleResult = double(4);

// let Auth = (allowed) => (allowed ? "Access Granted" : "Access Denied");
// let resultAuth1 = Auth(true);
// let resultAuth2 = Auth(false);

// console.log(resultAuth1);
// console.log(resultAuth2);
// console.log(result);
// console.log(doubleResult);

// //For Standar
// const bornYears = [1990, 1992, 1993, 1994, 1995];
// const convertedToold = [];

// for (let i = 0; i < bornYears.length; i++) {
//   convertedToold.push(new Date().getFullYear() - bornYears[i]);
// }

// document.write(convertedToold + "<br><br>");

// //Map
// const convertedTooldMap = bornYears.map(
//   (bornYear) => new Date().getFullYear() - bornYear
// );

// document.write("<br>" + convertedTooldMap);

// //Filter with For
// const peoples = [
//   { name: "Andi", age: 31 },
//   { name: "Adi", age: 21 },
//   { name: "Rafel", age: 17 },
//   { name: "Mesra", age: 16 },
//   { name: "Fadhil", age: 28 },
//   { name: "Oji", age: 25 },
//   { name: "Tri", age: 15 },
// ];

// const authorization = [];

// for (let i = 0; i < peoples.length; i++) {
//   if (peoples[i].age <= 21) {
//     authorization.push(peoples[i].name);
//   }
// }

// document.write("<br><br>" + authorization + "<br><br>");

// //Filter with HOF Filter
// data = peoples.filter((person) => person.age >= 21);

// document.write(data.map((person) => person.name));

// //Reduce with For
// const cart = [
//   { product: "Indomie Goreng", price: 2500 },
//   { product: "Indomie Rebus", price: 2000 },
//   { product: "Indomie Rendang", price: 3000 },
// ];

// let subTotal = 0;
// for (let i = 0; i < cart.length; i++) {
//   subTotal += cart[i].price;
// }

// document.write(`<br><br>Rp. ${subTotal}`);

// //Reduce with HOF
// const subTotalReduce = cart.reduce(
//   (accumation, currentProd) => accumation + currentProd.price,
//   0
// );
// document.write(`<br><br>Rp. ${subTotalReduce}`);

// const message = function () {
//   alert("This is message can show after 5 seconds");
// };

// //Syncronus
// console.log(message);

// //Asyncronus
// setTimeout(message, 5000);

// let temp = [2, 3, 5, 6];

// function myCallBack(params) {
//   return params + 1;
// }

// // let resultTemp = temp.map(function (data) {
// //   console.log(data);
// // });

// document.write("<br><br>" + temp.map(myCallBack));

// setTimeout(function () {
//   alert("Hello is show after 10 seconds");
// }, 10000);

// setTimeout(() => {
//   alert("Hello is show after 15 seconds");
// }, 15000);

//Asyncronus
function Pelari1() {
  setTimeout(function () {
    console.log("Pelari 1 Finis");
  }, 2000);
}

function Pelari2() {
  setTimeout(function () {
    console.log("Pelari 2 Finis");
  }, 3000);
}

function Pelari3() {
  setTimeout(function () {
    console.log("Pelari 3 Finis");
  }, 4000);
}

function Pelari4() {
  setTimeout(function () {
    console.log("Pelari 4 Finis");
  }, 5000);
}

//Syncronus
// function Pelari1() {
//   console.log("Pelari 1 Finis");
// }

// function Pelari2() {
//   console.log("Pelari 2 Finis");
// }

// function Pelari3() {
//   console.log("Pelari 3 Finis");
// }

// function Pelari4() {
//   console.log("Pelari 4 Finis");
// }

Pelari1();
Pelari2();
Pelari3();
Pelari4();
