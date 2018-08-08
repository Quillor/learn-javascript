// class Student {
//   constructor(name){
//     this.name = name
//   }
//   greet(){
//     console.log(`Hello ${this.name}`)
//   }
// }

let particles = []
let gravity = 0.5
let time = 0



class Particle {
  constructor(startX, startY){
    this.x = startX
    this.y = startY
    this.velocity = {x:0, y:0}
  }
}

extends class Particle

for (let i = 0; i < 100; i++) {
  particles.push(new Particle(i, Math.random()*500 ))
}

console.log(particles)


document.write(`particles`);
