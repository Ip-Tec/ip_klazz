# Introduction to Matplotlib

## What is Matplotlib?

**Matplotlib** is the most widely used library for creating static, animated, and interactive visualizations in Python. If you need to create a plot, chart, or graph, Matplotlib is the fundamental tool to know.

It provides a high level of control over every aspect of a figure, including labels, colors, and layout.

### Installation

First, you need to install Matplotlib using pip:

```bash
pip install matplotlib
```

By convention, the **pyplot** module from Matplotlib is imported with the alias **plt**.

```python
import matplotlib.pyplot as plt
```

## Your First Plot

Let's create a simple line plot.

1. **Prepare the data:** You need two sequences of numbers, one for the x-axis and one for the y-axis.
2. **Create the plot:** Use **plt.plot(x, y)**.
3. **Show the plot:** Use **plt.show()** to display the figure.

```python
import matplotlib.pyplot as plt

# Data for the x and y axes
x = [1, 2, 3, 4, 5]
y = [2, 3, 5, 7, 11]

# Create the plot
plt.plot(x, y)

# Add labels and a title
plt.xlabel("X-axis Label")
plt.ylabel("Y-axis Label")
plt.title("My First Plot")

# Display the plot
plt.show()
```

This will open a window showing a line connecting the points (1,2), (2,3), (3,5), and so on.

## Common Plot Types

Matplotlib can create many different types of plots.

### Bar Chart

Bar charts are great for comparing categories.

```python
import matplotlib.pyplot as plt

categories = ['A', 'B', 'C', 'D']
values = [10, 25, 15, 30]

plt.bar(categories, values)

plt.title("Bar Chart")
plt.xlabel("Category")
plt.ylabel("Value")

plt.show()
```

### Scatter Plot

Scatter plots are used to visualize the relationship between two numerical variables.

```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5, 6, 7, 8]
y = [5, 2, 4, 2, 1, 4, 5, 2]

plt.scatter(x, y)

plt.title("Scatter Plot")
plt.xlabel("X Value")
plt.ylabel("Y Value")

plt.show()
```

### Histogram

Histograms are used to visualize the distribution of a single numerical variable.

```python
import matplotlib.pyplot as plt
import numpy as np

# Generate some random data
data = np.random.randn(1000)

plt.hist(data, bins=30) # bins specifies the number of bars

plt.title("Histogram")
plt.xlabel("Value")
plt.ylabel("Frequency")

plt.show()
```

## Customizing Your Plot

Matplotlib gives you fine-grained control over your plots.

```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y1 = [2, 3, 5, 7, 11]
y2 = [1, 4, 9, 16, 25]

# Plot two lines on the same figure
plt.plot(x, y1, color='blue', linestyle='--', marker='o', label='Prime Numbers')
plt.plot(x, y2, color='red', marker='x', label='Squared Numbers')

# Add a title and labels
plt.title("Two Lines on One Plot")
plt.xlabel("X Values")
plt.ylabel("Y Values")

# Add a legend to identify the lines
plt.legend()

# Add a grid
plt.grid(True)

# Show the plot
plt.show()
```

### Key Customizations

- **color**: Sets the color of the line/markers.
- **linestyle**: Sets the style of the line (e.g., **--**, **:**, **-.**).
- **marker**: Sets the style of the markers at each data point (e.g., **o**, **x**, **s**).
- **label**: Provides a name for the line, used by the legend.
- **plt.legend()**: Displays the legend.
- **plt.grid(True)**: Adds a grid to the background.

## The Object-Oriented Approach

While **plt.plot()** is quick and easy, Matplotlib has a more powerful object-oriented interface that gives you more control, especially for complex figures with multiple subplots.

```python
import matplotlib.pyplot as plt
import numpy as np

# Create some data
x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)

# Create a figure and a set of subplots
# fig is the entire window, ax is the specific plot
fig, ax = plt.subplots()

# Plot the data on the axes
ax.plot(x, y1, label='sin(x)')
ax.plot(x, y2, label='cos(x)')

# Set labels and title on the axes
ax.set_xlabel("X")
ax.set_ylabel("Y")
ax.set_title("Sine and Cosine Waves")
ax.legend()

plt.show()
```

This approach is more verbose for simple plots but is highly recommended for building complex, publication-quality figures.

## Key Takeaways

- Matplotlib is the foundational library for data visualization in Python.
- **matplotlib.pyplot** is the main module used for creating plots.
- Use **plt.plot()** for simple plots and **plt.show()** to display them.
- You can create many plot types, including bar charts, scatter plots, and histograms.
- Plots can be heavily customized with colors, labels, and legends.
- For more control, use the object-oriented approach by creating **figure** and **axes** objects.

## Practice Exercises

1. **Simple Sine Wave**: Plot a sine wave from **x = 0** to **x = 2*pi**.
2. **Categorical Data**: Create a bar chart showing the number of pets for three people: Alice (2 cats), Bob (1 dog), and Charlie (3 fish).
3. **Combined Plot**: On a single figure, create a scatter plot of 10 random (x, y) points and also plot the line **y = x**.

---

## Solutions

```python
import matplotlib.pyplot as plt
import numpy as np

# Exercise 1: Simple Sine Wave
x1 = np.linspace(0, 2 * np.pi, 100)
y1 = np.sin(x1)

plt.figure() # Create a new figure for this plot
plt.plot(x1, y1)
plt.title("Sine Wave")
plt.xlabel("Radian")
plt.ylabel("Value")
plt.grid(True)
plt.show()

# Exercise 2: Categorical Data
people = ['Alice', 'Bob', 'Charlie']
pet_counts = [2, 1, 3]

plt.figure()
plt.bar(people, pet_counts, color=['red', 'blue', 'green'])
plt.title("Number of Pets")
plt.ylabel("Count")
plt.show()

# Exercise 3: Combined Plot
# Generate 10 random points
np.random.seed(42) # for reproducibility
x3_random = np.random.rand(10)
y3_random = np.random.rand(10)

# Data for the line y=x
x3_line = np.array([0, 1])

plt.figure()
plt.scatter(x3_random, y3_random, label='Random Points')
plt.plot(x3_line, x3_line, color='red', linestyle='--', label='y=x')

plt.title("Combined Scatter and Line Plot")
plt.xlabel("X")
plt.ylabel("Y")
plt.legend()
plt.grid(True)
plt.show()

```

---

> **Next lesson:** [Introduction to Requests](requests-intro)

---
