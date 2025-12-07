# Python Data Analytics - Complete Guide

## Introduction to Data Analytics

Data analytics is the process of examining, cleaning, transforming, and modeling data to discover useful information, draw conclusions, and support decision-making. Python has become the most popular language for data analytics due to its powerful libraries and ease of use.

## Essential Libraries

### 1. NumPy (Numerical Python)

NumPy is the foundation for numerical computing in Python. It provides support for arrays and matrices along with mathematical functions.

```python
import numpy as np

# Creating arrays
arr = np.array([1, 2, 3, 4, 5])
matrix = np.array([[1, 2, 3], [4, 5, 6]])

# Basic operations
print(arr.mean())  # Average
print(arr.sum())   # Sum
print(arr.std())   # Standard deviation
```

### 2. Pandas

Pandas is the primary library for data manipulation and analysis. It provides DataFrames, which are like Excel spreadsheets in Python.

```python
import pandas as pd

# Creating a DataFrame
data = {
    'Name': ['John', 'Anna', 'Peter', 'Linda'],
    'Age': [28, 24, 35, 32],
    'Salary': [50000, 45000, 60000, 55000]
}
df = pd.DataFrame(data)

# Basic operations
print(df.head())           # First 5 rows
print(df.describe())       # Statistical summary
print(df['Age'].mean())    # Average age
```

### 3. Matplotlib & Seaborn

These libraries are used for data visualization.

```python
import matplotlib.pyplot as plt
import seaborn as sns

# Simple line plot
plt.plot([1, 2, 3, 4], [1, 4, 9, 16])
plt.xlabel('X axis')
plt.ylabel('Y axis')
plt.title('Simple Plot')
plt.show()
```

## Data Analytics Workflow

### Step 1: Data Collection

```python
# Reading data from CSV
df = pd.read_csv('data.csv')

# Reading from Excel
df = pd.read_excel('data.xlsx')

# Reading from JSON
df = pd.read_json('data.json')
```

### Step 2: Data Exploration

```python
# View first/last rows
df.head()
df.tail()

# Get information about the dataset
df.info()
df.shape  # (rows, columns)

# Statistical summary
df.describe()

# Check for missing values
df.isnull().sum()
```

### Step 3: Data Cleaning

```python
# Remove duplicates
df = df.drop_duplicates()

# Handle missing values
df = df.dropna()  # Remove rows with missing values
df = df.fillna(0)  # Fill missing values with 0

# Rename columns
df = df.rename(columns={'old_name': 'new_name'})

# Change data types
df['column'] = df['column'].astype(int)
```

### Step 4: Data Manipulation

```python
# Filtering data
young_people = df[df['Age'] < 30]
high_earners = df[df['Salary'] > 50000]

# Sorting
df_sorted = df.sort_values('Salary', ascending=False)

# Grouping and aggregation
avg_salary_by_dept = df.groupby('Department')['Salary'].mean()

# Creating new columns
df['Bonus'] = df['Salary'] * 0.1
```

### Step 5: Data Analysis

```python
# Correlation analysis
correlation = df.corr()

# Pivot tables
pivot = df.pivot_table(values='Salary', 
                       index='Department', 
                       aggfunc='mean')

# Value counts
df['Department'].value_counts()
```

### Step 6: Data Visualization

```python
# Bar chart
df['Department'].value_counts().plot(kind='bar')
plt.title('Employees by Department')
plt.show()

# Histogram
df['Age'].plot(kind='hist', bins=10)
plt.title('Age Distribution')
plt.show()

# Scatter plot
plt.scatter(df['Age'], df['Salary'])
plt.xlabel('Age')
plt.ylabel('Salary')
plt.title('Age vs Salary')
plt.show()

# Box plot
df.boxplot(column='Salary', by='Department')
plt.show()
```

## Practical Example: Analyzing Sales Data

```python
import pandas as pd
import matplotlib.pyplot as plt

# Load data
sales = pd.read_csv('sales_data.csv')

# Explore data
print(sales.head())
print(sales.info())

# Clean data
sales = sales.dropna()
sales['Date'] = pd.to_datetime(sales['Date'])

# Analyze
total_sales = sales['Amount'].sum()
avg_sale = sales['Amount'].mean()
top_products = sales.groupby('Product')['Amount'].sum().sort_values(ascending=False)

# Visualize
top_products.head(10).plot(kind='barh')
plt.title('Top 10 Products by Sales')
plt.xlabel('Total Sales')
plt.show()

# Monthly sales trend
sales['Month'] = sales['Date'].dt.to_period('M')
monthly_sales = sales.groupby('Month')['Amount'].sum()
monthly_sales.plot(kind='line')
plt.title('Monthly Sales Trend')
plt.show()
```

## Key Concepts to Remember

1. **Data Types**: Understand numeric (int, float), categorical (object), and datetime data types
2. **Missing Data**: Always check for and handle missing values appropriately
3. **Outliers**: Identify and decide how to handle extreme values
4. **Aggregation**: Learn to summarize data using mean, median, sum, count, etc.
5. **Visualization**: Choose the right chart type for your data (bar, line, scatter, histogram, box plot)

## Common Data Analysis Tasks

### Finding Insights

- What are the most common values?
- What are the trends over time?
- Are there any correlations between variables?
- What are the outliers?

### Statistical Measures

- **Mean**: Average value
- **Median**: Middle value
- **Mode**: Most common value
- **Standard Deviation**: Measure of spread
- **Percentiles**: Values below which a percentage of data falls

## Practice Exercises

1. Load a dataset and display its first 10 rows
2. Find and handle missing values
3. Calculate basic statistics (mean, median, max, min)
4. Filter data based on conditions
5. Create at least 3 different visualizations
6. Group data and calculate aggregated values
7. Export your cleaned data to a new CSV file

## Resources for Further Learning

- **Pandas Documentation**: pandas.pydata.org
- **NumPy Documentation**: numpy.org
- **Matplotlib Gallery**: matplotlib.org/gallery
- **Kaggle**: Practice with real datasets at [kaggle.com](https://kaggle.com)

## Tips for Success

1. Start with small datasets to understand the basics
2. Always explore your data before analyzing
3. Document your code with comments
4. Save your work frequently
5. Practice regularly with different datasets
6. Learn to ask the right questions about your data

Remember: Data analytics is about telling stories with data. Your job is to find patterns, insights, and meaningful information that can help make better decisions.

## E-Mail

[E-Mail Ip](mailto:otakhorpeter@gmail.com) for detailed lesson on data analytics or projects

## Github

[Github](https://github.com/Ip-Tec)

## LinkedIn

[LinkedIn](https://www.linkedin.com/in/peter-innocent)

---

> **Next lesson:** [Shopping Store Analytics - Complete Example](shopping-store-analytics)

---
