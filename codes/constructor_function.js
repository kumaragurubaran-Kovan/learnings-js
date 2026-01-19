// Constructor Function for objects
function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
}

const myFather = new Person("John", "Doe");
let name = "firstName";
console.log("My name is " + myFather["firstName"] + "." + " " + "My name is " + myFather[name] + ".");

delete myFather.firstName
console.log(myFather["firstName"])

function Number(p1, p2) {
    this.p3 = p1;
    this.p4 = p2;
    this.p5 = p1 + p2
}
const value = new Number(68, 7);
console.log(value["p5"]);
