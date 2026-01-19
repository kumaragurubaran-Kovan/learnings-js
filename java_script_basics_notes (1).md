**JS**\
\
[07-01-2026]\
\
**JS Variable**\
\


- var  \
  What it is: Function-scoped variable (old JavaScript way).  \
  Tip: Avoid using `var` in modern code due to scope issues.  \
  Example: `var count = 1;`\
  \


- let  \
  What it is: Block-scoped variable whose value can change.  \
  Tip: Use `let` when the value needs to be updated.  \
  Example: `let age = 20; age = 21;`\
  \


- const  \
  What it is: Block-scoped variable whose reference cannot change.  \
  Tip: Always use `const` by default for safer code.  \
  Example: `const name = "Srinithi";`\
  \


- \_  \
  What it is: Valid character used in variable names by convention.  \
  Tip: Used when syntax forces you to accept a value you don’t need.  \
  Example: `const [second] = [10, 20];` XXXX\
  `const [_, second] = [10, 20]; // second = 20`\
  \


- \$  \
  What it is: Valid character often used for DOM or library-related variables.  \
  Tip: Helps quickly identify special-purpose variables.  \
  Example: `const $button = document.querySelector("button");`

---

Difference Between var, let and const  \


| Keyword | Block Scope | Redeclare | Reassign | Hoisted | Binds `this` |
| ------- | ----------- | --------- | -------- | ------- | ------------ |
| var     | No          | Yes       | Yes      | Yes     | Yes          |
| let     | Yes         | No        | Yes      | No      | No           |
| const   | Yes         | No        | No       | No      | No           |

---

Binds `this` — Then vs Now  \


- Then (Old JavaScript)  \
  What it is: `var` variables attached to the global object (`window`).  \
  Tip: Worked only in non‑strict, non‑module browser environments.  \
  Example: `this.name === window.name
  `

  `var name = "DK"; console.log(window.name); // DK`  \


- Now (Modern JavaScript)  \
  What it is: Global variables do NOT attach to `this` in modules or strict mode.  \
  Tip: Do not use `this` to access normal variables.  \
  Example: `this !== window`

  `var name = "DK"; console.log(this.name); // undefined`



**JS Datatype**\
\


- String  \
  What it is: Text data wrapped in quotes.  \
  Tip: Always use quotes for text values.  \
  Example: `const name = "DK";`\
  \


- Number  \
  What it is: Numeric values (integer or decimal).  \
  Tip: No quotes needed for numbers.  \
  Example: `const age = 23;`\
  \


- Boolean  \
  What it is: A value that can be either true or false.  \
  Tip: Booleans are mainly used to control conditions and decisions.  \
  Example: `const isLoggedIn = true;`\
  \


- Logical  \
  What it is: Operators used to combine or invert boolean values.  \
  Tip: Logical operators help build complex conditions.  \
  Example: `isLoggedIn && isAdmin` Operators  \
  Symbols: `&&  ||  !`\


  \
  [08-01-2026]\
  **JS Operators**\
  \


- Arithmetic Operators  \
  Symbols: `+  -  *  /  %  **`\
  \


- Assignment Operators  \
  Symbols: `=  +=  -=  *=  /=  %=  **=`\
  \


- Comparison Operators  \
  Symbols: `==  ===  !=  !==  >  <  >=  <=`\
  \


- Logical Operators  \
  Symbols: `&&  ||  !`\
  \


- Bitwise Operators  \
  Symbols: `&  |  ^  ~  <<  >>  >>>`\
  \


- String Operators  \
  Symbols: `+  +=`\
  \


- Conditional (Ternary) Operator  \
  Symbols: `? :`\
  \


- Type Operators  \
  Symbols: `typeof  instanceof`\
  \


- Unary Operators  \
  Symbols: `+  -  ++  --  !  delete`\
  \


- Spread / Rest Operator  \
  Symbols: `...`



\
**JS Conditional**\
\


- if  \
  What it is: Executes code when a condition is true.  \
  Tip: Use `if` when there is only one condition to check.  \
  Example: `if (age > 18) { access = true; }`\
  \


- if else  \
  What it is: Executes one block if condition is true, another if false.  \
  Tip: Use when you need two clear outcomes.  \
  Example: `if (isLoggedIn) { showHome(); } else { showLogin(); }`\
  \


- Ternary  \
  What it is: Short form of if‑else written in a single line.  \
  Tip: Use only for simple conditions to keep code readable.  \
  Example: `const msg = isAdmin ? "Yes" : "No";`\
  \


- switch  \
  What it is: Executes different code blocks based on matching cases.  \
  Tip: Use `switch` when comparing one value against many options.  \
  Example: `switch(day){ case 1: break; default: break; }`\




- Boolean \
  What it is: A data type that represents true or false values. \
  Tip: Boolean values control program flow and conditions. \
  Example: `const isAdmin = false;` ==, =>,=<, !=\
  \


- Logical AND (&&) \
  What it is: Returns true only if both conditions are true. \
  Tip: Use when multiple conditions must be satisfied. \
  Example: `isLoggedIn && isAdmin`\
  \


- Logical OR (||) \
  What it is: Returns true if at least one condition is true. \
  Tip: Use for fallback or alternative conditions. \
  Example: `isAdmin || isEditor`\
  \


- Logical NOT (!) \
  What it is: Reverses a boolean value. \
  Tip: Commonly used to check false conditions. \
  Example: `!isLoggedIn`\


  \
  \
  **JS Loop**\
  \


- for  \
  What it is: Repeats a block of code a fixed number of times.  \
  Tip: Use when you know how many times to loop.  \
  Example: `for (let i = 0; i < 5; i++) {}`\
  \


- for in  \
  What it is: Loops over keys of an object.  \
  Tip: Best suited for objects, not arrays.  \
  Example: `for (let key in obj) {}`\
  \


- for of  \
  What it is: Loops over values of an iterable (arrays, strings).  \
  Tip: Preferred way to loop through arrays.  \
  Example: `for (let value of arr) {}`\
  \


- while  \
  What it is: Runs code while a condition remains true.  \
  Tip: Use when loop count is not known beforehand.  \
  Example: `while (count < 5) {}`\
  \


- do while  \
  What it is: Executes code once before checking the condition.  \
  Tip: Use when code must run at least once.  \
  Example: `do {} while (count < 5);`\
  \


- break  \
  What it is: Stops the loop immediately.  \
  Tip: Use to exit a loop early when condition is met.  \
  Example: `break;`\
  \


- continue  \
  What it is: Skips the current iteration and moves to next.  \
  Tip: Use to skip unwanted cases inside loops.  \
  Example: `continue;`\




---

[09-01-2026]

**JS Function**\
\


- Function  \
  What it is: A reusable block of code that performs a specific task.  \
  Tip: Use functions to avoid repeating the same code.  \
  Example: `let myFunction = function(a, b) { return a * b; }`\
  \


- Arrow Function  \
  What it is: A shorter syntax for writing functions introduced in ES6.  \
  Tip: Arrow functions do not have their own `this`.  \
  Example: `let myFunction = (a, b) => a * b;`\
  \


- Function Declaration  \
  What it is: A function defined using the `function` keyword.  \
  Tip: Function declarations are hoisted.  \
  Example: `function add(a, b) { return a + b; }`\
  \


- Function Expression  \
  What it is: A function assigned to a variable.  \
  Tip: Function expressions are not hoisted.  \
  Example: `const add = function(a, b) { return a + b; }`\
  \


- Named Function  \
  What it is: A function that has a name.  \
  Tip: Useful for debugging and recursion.  \
  Example: `function multiply(a, b) { return a * b; }`\
  \


- Anonymous Function  \
  What it is: A function without a name.  \
  Tip: Commonly used as callbacks.  \
  Example: `setTimeout(function() {}, 1000);`\
  \


- First Class Function  \
  What it is: Functions treated like values (can be assigned, passed, returned).  \
  Tip: Enables callbacks and higher-order functions.  \
  Example: `const fn = function() {};`\


  \




**JS Object**\
In JavaScript, almost "everything" is an object.

- Objects are objects

- Maths are objects

- Functions are objects

- Dates are objects

- Arrays are objects

- Maps are objects

- Sets are objects\


- Object  \
  What it is: A collection of related data stored as key‑value pairs.  \
  Tip: Use objects to group properties that belong together.  \
  Example: `const user = { name: "DK", age: 23 };`\
  \


- Object Constructor  \
  What it is: A function used as a blueprint to create multiple similar objects.  \
  Tip: Constructor names start with a capital letter and are used with `new`.  \
  Example: `function Person(name){ this.name = name; }`\


- Object accessing

  let age = person.age;

  let age = person["age"];

  let age = person[x];

- Nested Object  \
  What it is: An object that contains another object as its property.  \
  Tip: Use nested objects to represent structured or grouped data.  \
  Example: `const user = { name: "DK", address: { city: "Chennai", pincode: 600001 } };`

  myObj.myCars.car2;

- Object Display  \
  What it is: Ways to show object data in readable form.  \
  Tip: Objects cannot be displayed directly like strings.  \
  Example: `JSON.stringify(user)`


**JS**\
\
[13-01-2026]\
\
**JS Array**\
\


| Method     | What it is                     | Example               |
| ---------- | ------------------------------ | --------------------- |
| Array      | Stores multiple values         | `const arr = [1,2,3]` |
| index      | Element position (starts at 0) | `arr[0]`              |
| length     | Total elements                 | `arr.length`          |
| update     | Change value by index          | `arr[1] = 10`         |
| remove     | Remove element                 | `arr.pop()`           |
| toString() | Convert to string              | `arr.toString()`      |
| at()       | Get element by index           | `arr.at(-1)`          |
| join()     | Join elements                  | `arr.join("-")`       |
| shift()    | Remove first                   | `arr.shift()`         |
| unshift()  | Add at start                   | `arr.unshift(0)`      |
| concat()   | Merge arrays                   | `arr.concat([4,5])`   |
| search     | Find index                     | `arr.indexOf(2)`      |
| find()     | Find matching value            | `arr.find(n > 2)`     |
| sort()     | Sort values                    | `arr.sort()`          |
| reverse()  | Reverse order                  | `arr.reverse()`       |
| min        | Smallest value                 | `Math.min(...arr)`    |
| max        | Largest value                  | `Math.max(...arr)`    |
| map()      | Transform array                | `arr.map(n=>n*2)`     |

**Reference**  \
W3Schools – JavaScript Array Reference: [https://www.w3schools.com/js/js\_array\_reference.asp](https://www.w3schools.com/js/js_array_reference.asp)                                                          |                          |

---

**JS setTimeout**\
\


- setTimeout  \
  What it is: Executes a function once after a specified delay (in milliseconds).  \
  Tip: Delay does not block other code execution.  \
  Example: `setTimeout(() => { console.log("Hello"); }, 1000);`\


---

**JS Asynchronous Execution**\
\


- Asynchronous  \
  What it is: Allows JavaScript to run long tasks in the background without blocking other code.  \
  Tip: Used for timers, API calls, and events.  \
  Example: `setTimeout(() => console.log("Done"), 1000);`\
  \


- async / await  \
  What it is: Syntax used to handle asynchronous operations in a readable way.  \
  Tip: `await` waits for a task to finish without blocking the main thread.  \
  Example: `const data = await fetchData();`

---

**JS Map**\
\


- Map  \
  What it is: A collection of key-value pairs where keys can be of any type.  \
  Tip: Use Map when you need ordered keys and frequent updates.  \
  Example: `const map = new Map([["a", 1], ["b", 2]]);`\
  \


| Method      | What it is                                               | Example                    |
| ----------- | -------------------------------------------------------- | -------------------------- |
| set()       | Adds or updates a key-value pair                         | `map.set("c", 3)`          |
| get()       | Returns the value for a key                              | `map.get("a")`             |
| has()       | Checks if a key exists                                   | `map.has("b")`             |
| delete()    | Removes a key-value pair                                 | `map.delete("a")`          |
| size        | Returns number of entries                                | `map.size`                 |
| clear()     | Removes all entries                                      | `map.clear()`              |
| forEach()   | Iterates over each key-value pair                        | `map.forEach((v,k)=>{})`   |
| entries()   | Returns iterator of [key, value] pairs                   | `map.entries()`            |
| groupBy()   | Groups items into a Map based on callback                | `Map.groupBy(arr, fn)`     |
| **WeakMap** | Key-value collection with object-only keys (weakly held) | `const wm = new WeakMap()` |
| wm.set()    | Stores value using object key                            | `wm.set(obj, "data")`      |
| wm.get()    | Retrieves value for object key                           | `wm.get(obj)`              |
| wm.has()    | Checks if object key exists                              | `wm.has(obj)`              |
| wm.delete() | Removes object key-value pair                            | `wm.delete(obj)`           |

**Reference**  \
W3Schools – JavaScript Map Reference: [https://www.w3schools.com/js/js\_map\_reference.asp](https://www.w3schools.com/js/js_map_reference.asp)



---

**JS Garbage Collection**\
\


- Garbage Collection  \
  What it is: Automatic process of freeing memory by removing unreachable objects.  \
  Tip: Objects with no references are cleaned up automatically.  \
  Example: `obj = null; // eligible for garbage collection`\
  \


- Small Program Example  \
  What it shows: An object becomes unreachable and can be removed from memory.  \
  Example:

  ```js
  let user = { name: "DK" };

  user = null; // object is now unreachable
  // JavaScript garbage collector can free this memory
  ```

---

**JS Iterations**\
\


- Iteration  \
  What it is: Repeating over elements of a collection (array, object, map, etc.).  \
  Tip: Iterations include loops, iterables, iterators, and generators.  \
  Example: `for (let i = 0; i < arr.length; i++) {}`\
  \


### Loops

| Type       | Used for                   | Example                   |
| ---------- | -------------------------- | ------------------------- |
| for        | Known number of iterations | `for (let i=0;i<3;i++){}` |
| while      | Unknown iterations         | `while (x < 5) {}`        |
| do...while | Runs at least once         | `do {} while (x<5);`      |
|            |                            |                           |

### Iterables

- Iterable  \
  What it is: An object that can be looped over using `for...of`.  \
  Tip: Iterables expose values in a sequence.  \
  Example: `for (let v of arr) {}`

| Iterable | Supports for...of |
| -------- | ----------------- |
| Array    | Yes               |
| String   | Yes               |
| Map      | Yes               |
| Object   | No                |

- Small Program Example  \

  ```js
  const arr = [10, 20, 30];

  for (let value of arr) {
    console.log(value);
  }
  ```

\


### Iterators

- Iterator  \
  What it is: An object that provides values one at a time using a `next()` method.  \
  Tip: Iterators follow the `{ value, done }` pattern.  \
  Example: `arr[Symbol.iterator]()`

| Concept  | Description                           |
| -------- | ------------------------------------- |
| Iterator | Object that returns `{ value, done }` |
| next()   | Returns next iteration value          |

- Small Program Example  \

  ```js
  const arr = [1, 2];
  const iterator = arr[Symbol.iterator]();

  console.log(iterator.next()); // { value: 1, done: false }
  console.log(iterator.next()); // { value: 2, done: false }
  console.log(iterator.next()); // { value: undefined, done: true }
  ```

\


### Generators

- Generator  \
  What it is: A function that can pause and resume execution.  \
  Tip: Uses `function*` and `yield`.  \
  Example:
  ```js
  function* gen() {
    yield 1;
    yield 2;
  }
  ```


