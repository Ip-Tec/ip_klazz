# Working with Dates and Times in Python

## Introduction

Handling dates and times is a common requirement in programming, from logging events to scheduling tasks. Python's built-in **datetime** module provides a powerful and easy-to-use set of tools for all date and time-related operations.

## The **datetime** Module

The **datetime** module has several key objects for representing dates and times.

- **datetime.date**: Represents a date (year, month, day).
- **datetime.time**: Represents a time (hour, minute, second, microsecond).
- **datetime.datetime**: Represents a combination of a date and a time.
- **datetime.timedelta**: Represents a duration or the difference between two dates or times.

Let's import the module to get started.

```python
import datetime
```

## The **datetime.datetime** Object

This is the most commonly used object. It contains all the information for a specific point in time.

### Getting the Current Date and Time

```python
# Get the current local date and time
now = datetime.datetime.now()
print(f"Current time: {now}")

# Get the current time in Coordinated Universal Time (UTC)
utc_now = datetime.datetime.utcnow()
print(f"UTC time: {utc_now}")
```

### Creating a Specific **datetime** Object

You can create a **datetime** object by providing the year, month, day, hour, minute, etc.

```python
specific_moment = datetime.datetime(2023, 10, 26, 10, 30, 0)
print(f"Specific moment: {specific_moment}")
```

## Formatting Dates and Times: **strftime()**

Often, you need to display a **datetime** object in a specific string format. The **strftime()** method (string format time) is used for this.

It uses special format codes to specify the output format.

- **%Y**: Year with century (e.g., 2023)
- **%y**: Year without century (e.g., 23)
- **%m**: Month as a zero-padded decimal number (01-12).
- **%B**: Full month name (e.g., October).
- **%b**: Abbreviated month name (e.g., Oct).
- **%d**: Day of the month as a zero-padded decimal number (01-31).
- **%A**: Full weekday name (e.g., Thursday).
- **%H**: Hour (24-hour clock) (00-23).
- **%I**: Hour (12-hour clock) (01-12).
- **%p**: AM or PM.
- **%M**: Minute (00-59).
- **%S**: Second (00-59).

### Example

```python
now = datetime.datetime.now()

# Format into a readable string
formatted_string = now.strftime("%A, %B %d, %Y at %I:%M %p")
print(formatted_string)
# Output: Thursday, October 26, 2023 at 10:30 AM (example)
```

## Parsing Strings into Dates: **strptime()**

The reverse of **strftime()** is **strptime()** (string parse time). It takes a string and a format code and returns a **datetime** object.

This is extremely useful for converting date strings from files or user input into **datetime** objects that you can work with.

```python
date_string = "2023-10-26 15:45:00"
format_code = "%Y-%m-%d %H:%M:%S"

datetime_obj = datetime.datetime.strptime(date_string, format_code)

print(f"Parsed object: {datetime_obj}")
print(f"Year: {datetime_obj.year}")
```

**Important:** The format code passed to **strptime()** must exactly match the format of the date string, otherwise you will get a **ValueError**.

## Time Calculations with **timedelta**

A **timedelta** object represents a duration. You can use it to perform arithmetic on **datetime** objects.

### Creating a **timedelta**

```python
from datetime import timedelta

# Create a duration of 3 days and 4 hours
duration = timedelta(days=3, hours=4)
print(duration) # Output: 3 days, 4:00:00
```

### Performing Calculations

```python
now = datetime.datetime.now()

# What time will it be in 1 week?
future_date = now + timedelta(weeks=1)
print(f"One week from now: {future_date}")

# What time was it 10 days ago?
past_date = now - timedelta(days=10)
print(f"Ten days ago: {past_date}")

# Calculate the difference between two dates
date1 = datetime.datetime(2023, 1, 1)
date2 = datetime.datetime(2023, 12, 31)
difference = date2 - date1
print(f"Days between dates: {difference.days}")
```

## Key Takeaways

- The **datetime** module is the standard way to handle dates and times in Python.
- **datetime.datetime** represents a specific point in time.
- **strftime()** formats a **datetime** object into a string.
- **strptime()** parses a string into a **datetime** object.
- **timedelta** represents a duration and is used for date and time arithmetic.
- Always be mindful of timezones for more complex applications (the **pytz** or **zoneinfo** modules can help).

## Practice Exercises

1. **Current Time**: Print the current date and time in the format **MM/DD/YYYY, H:M:S**.
2. **String to Date**: Convert the string **"Jul 4, 1776"** into a **datetime** object.
3. **Date Countdown**: Calculate and print how many days are left until New Year's Day of the next year.

---

## Solutions

```python
import datetime
from datetime import timedelta

# Exercise 1: Current Time
now = datetime.datetime.now()
print(f"Current time: {now.strftime('%m/%d/%Y, %H:%M:%S')}")

# Exercise 2: String to Date
date_str = "Jul 4, 1776"
parsed_date = datetime.datetime.strptime(date_str, "%b %d, %Y")
print(f"Parsed date: {parsed_date.date()}")

# Exercise 3: Date Countdown
today = datetime.datetime.now()
next_year = today.year + 1
new_year = datetime.datetime(next_year, 1, 1)

days_until_new_year = new_year - today
print(f"Days until New Year's: {days_until_new_year.days}")

```

---

> **Next lesson:** [Understanding *args and **kwargs](advanced-args-kwargs)

---
