

// // This is called Immediately, and then is GONE
// let F = (()=>  {console.log("Hello from the F IFFE ");return 'hi'}) ()
//
// // This is called later and stays
// // let d = (()=>  {console.log("Hello from a regular function");return 'hi'})
//
// console.log(F)
//
// // let meg = "hello world"
// // let c



// Filter
//
// let ages = [32, 33, 16, 40];
//
// function checkAdult(age) {
//     return age >= 18;
// }
//
// function myFunction() {
//     console.log(`The people in this room who can vote are ages ${ages.filter(checkAdult)}`);
// }
// myFunction()
//


// Maps
// let someArray = [1, 4, 9, 16];
// // pass a function to map
// const map = someArray.map(x => x * 2);
//
// console.log(map);

//
// let listOfFriends = [
//   {
//     name: "tim",
//     age: 27
//   },
//   {
//     name: "tomas",
//     age: 23
//   }
// ]
// // pass a function to map
// const showMyListOfFriend = listOfFriends.map( friend => console.log(
//   `${friend.name} is ${friend.age} years old`
// ) );
//
// showMyListOfFriend()

//
// //
// let superHeros = [
//   ["Batman", "Bruce Wayne"],
//   ["Spiderman", "Peter Parker"],
//   ["Superman", "Clark Kent"],
// ]
// let secretIdentity = superHeros.map(someHero =>
//   console.log(`${someHero[0]} is ${someHero[1]}`)
// )
//
// secretIdentity()



// let superHeros2 = [
//   ["Batman", "Bruce Wayne", "33", "Male"],
//   ["Spiderman", "Peter Parker", "33", "Male"],
//   ["Superman", "Clark Kent", "33", "Male"],
// ]
// let secretIdentity = hero => hero.join(" is ")
// let revealHeros = superHeros2.map(secretIdentity)
// console.log(revealHeros)




//
// var players = [
//   {firstName: "tim", lastName: "Rosenberg", position: 'QB', touchDowns: 12},
//   {firstName: "James", lastName: "Brown", position: 'QB', touchDowns: 22},
//   {firstName: "Tomas", lastName: "Smith", position: 'RB', touchDowns: 32},
//   {firstName: "Eric", lastName: "Flood", position: 'QB', touchDowns: 42},
//   {firstName: "James", lastName: "Sutherland", position: 'RB', touchDowns: 22},
// ]
// // Find the first player named "James"
// console.log(players.find(player => player.firstName ===  "James") )
//
// // Find the FIRST player who has a QB position
// console.log(players.find(player => player.position ===  "QB") )
//
// // Show me ALL players who have a "QB" position
// console.log(players.filter(player => player.position ===  "QB") )
//
// // List all of the last names
// console.log(players.map(player => player.lastName) )
//
// // Show me ALL players who have more than 23 touchDowns
// console.log(players.filter(player => player.touchDowns > 23) )
//
// // Show me ALL touchDowns scores of Running Backs
// console.log(players.filter(player => player.position === 'RB').map(player => player.touchDowns) )
//
//                     // Show me all players who are running backs,     Reduce something to a single value    Add the scores   return an 0 as a default integer
// console.log(players.filter(player => player.position === 'RB').reduce((addThis, player) => addThis + player.touchDowns, 0))
