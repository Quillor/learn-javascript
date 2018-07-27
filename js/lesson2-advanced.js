
// ### Shadowing Scope
// let name = "Global variable"
// function outer() {
//   let name = "Outer variable"
//   function inner() {
//     let name = "Inner variable"
//     console.log(name)
//   }
//   console.log(name)
//   inner()
// }
// outer()
// console.log(name)


// Scope
// function outer() {
//
//   let a = "Bird scooter"
//   let b = {
//     type:   "Fiat",
//     model:  "500",
//     color:  "white"
//   }
//   console.log(`First: I ride a ${a} and a ${b.type}`)
//
//   function inner(a, b) {
//     console.log(`Second: I ride a ${a} and a ${b.type}`)
//      a = "Razor scooter"
//      b = 4
//     console.log(`Lastly, I ride a ${b} ${a}s `)
//   }
//   inner(a, b)
//
// }
// outer()

// // Hoisting
// function outer() {
//    let a = "hello"
//    inner = function () {
//      console.log("Inner function called")
//    }
// }
//
// outer()
//
// // This can be called, because the outer() function has "hoisted" inner() to
// // the global scope
// inner()




slideShow = {
  photoList: ["1.pet.png", "2.selfie.png", "3.mountain.png"],
  currentPhotoIndex: 0,
  nextPhoto: function () {
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

// console.log( `First, I have a photo of my ${slideShow.getCurrentPhoto()}` );
slideShow.getCurrentPhoto()
slideShow.nextPhoto()
slideShow.prevPhoto()
slideShow.nextPhoto()
