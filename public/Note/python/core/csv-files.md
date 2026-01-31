---
Title: Working with CSV Files in Python
Description: Learn how to easily read and write CSV files in Python.
---

## Working with CSV Files in Python

Ever seen a spreadsheet? A CSV (Comma-Separated Values) file is basically a simple version of that. It's a plain text file where data is organized in rows, and the values in each row are separated by commas. Super useful for storing data!

Python has a built-in `csv` module that makes working with these files a breeze.

### Reading a CSV File

Imagine you have a file called `friends.csv` with this content:

```csv
Name,Age,City
Alice,16,New York
Bob,17,Los Angeles
Charlie,15,Chicago
```

You can read this file with Python like this:

```python
import csv

with open('friends.csv', 'r') as file:
    csv_reader = csv.reader(file)

    # Skip the header row
    next(csv_reader)

    for row in csv_reader:
        # Each row is a list of strings
        name = row[0]
        age = int(row[1])
        city = row[2]
        print(f'{name} is {age} years old and lives in {city}.')
```

### Reading a CSV File into a Dictionary

Want to make things even easier? You can read each row as a dictionary, where the keys are the column headers.

```python
import csv

with open('friends.csv', 'r') as file:
    csv_reader = csv.DictReader(file)

    for row in csv_reader:
        # Each row is a dictionary
        name = row['Name']
        age = int(row['Age'])
        city = row['City']
        print(f'{name} is {age} years old and lives in {city}.')
```

### Writing to a CSV File

Now, let's say you want to create a new CSV file with some data.

```python
import csv

# The data to write
header = ['Name', 'Grade']
data = [
    ['David', 9],
    ['Emily', 10],
    ['Frank', 9]
]

with open('grades.csv', 'w', newline='') as file:
    csv_writer = csv.writer(file)

    # Write the header
    csv_writer.writerow(header)

    # Write the data
    csv_writer.writerows(data)
```

**Pro Tip:** The `newline=''` is important to prevent blank rows from appearing in your CSV file.

And that's it! Now you can easily handle spreadsheet-like data in your Python projects.

---

> **Next lesson:** [Working with JSON Files](json-files)

---
