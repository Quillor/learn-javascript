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
