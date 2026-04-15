console.log(a); //undefined
var a = "Shanu";
console.log(a); //Shanu
// console.log(b); //!ReferenceError: Cannot access 'b' before initialization
let b = "Bharati";
console.log(b); //Bharati
// console.log(c); //!ReferenceError: Cannot access 'b' before initialization
const c = "Chinese";
console.log(c);

if (true) {
  var a = "Mala";
  console.log(a);
  var d = 10;
  console.log(d);
  let e = 15;
  console.log(e);
  const f = "Andrew Flintoff";
  console.log(f);
}
console.log(d);
// console.log(e); //! Uncaught ReferenceError: e is not defined
// console.log(f); //! Uncaught ReferenceError: e is not defined
// console.log(a);
console.log(a);
