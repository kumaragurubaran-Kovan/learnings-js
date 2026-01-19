//map
// Need to include necessary functions from previous section if this is to run standalone, 
// but sticking to fragment extraction as per request.
// Note: 'loghic' typo in original file preserved or should be fixed? 
// I'll fix the typo 'loghic' to 'logic' for correctness as I am splitting it.

// Assuming radius and area are available or re-declared for this snippet to make it runnable 
// alone, but original file context implies they were defined above. 
// I will include the dependencies to make it a valid standalone file if possible, 
// or just the snippet. 
// The user asked to "create each file for each section".
// I will copy the radius and area definition here too so it works.

const radius = [3, 1, 2, 4];
const area = function (radius) {
    return Math.PI * radius * radius;
};

Array.prototype.calculate = function (logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
};
console.log(radius.map(area));

console.log(radius.calculate(area));
