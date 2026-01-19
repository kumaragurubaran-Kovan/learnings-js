// Logical Nullish
let x;
let y = "5";
if (x == y) {
    console.log('true')
}
else {
    console.log('false')
}

console.log(x ?? true)
