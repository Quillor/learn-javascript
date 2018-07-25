# Javascript ES 5

## Let vs Var
Let is used when you need a local scope.
```JS
// People know me as Tim
var name = "Tim"
```

```JS
// Locally, I'm known as Timmy.
let name = "Timmmy"
```
`var` is useful for global scope.


## Arrow Functions
```JS
// This is the old way of writing a function
let a = function () {
  console.log("hi")
}

// This is the new way
let b = () => {
  console.log("hi")
}
```
## Immediately Invoked Function Expression (IIFE)

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.


The function becomes a function expression which is immediately executed. The variable within the expression can not be accessed from outside it.

```JS
(function () {
    var aName = "Barry";
})();
// Variable name is not accessible from the outside scope // throws "Uncaught ReferenceError: aName is not defined"

```
Assigning the IIFE to a variable stores the function's result, not the function itself.

```JS

var result = (function () {
    var name = "Barry";
    return name;
})();
// Immediately creates the output:
result; // "Barry"
```


## Higher Order Functions
A function that accepts another function as a parameter.

```JS

```


## Functions as Objects
```JS
function add(a,b) {
  return a * b
}

var calculator = {
  add: function add(a,b) {
    return a + b
  },
  multiply: function add(a,b) {
    return a * b
  },   
}

console.log(calculator.add(1,2))

```



## Functions as an Array
```JS
function add(a,b) {
  return a * b
}

var calculatorArray =  [
  add: function add(a,b) {
    return a + b
  },
  multiply: function add(a,b) {
    return a * b
  },  
];

console.log(calculator[1])

```


## Look up tables
```JS

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
```
