
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



function outer() {

  let a = "Bird scooter"
  let b = {
    type:   "Fiat",
    model:  "500",
    color:  "white"
  }
  console.log(`First: I ride a ${a} and a ${b.type}`)

  function inner(a, b) {
    console.log(`Second: I ride a ${a} and a ${b.type}`)
     a = "Razor scooter"
     b = 4
    console.log(`Lastly, I ride a ${b} ${a}s `)
  }
  inner(a, b)

}
outer()
