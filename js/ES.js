

// // Old way of writing fuctions
// let a = function () {
//   console.log("hi")
// }
//
// // This is the new way
// let b = () => {
//   console.log("hi")
// }
// let msg = "Hello world!"
// let say = (msg) => { alert(msg) }
//
// say("Hello NC")
// say()


// function a() {
//   alert("Hi");
// }
//
// let a = () => {
//   alert("Hi");
// }
//
// let add = (a, b) => {
//   return a + b
// }
//
// alert(add(1,2));
//

// function addThese() {
//   var sum = 0
//   for (var i = 0; i < arguments.length; i++){
//       sum += arguments[i]
//   }
//   return sum
// }
//
// alert(addThese(1 , 2, 4))
//
// var billAmount = 100;
//
// let gratuity = () => {
//   return billAmount * .2
// }
// console.log(gratuity())
// console.log(`Your bill amount is $${gratuity(100)} `)
// console.log("Your bill amount is $" + gratuity(100) )
//
// let totalWithGrat = (billAmount) => {
//   return billAmount + gratuity()
// }
// console.log(`Your total bill gratuity is $${totalWithGrat(billAmount)}`)


// ## Objects as fuction

// function add(a,b) {
//   return a * b
// }
//
// var calculator = {
//   add: function add(a,b) {
//     return a + b
//   },
//   multiply: function add(a,b) {
//     return a * b
//   },
// }
//
// console.log(calculator.add(1,2))
// console.log(calculator.multiply(1,2))

//
// function add(a,b) {
//   return a * b
// }
//
// var calculatorArray =  [
//   ["array", "arras"],
//   {name: "tim"},
//   function add(a,b) {
//     return a + b
//   }
// ];
//
// console.log(calculator[2](1,2))

var hands = [
  "rock",
  "paper",
  "scissors"
]

let getHand = () => {
  return parseInt( ( Math.random()* 10 ) % 3 )
}
// Define 2 objects ??

var player1 = {
  name: "Tim",
  getHand: getHand
}
var player2 = {
  name: "Timmy",
  getHand: getHand
}

var beats = {
  scissors: "paper",
  rock: "scissors",
  paper: "rock"
}


let playRound = (player1, player2) => {
  var player1Hand = player1.getHand()
  var player2Hand = player2.getHand()

  if (player1Hand === player2Hand ) {
    alert("It's a tie")
  }
  // This goes to the beats object, and looksup a matching value
  else if(beats[player1Hand] === player2Hand ){
    alert("Player 1 wins!")
  }
  else {
    alert("Player 2 wins!")
  }
}
