
// Create a slideshow
const image = document.getElementById("sliderImage")
let isSlideShowPlaying = true

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
        image.style.opacity = ".5";
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
slideShow.element = image



// console.log( `First, I have a photo of my ${slideShow.getCurrentPhoto()}` );
slideShow.getCurrentPhoto()
slideShow.nextPhoto(2)
slideShow.prevPhoto(2)

function play() {
  slideShow.nextPhoto(1)
  console.log("Carosel is being played")
}
let slidertime = setInterval(play, 1000);

function pauseSlider() {
  // isSlideShowPlaying = !isSlideShowPlaying
  // {isSlideShowPlaying ? clearInterval(slidertime) : slidertime}
  alert("You pause")
  clearInterval(slidertime);
}
