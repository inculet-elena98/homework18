// const closure = function () {
//   var a = 4;
//   return () => {
//     return a * 2
//   }
// }
// const displayX = closure()
// console.log(displayX())


// const closure = function () {
//   var a = 4;
//   return () => {
//     return a - 2
//   }
// }
// const displayX = closure()
// console.log(displayX())


// const closure = function () {
//   let a = 3;
//   function displayX() {
//     return a
//   }
//   function changeX(arg) {
//     a = arg
//   }
//   return [displayX, changeX]
// }
// const [displayX, changeX] = closure()
// console.log(displayX())
// changeX(6)
// console.log(displayX())


// const closure = function () {
//   var a = 4;
//   return () => {
//     return a
//   }
// }
// const displayX = closure()
// console.log(displayX())


const closure = function () {
  var a = 4;
  return () => {
    return a + a
  }
}
const displayX = closure()
console.log(displayX())