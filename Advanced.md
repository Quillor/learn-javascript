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
