//8 dom manipulation
// const text = document.querySelector(".title");
// const button = document.querySelector(".button");
const userList = document.querySelector(".name-list");
const listInput = document.querySelector(".input");
const addListBtn = document.querySelector(".add-list");

// button.addEventListener("click", function () {
//   //text.classList.toggle("change")
//   console.log(text.classList);
// });

addListBtn.addEventListener("click", function () {
  // create an li
  const newLi = document.createElement("LI");
  const liContent = document.createTextNode(listInput.value);
  //add input value
  newLi.appendChild(liContent);
  //attach to the user lsit
  userList.appendChild(newLi);
});

// for (user of userList) {
//   user.addEventListener("click", function () {});
// }

// console.log(listInput);
// console.log(text.innerText);
// console.log((text.style.backgroundColor = "red"));
// console.log(button.innerText);

//7 for loop and while loop
// let loading = 0;

// while (loading < 100) {
//   console.log(loading);

//   loading ++;
// }

// const names = ["ed", "jonathan", "henry", "mr man", "caca"]

// for(name of names){
//     if(name === "jonathan"){
//         console.log("fuck yea");
//         break;
//     }else{
//         console.log("loser")

//     }
// }

//6 objects and keyword this

// const user = {
//   name: "edwin",
//   age: 24,
//   married: false,
//   purchases: ["phone", "car", "laptop"],
//   sayName: function(){
//       console.log(this.purchases)
//   }
// };

// function apples(){
//     console.log("apples")
// }

// user.sayName()

//5 arrays

// const cars = ["bmw", "toyota", "honda"]

// console.log(cars.indexOf("toyota"))
// console.log(cars)

//4 if else statment
// const age = 9

// if (age >= 20 || age <= 10) {
//     console.log("you are of age, welcome in!")

// }else{
//     console.log("you are not of age!")

// }

//3 concatenation
// const name = "jonathan"
// const age =  123

// console.log(`My name is ${name} and i am ${age}`)

//2 functions and parameters

// function nameChange(name){

//    console.log( name == "jonathan bleibdrey"? name.toUpperCase() : "Not a Good Person".toLowerCase())
// }

// function add(num1, num2){

//     const total =  num2/num1

//    return total
// }

// console.log("total:", add(10,20))

// nameChange( "jonathan bleibdrey")

// 1 varibales and data

// var life = 100;
// life = life - 20

// var name = "jonathan bleibdrey"

// function checkout(){
//     var checkout = false;
//     if(checkout){
//         return "wow"
//     } else {
//         return "you have nothing"
//     }

// }

// console.log(checkout());
