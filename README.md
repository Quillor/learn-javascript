# learn-javascript

http://girldevelopit.github.io/gdi-featured-js-intro


# Operators
`&&` AND   
`||` OR  


# Functions
``` Js
function functionName (username) {
  alert("Hi " +  username)
}
functionName("Tim");

```

# Loops
## For Loops:
```js

```


# Array
```JS
StarbucksFavoriteThings = ["Walks", "Chicken"];
```


# Objects
```js
var doggo = {
  name: "Starbuck",
  breed: "Collie",
  weight: 140
}

var recipe = {
  recipeTitle = "American Pie",
  servings = 3,
  ingredients = [
    "Pie Crust",
    "Apple Slices",

  ],
  directions = "Make pie and then bake it",
}

```


# Methods
Methods are functions within an object
``` JS
var recipe = {
  recipeTitle = "American Pie",
  servings = 3,
  ingredients = [
    "Pie Crust",
    "Apple Slices",

  ],
  letCooks = function makeThePie(pie) {
    alert("Make the " this.recipeTitle + " " pie)
  }
  directions = "Make pie and then bake it",
}
recipe.letCooks("Apple");

```
