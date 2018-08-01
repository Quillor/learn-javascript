# Advanced Javascript

## Shadowing
When a variable can have multiple meanings based on scope.
```JS
let name = "Global variable"
function outer() {
  let name = "Outer variable"
  function inner() {
    let name = "Inner variable"
    console.log(name)
  }
  console.log(name)
  inner()
}
outer()
console.log(name)
```
Console:
``` console
Outer variable
Inner variable
Global variable
```


## Let vs =
```JS
// This is defining a variable
let name

// This is assigning a value to "name"
name = "Tim"

```



## Hoisting
When a local variable get
### this is hoisting
```JS
// Hoisting
function outer() {
   let a = "hello"
   inner = function () {
     console.log("Inner function called")
   }
}

outer()

// This can be called, because the outer() function has "hoisted" inner() to
// the global scope
inner()
```
### this is NOT hoisting
```JS
// Hoisting
function outer() {
   let a = "hello"
   inner = function () {
     console.log("Inner function called")
   }
}
// This can NOT be called, because the outer() function has NOT been called inner()
inner()
```


## Using Objects and functions together

```JS
slideShow = {
  photoList: ["1.pet.png", "2.selfie.png", "3.mountain.png"],
  currentPhotoIndex: 0,
  nextPhoto: function (times) {
    this.currentPhotoIndex++
    console.log("The photo has moved up to " + this.photoList[this.currentPhotoIndex]);
  },
  prevPhoto: function () {
    this.currentPhotoIndex--
    console.log("The photo has moved back to " +  this.photoList[this.currentPhotoIndex]);
  },
  getCurrentPhoto: function () {
    console.log("The photo is currently " + this.photoList[this.currentPhotoIndex])
  }
}
slideShow.getCurrentPhoto()
slideShow.nextPhoto()
slideShow.prevPhoto()
slideShow.nextPhoto()
```

``` console
The photo is currently 1.pet.png
The photo has moved up to 2.selfie.png
The photo has moved back to 1.pet.png
The photo has moved up to 2.selfie.png
```


## IIFE (Immediately invoked function expressions)
Functions that are:
- Immediately called with a () suffix
- Disappear after invoked

```JS
// This is called Immediately, and then is GONE
let f = (()=>  {console.log("Hello from the IFFE ");return 'hi'}) ()

// This is called later and stays
let d = (()=>  {console.log("Hello from a regular function");return 'hi'})

```

# Filter Functions
show all that meet this condition

```JS
var ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}

function myFunction() {
    document.getElementById("demo").innerHTML = ages.filter(checkAdult);
}
```


# Find Function
Find the first one and stop
```JS
// Some find()
```

# Map Function
Loop through a list of items
```JS

let listOfFriends = [
  {
    name: "tim",
    age: 27
  },
  {
    name: "tomas",
    age: 23
  }
]
// pass a function to map
const showMyListOfFriend = listOfFriends.map( friend => console.log(
  `${friend.name} is ${friend.age} years old`
) );

showMyListOfFriend()



// Let's find out who is a super hero
let superHeros = [
  ["Batman", "Bruce Wayne"],
  ["Spiderman", "Peter Parker"],
  ["Superman", "Clark Kent"],
]
let secretIdentity = superHeros.map(someHero =>
  console.log(`${someHero[0]} is ${someHero[1]}`)
)

secretIdentity()
```


## Join Function
Concatenate an array

```JS
// Let's create a list of superheros
let listOfSuperHeros = [
  ["Batman", "Bruce Wayne", "33", "Male"],
  ["Spiderman", "Peter Parker", "33", "Male"],
  ["Superman", "Clark Kent", "33", "Male"],
]
// Concatenate each subarray
let secretIdentity = hero => hero.join(" is ")
// Loop through each parent array
let revealHeros = listOfSuperHeros.map(secretIdentity)
console.log(revealHeros)

```


## Filter, Find , Reduce and Map
Bring it all together

```JS

var players = [
  {firstName: "tim", lastName: "Rosenberg", position: 'QB', touchDowns: 12},
  {firstName: "James", lastName: "Brown", position: 'QB', touchDowns: 22},
  {firstName: "Tomas", lastName: "Smith", position: 'RB', touchDowns: 32},
  {firstName: "Eric", lastName: "Flood", position: 'QB', touchDowns: 42},
  {firstName: "James", lastName: "Sutherland", position: 'RB', touchDowns: 22},
]
// Find the first player named "James"
console.log(players.find(player => player.firstName ===  "James") )

// Find the FIRST player who has a QB position
console.log(players.find(player => player.position ===  "QB") )

// Show me ALL players who have a "QB" position
console.log(players.filter(player => player.position ===  "QB") )

// List all of the last names
console.log(players.map(player => player.lastName) )

// Show me ALL players who have more than 23 touchDowns
console.log(players.filter(player => player.touchDowns > 23) )

// Show me ALL touchDowns scores of Running Backs
console.log(players.filter(player => player.position === 'RB').map(player => player.touchDowns) )

                    // Show me all players who are running backs,     Reduce something to a single value    Add the scores   return an 0 as a default integer
console.log(players.filter(player => player.position === 'RB').reduce((addThis, player) => addThis + player.touchDowns, 0))

```
