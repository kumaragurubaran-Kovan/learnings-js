//Conditions

//If Else Condition
let age = 18;
let text = "Hello Driver!";

if (age >= 18) {
  text = "You can drive!";
}
else{
    text = "Dont Drive!";
}

console.log(text);

//Ternary Condition
let price = 10;
let isMember = true;
let discount = isMember ? 0.2 : 0;
let total = 10 - (price * discount)
console.log(total);

//Switch Condition
let x=1;
let c;
for (let i = 0; i <= x; i++)
switch(i)
{ case 1: 
  c='Hello'
  break; 
  
  default:
  c='Bye'
  break; }
console.log(c)

// Logical Nullish
let x;
let y="5";
if (x==y){
    console.log('true')
}
else {
    console.log('false')
}

console.log(x?? true)

//for
const cars = ["Fiat", "Audi"];

let list = "";
for (let i = 0; i < cars.length; i++) {
  list += cars[i] + "\n";
}
console.log(list)

//while
let text = "";

let i = 0;
while (i < 10) {
  text += "The number is " + i + "\n";
  i++;
}

console.log(text)

//do while
let text = "";

let i = 0;
do {
  text += "The number is " + i +"\n";
  i++;
}
while (i < 10);

console.log(text)

//for in
const person = {fname:"John", lname:"Doe", age:25};

let text1 = "";
for (let x in person) {
  text1 += person[x] + " ";
}
console.log(text1)

//for of
const person = ["John","Doe"];

let text1 = "";
for (let x of person) {
  text1 += x + " ";
}
console.log(text1)

//function
function add(a, b) {
  return a+b;
}

let c = add(2,2)
console.log(c)

//Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

let text = person;

console.log(text.name + " " + text.city)

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
  this.p3= p1; 
  this.p4=p2;
  this.p5 = p1 + p2
}
const value = new Number(68, 7);
console.log(value["p5"]);

// event listener

console. log("Start");

document.getElementById("btn")
.addEventListener("click", function cb() {
console. log("Callback");
})
console.log("End");

//higher order function

const radius = [3, 1, 2, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const cicumference = function (radius) {
  return 2 * Math.PI * radius;

};

const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius. length; i++) {
  output.push(logic(radius[i]));
  }
  return output;
};

console. log(calculate(radius, area));
console. log(calculate(radius, cicumference));
console. log(calculate(radius, diameter));


const diameter = function (radius) {
return 2 * radius;
};

//map
Array.prototype. calculate = function (logic) {
const output = [];
for (let i = 0; i < this. length; i++) {
output.push(loghic(this [i]));
}
return output;
};
console. log(radius.map(area));

console. log(radius.calculate(area));
