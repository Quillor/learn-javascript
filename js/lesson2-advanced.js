
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

//
//
// // This works
// slideShow = {
//   photoList: ["1.pet.png", "2.selfie.png", "3.mountain.png"],
//   currentPhotoIndex: 0,
//   nextPhoto: function () {
//     this.currentPhotoIndex++
//     console.log("The photo has moved up to " + this.photoList[this.currentPhotoIndex]);
//   },
//   prevPhoto: function () {
//     this.currentPhotoIndex--
//     console.log("The photo has moved back to " +  this.photoList[this.currentPhotoIndex]);
//   },
//   getCurrentPhoto: function () {
//     console.log("The photo is currently " + this.photoList[this.currentPhotoIndex])
//   }
// }
//
// // console.log( `First, I have a photo of my ${slideShow.getCurrentPhoto()}` );
// slideShow.getCurrentPhoto()
// slideShow.nextPhoto()
// slideShow.prevPhoto()
// slideShow.nextPhoto()




// Create a slideshow
let slideShow = {

  element: null,
  // I have a list of photos
  photoList: [
    "img/avatar-sample-1.png",
    "img/avatar-sample-2.png",
    "img/avatar-sample-3.png"
  ],

  // The list of photos starts at the beginning of the list
  currentPhotoIndex: 0,
  // Go to the next photo in the list

                        // By default, the next photo will increment by 1 photo,
                        // unless specified
  nextPhoto: function ( increments = 1 ) {
    // Loop for the number of increment
    let photoLength = this.photoList.length - 1
    for (var i = 0; i < increments ; i++) {
      // if you reach the end of the list:
      if (this.currentPhotoIndex === photoLength){
        // Go back to the beginning of the list
        this.currentPhotoIndex = 0
        console.log("The photo has moved up to " + this.photoList[this.currentPhotoIndex]);
      }
      else{
        // Move the photo to the next photo in the sequence
        this.currentPhotoIndex++
        // that you have reached the next photo
        console.log("The photo has moved up to " + this.photoList[this.currentPhotoIndex]);
      }
    }
    this.element.setAttribute("src", this.getCurrentPhoto() )
  },
  
  prevPhoto: function ( increments = 1 ) {
    // Loop for the number of increment
    // TODO: How can I move this:
    let photoLength = this.photoList.length - 1
    for (var i = 0; i < increments ; i++) {
      // if you reach the end of the list:
      if (this.currentPhotoIndex === 0){
        // Go back to the beginning of the list
        this.currentPhotoIndex = photoLength
        console.log("The photo has moved to the top at " + this.photoList[this.currentPhotoIndex]);
      }
      else{
        // Move the photo to the next photo in the sequence
        this.currentPhotoIndex--
        // that you have reached the next photo
        console.log("The photo has moved down to " + this.photoList[this.currentPhotoIndex]);
      }

    }
    this.element.setAttribute("src", this.getCurrentPhoto() )
  },

  getCurrentPhoto: function () {

    console.log("The photo is currently " + this.photoList[this.currentPhotoIndex])
    return this.photoList[this.currentPhotoIndex]
  }
}
slideShow.element = document.getElementById("sliderImage")



// console.log( `First, I have a photo of my ${slideShow.getCurrentPhoto()}` );
slideShow.getCurrentPhoto()
slideShow.nextPhoto(2)
slideShow.prevPhoto(2)
