//for in
const person = { fname: "John", lname: "Doe", age: 25 };

let text1 = "";
for (let x in person) {
    text1 += person[x] + " ";
}
console.log(text1)
