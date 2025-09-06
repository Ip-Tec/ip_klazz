

# **Day 9: Arrays (Creation, Methods, Iteration, Higher-Order Methods)**

---

## **1. What is an Array?**

An **array** is a special data type in JavaScript used to store **multiple values in a single variable**.
👉 Arrays are **ordered, index-based (start from 0)**, and can store **different data types**.

```js
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple
console.log(fruits[2]); // Mango
```

---

## **2. Creating Arrays**

### 1. Array Literals (Most Common)

```js
let numbers = [1, 2, 3, 4, 5];
```

### 2. Using the **Array** Constructor

```js
let cars = new Array("Toyota", "Honda", "BMW");
```

### 3. Empty Array + Add Later

```js
let colors = [];
colors[0] = "Red";
colors[1] = "Blue";
```

---

## **3. Common Array Methods**

### 🔹 Adding & Removing Elements

```js
let fruits = ["Apple", "Banana"];

// Add at the end
fruits.push("Orange"); 
console.log(fruits); // ["Apple", "Banana", "Orange"]

// Remove from the end
fruits.pop(); 
console.log(fruits); // ["Apple", "Banana"]

// Add at the beginning
fruits.unshift("Mango"); 
console.log(fruits); // ["Mango", "Apple", "Banana"]

// Remove from the beginning
fruits.shift(); 
console.log(fruits); // ["Apple", "Banana"]
```

### 🔹 Other Useful Methods

```js
let nums = [1, 2, 3, 4, 5];

// Length
console.log(nums.length); // 5

// Index of element
console.log(nums.indexOf(3)); // 2

// Slice (copy part of array)
console.log(nums.slice(1, 4)); // [2, 3, 4]

// Splice (add/remove elements)
nums.splice(2, 1, 99); 
console.log(nums); // [1, 2, 99, 4, 5]

// Join (array to string)
console.log(nums.join("-")); // "1-2-99-4-5"
```

---

## **4. Iterating Over Arrays**

### 🔹 For Loop

```js
let fruits = ["Apple", "Banana", "Mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

### 🔹 For…of

```js
for (let fruit of fruits) {
  console.log(fruit);
}
```

### 🔹 forEach()

```js
fruits.forEach(function(fruit, index) {
  console.log(index + ": " + fruit);
});
```

---

## **5. Higher-Order Array Methods (**map**, **filter**, **reduce**)**

Higher-order methods allow us to **process arrays in powerful ways** without writing manual loops.

---

### 🔹 **map()** → Transform Each Element

Creates a **new array** by applying a function to each element.

```js
let numbers = [1, 2, 3, 4];
let squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9, 16]
```

---

### 🔹 **filter()** → Keep Certain Elements

Creates a **new array** with only elements that pass a condition.

```js
let ages = [12, 17, 20, 25, 30];
let adults = ages.filter(age => age >= 18);
console.log(adults); // [20, 25, 30]
```

---

### 🔹 **reduce()** → Combine Elements into One Value

Executes a reducer function on each element, returning a **single value**.

```js
let nums = [10, 20, 30, 40];
let total = nums.reduce((acc, curr) => acc + curr, 0);
console.log(total); // 100
```

---

### 🔹 Combining Them

```js
let numbers = [1, 2, 3, 4, 5, 6];

// Square only even numbers and sum them
let result = numbers
  .filter(num => num % 2 === 0)  // [2, 4, 6]
  .map(num => num * num)         // [4, 16, 36]
  .reduce((acc, curr) => acc + curr, 0); // 56

console.log(result);
```

---

## **6. Example Program**

```js
let scores = [45, 67, 89, 34, 90];

// Find average score using reduce
let total = scores.reduce((acc, curr) => acc + curr, 0);
let average = total / scores.length;
console.log("Average Score: " + average);
```

---

## **7. Classwork**

1. Create an array of 5 favorite foods and print each using **forEach()**.
2. Use **map()** to convert an array of numbers into their cubes.
3. Use **filter()** to extract numbers greater than 50 from **[10, 45, 67, 89, 34]**.
4. Use **reduce()** to multiply all numbers in **[2, 3, 4]**.

---

## **8. Assignment**

1. Create a program that takes an array of names and uses **map()** to return them in uppercase.
2. Write a function that filters out odd numbers from **[12, 5, 8, 130, 44]**.
3. Use **reduce()** to find the maximum number in **[3, 67, 15, 89, 45]**.
4. Combine **filter()**, **map()**, and **reduce()** to:

   * Take **[1, 2, 3, 4, 5, 6, 7, 8, 9]**
   * Keep only odd numbers
   * Square them
   * Find the total sum.

