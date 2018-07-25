

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


// Define a list of options
let hands = [ "rock", "paper", "scissors" ]

// Create an object table of outcomes to define who wins
let wins = {
  scissors: "paper",
  rock: "scissors",
  paper: "rock"
}

// Randomly pick an option
let getHand = () => {
  let h = parseInt(Math.random()*10)%3
  return hands[h]
}

// Define your players
let p1 = {
  name: "Tim",
  getHand: getHand
}
let p2 = {
  name: "Kevin",
  getHand: getHand
}

//
let playRound = (p1, p2) => {
  let p1h = p1.getHand()
  let p2h = p2.getHand()
  let winsValue = wins[p1h];
  console.log(`${p1.name} choose ${p1h} and ${p2.name} choose ${p2h} ` )

  if (p1h == p2h){

    return playRound(p1, p2)
    console.log("It is a tie! Let's play again.")
  }
  else if (winsValue == p2h){
    return p1
  }
  else {
    return p2
  }
}

let playGame = (p1 , p2, winCount ) => {
  let p1Count = 0
  let p2Count = 0
  let winner = false
  let checkEndGame = (a, winCount) => {
    if (a == winCount){
      winner = true
    }
  }

  while(!winner){
    let w = playRound(p1, p2)
    if (w == p1 ){
      p1Count += 1
      checkEndGame(p1Count, winCount)
      console.log(`${p1.name} won this round`)
    } else {
      p2Count += 1
      checkEndGame(p2Count, winCount)
      console.log(`${p2.name} won this round`)
    }
  }

  if (p1Count > p2Count){
    console.log(`${p1.name} wins the game!`)
  } else {
    console.log(`${p2.name} wins the game!`)
  }

}

playGame(p1, p2, 5)
