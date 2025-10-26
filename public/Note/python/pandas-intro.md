# Introduction to Pandas

## What is Pandas?

**Pandas** is a fast, powerful, and easy-to-use open-source data analysis and manipulation tool, built on top of the NumPy library. It is the most popular library in the Python data science ecosystem.

Pandas introduces two primary data structures:

1. **Series**: A one-dimensional labeled array, like a single column in a spreadsheet.
2. **DataFrame**: A two-dimensional labeled data structure with columns of potentially different types, like a full spreadsheet or an SQL table.

### Installation

First, you need to install Pandas using pip:

```bash
pip install pandas
```

By convention, Pandas is imported with the alias **pd**.

```python
import pandas as pd
```

## The Pandas **Series**

A **Series** is a one-dimensional array-like object containing a sequence of values and an associated array of data labels, called its **index**.

```python
# Creating a Series from a list
data = [10, 20, 30, 40]
labels = ['a', 'b', 'c', 'd']

s = pd.Series(data, index=labels)
print(s)
```

**Output:**

```
a    10
b    20
c    30
d    40
dtype: int64
```

You can access items by their label:
**print(s['b']) # Output: 20**

## The Pandas **DataFrame**

A **DataFrame** is the workhorse of Pandas. It represents a rectangular table of data and contains an ordered collection of columns.

### Creating a DataFrame

You can create a DataFrame from many different sources, but a common way is from a dictionary of lists.

```python
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'Age': [25, 30, 35, 28],
    'City': ['New York', 'Los Angeles', 'Chicago', 'Houston']
}

df = pd.DataFrame(data)
print(df)
```

**Output:**

```
      Name  Age         City
0    Alice   25     New York
1      Bob   30  Los Angeles
2  Charlie   35      Chicago
3    Diana   28      Houston
```

## Essential DataFrame Operations

### Viewing Data

- **df.head(n)**: View the first **n** rows (default is 5).
- **df.tail(n)**: View the last **n** rows.
- **df.info()**: Get a concise summary of the DataFrame (column types, non-null values).
- **df.describe()**: Get descriptive statistics for numerical columns (mean, std, etc.).

```python
print(df.head(2))
print(df.info())
```

### Selecting Data

- **Selecting a column:**

    ```python
    # Returns a Series
    ages = df['Age']
    print(ages)
    ```

- **Selecting multiple columns:**

    ```python
    # Returns a DataFrame
    name_and_city = df[['Name', 'City']]
    print(name_and_city)
    ```

- **Selecting rows with **loc** and **iloc**:**
  - **df.loc[]**: Selects rows and columns by **label**.
  - **df.iloc[]**: Selects rows and columns by **integer position**.

    ```python
    # Get the row with index 1 (label-based)
    print(df.loc[1])

    # Get the first two rows (integer-based)
    print(df.iloc[0:2])
    ```

### Conditional Filtering

Similar to NumPy, you can use boolean indexing to filter data based on conditions.

```python
# Find everyone older than 30
older_than_30 = df[df['Age'] > 30]
print(older_than_30)
```

### Reading and Writing Data

Pandas makes it incredibly easy to read and write data from various formats, especially CSV.

- **Reading a CSV file:**

    ```python
    # Assume we have a file named 'data.csv'
    # df_from_csv = pd.read_csv('data.csv')
    ```

- **Writing to a CSV file:**

    ```python
    # Write the DataFrame to a new CSV file
    df.to_csv('my_output.csv', index=False) # index=False prevents writing the row numbers
    ```

## Key Takeaways

- Pandas is the essential tool for data analysis and manipulation in Python.
- The **Series** is a 1D labeled array.
- The **DataFrame** is a 2D labeled table, like a spreadsheet.
- Pandas provides powerful tools for viewing, selecting, and filtering data.
- It excels at reading and writing data from formats like CSV.

## Practice Exercises

1. **Create a DataFrame**: Create a DataFrame of 3 students with columns for **Name**, **Score**, and **Major**.
2. **Read Data**: Create a simple CSV file named **students.csv** with the data from exercise 1. Write a script to read this CSV into a new DataFrame.
3. **Filtering Data**: From the DataFrame you created, select only the students who have a score greater than 90.

---

## Solutions

```python
import pandas as pd

# Exercise 1: Create a DataFrame
student_data = {
    'Name': ['Frank', 'Grace', 'Heidi'],
    'Score': [85, 92, 88],
    'Major': ['CompSci', 'Physics', 'Art']
}
df_students = pd.DataFrame(student_data)
print("Student DataFrame:")
print(df_students)

print("-"*20)

# Exercise 2: Read Data
# First, create the CSV file
df_students.to_csv("students.csv", index=False)

# Now, read it back
df_from_csv = pd.read_csv("students.csv")
print("DataFrame read from students.csv:")
print(df_from_csv)

print("-"*20)

# Exercise 3: Filtering Data
# Let's add another student to make the filter interesting
df_students.loc[3] = ['Ivan', 95, 'Math']

high_scorers = df_students[df_students['Score'] > 90]
print("Students with scores > 90:")
print(high_scorers)

```

---

> **Next lesson:** [Introduction to Matplotlib](matplotlib-intro)

---
