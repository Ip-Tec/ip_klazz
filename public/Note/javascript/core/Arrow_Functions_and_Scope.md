# **Day 8: Arrow Functions, Scope, and Closures**

---

## **1. Arrow Functions**

Arrow functions are a **concise way** to write functions introduced in ES6.

### **Syntax**

```js
const functionName = (parameters) => expression;
```

### **Examples**

```js
// Single parameter, single expression
const square = x => x * x;
console.log(square(5)); // 25

// Multiple parameters
const add = (a, b) => a + b;
console.log(add(3, 7)); // 10

// Block body with multiple statements
const greet = (name) => {
  let message = `Hello, ${name}!`;
  console.log(message);
};
greet("Peter"); // Hello, Peter!
```

**Notes:**

* Arrow functions **do not have their own 'this'**.
* Best for small, simple functions, especially callbacks.

---

## **2. Scope**

Scope determines **where a variable is accessible** in your code.

### **Types of Scope**

1. **Global Scope**

   * Declared outside any function or block.
   * Accessible anywhere in the code.

   ```js
   let globalVar = "I am global";

   function showVar() {
     console.log(globalVar);
   }

   showVar(); // "I am global"
   console.log(globalVar); // "I am global"
   ```

2. **Function Scope (Local Scope)**

   * Variables declared inside a function are only accessible **inside that function**.

   ```js
   function localExample() {
     let localVar = "I am local";
     console.log(localVar); // Works
   }

   localExample();
   // console.log(localVar); // ❌ Error: localVar is not defined
   ```

3. **Block Scope**

   * 'let' and 'const' are block-scoped (inside '{}').

   ```js
   {
     let blockVar = "Block scoped";
     console.log(blockVar); // Works
   }
   // console.log(blockVar); // ❌ Error
   ```

---

## **3. Closures**

A **closure** occurs when a function **remembers the variables from its outer scope**, even after that outer function has finished execution.

### **Example**

```js
function outer() {
  let outerVar = "I am outside!";

  function inner() {
    console.log(outerVar);
  }

  return inner;
}

const innerFunc = outer();
innerFunc(); // "I am outside!"
```

**Explanation:**

* 'inner' can access 'outerVar' even after 'outer' has executed.
* Closures are useful for **data privacy** and **maintaining state**.

### **Another Example: Counter**

```js
function counter() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const myCounter = counter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3
```

---

## **4. Example Program Combining Arrow Functions and Closures**

```js
const createGreeter = (greeting) => {
  return (name) => {
    console.log(`${greeting}, ${name}!`);
  };
};

const greetHello = createGreeter("Hello");
greetHello("Peter"); // Hello, Peter!
greetHello("Amaka"); // Hello, Amaka!
```

---

## **5. Classwork**

1. Convert a normal function to an arrow function:

   ```js
   function multiply(a, b) {
     return a * b;
   }
   ```
2. Write a function 'outerFunc()' that declares a variable 'x' and returns an inner function that prints 'x'. Call the inner function.
3. Create a closure that acts as a simple counter.

---

## **6. Assignment**

1. Write an arrow function that takes an array of numbers and returns a new array with each number squared.
2. Explain the difference between 'var', 'let', and 'const' in terms of **scope**.
3. Create a closure function that stores a secret password and returns a function that checks if an input matches the password.

