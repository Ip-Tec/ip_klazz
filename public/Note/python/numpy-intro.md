# Introduction to NumPy

## What is NumPy?

**NumPy (Numerical Python)** is the fundamental package for scientific computing in Python. It provides a powerful object called the **N-dimensional array** (**ndarray**), which is a grid of values of the same type.

NumPy arrays are significantly more efficient, faster, and more convenient than regular Python lists for numerical operations.

### Why Use NumPy?

- **Performance:** NumPy operations are implemented in C, making them much faster than equivalent operations on Python lists.
- **Functionality:** It provides a vast library of high-level mathematical functions to operate on these arrays.
- **Memory Efficiency:** NumPy arrays take up less space in memory than Python lists.

### Installation

First, you need to install NumPy using pip:

```bash
pip install numpy
```

By convention, NumPy is imported with the alias **np**.

```python
import numpy as np
```

## The NumPy **ndarray**

The core of NumPy is the **ndarray** object.

### Creating Arrays

- **From a Python list:**

    ```python
    # Create a 1D array
    a = np.array([1, 2, 3, 4, 5])
    print(a)

    # Create a 2D array (a matrix)
    b = np.array([[1, 2, 3], [4, 5, 6]])
    print(b)
    ```

- **Using built-in functions:**

    ```python
    # Create an array of zeros
    zeros = np.zeros((2, 3)) # A 2x3 matrix of zeros

    # Create an array of ones
    ones = np.ones((3, 2)) # A 3x2 matrix of ones

    # Create an array with a range of elements
    c = np.arange(0, 10, 2) # Start, stop (exclusive), step
    print(c) # [0 2 4 6 8]

    # Create an array of random values
    rand_arr = np.random.rand(2, 2) # 2x2 matrix of random values between 0 and 1
    ```

### Array Attributes

- **shape**: The dimensions of the array (a tuple).
- **ndim**: The number of dimensions.
- **size**: The total number of elements.
- **dtype**: The data type of the elements.

```python
b = np.array([[1, 2, 3], [4, 5, 6]])

print(f"Shape: {b.shape}") # (2, 3)
print(f"Dimensions: {b.ndim}") # 2
print(f"Size: {b.size}")     # 6
print(f"Data type: {b.dtype}") # int32 (may vary)
```

## Array Operations

NumPy allows you to perform element-wise operations, which is extremely powerful.

### Basic Arithmetic

```python
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# Element-wise addition
print(a + b) # [5 7 9]

# Element-wise multiplication
print(a * 2) # [2 4 6]

# This is much more concise than using a for loop with Python lists!
```

### Universal Functions (ufunc)

NumPy provides many mathematical functions that operate element-wise on arrays.

```python
arr = np.array([0, np.pi/2, np.pi])

print(np.sin(arr)) # Calculates the sine of each element
print(np.sqrt(np.array([1, 4, 9]))) # [1. 2. 3.]
```

## Indexing and Slicing

Indexing and slicing in NumPy are similar to Python lists but can be done across multiple dimensions.

### 1D Arrays

```python
a = np.array([10, 20, 30, 40, 50])

print(a[0])    # 10
print(a[1:4])  # [20 30 40]
```

### 2D Arrays

```python
mat = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

# Get a single element (row, column)
print(mat[1, 2]) # 6

# Get a row
print(mat[0, :]) # [1 2 3]

# Get a column
print(mat[:, 1]) # [2 5 8]

# Get a sub-matrix
print(mat[:2, 1:])
# [[2 3]
#  [5 6]]
```

### Boolean Indexing

You can use boolean conditions to filter an array.

```python
arr = np.array([1, 2, 3, 4, 5, 6])

# Find all elements greater than 3
condition = arr > 3
print(condition) # [False False False  True  True  True]

print(arr[condition]) # [4 5 6]

# You can also do it in one line
print(arr[arr > 3])
```

## Key Takeaways

- NumPy is the cornerstone of numerical and scientific computing in Python.
- The **ndarray** is a fast and memory-efficient array object.
- NumPy allows for powerful **element-wise** operations, avoiding slow Python loops.
- Indexing and slicing are powerful, especially for multi-dimensional arrays.
- Boolean indexing provides a simple way to filter data.

## Practice Exercises

1. **Array Creation**: Create a 3x3 NumPy array containing the numbers 1 through 9.
2. **Array Operation**: Create two 1D arrays, **a = [1, 2, 3]** and **b = [4, 5, 6]**. Compute their dot product.
3. **Filtering**: Create a 1D array of numbers from 1 to 10. Select and print only the even numbers using boolean indexing.

---

## Solutions

```python
import numpy as np

# Exercise 1: Array Creation
arr_1_to_9 = np.arange(1, 10).reshape(3, 3)
print("3x3 Array of 1-9:")
print(arr_1_to_9)

print("-"*20)

# Exercise 2: Dot Product
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# The dot product is (1*4 + 2*5 + 3*6)
dot_product = np.dot(a, b)
print(f"Dot product of {a} and {b} is: {dot_product}")

print("-"*20)

# Exercise 3: Filtering
arr_1_to_10 = np.arange(1, 11)
even_numbers = arr_1_to_10[arr_1_to_10 % 2 == 0]

print(f"Even numbers from {arr_1_to_10}: {even_numbers}")

```

---

> **Next lesson:** [Introduction to Pandas](pandas-intro)

---
