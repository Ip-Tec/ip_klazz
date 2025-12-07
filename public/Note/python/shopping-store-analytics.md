# Shopping Store Analytics - Complete Example

## Project Overview

We will analyze a shopping store's transaction data to discover:

- When customers visit the store (day and time patterns)
- What products they buy
- Shopping trends and insights

## Step 1: Create Sample Dataset

First, let's create realistic sample data for our analysis.

```python
import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import random

# Set random seed for reproducibility
np.random.seed(42)
random.seed(42)

# Define our products and their categories
products = {
    'Milk': 'Dairy',
    'Bread': 'Bakery',
    'Eggs': 'Dairy',
    'Cheese': 'Dairy',
    'Yogurt': 'Dairy',
    'Apples': 'Fruits',
    'Bananas': 'Fruits',
    'Oranges': 'Fruits',
    'Tomatoes': 'Vegetables',
    'Lettuce': 'Vegetables',
    'Carrots': 'Vegetables',
    'Chicken': 'Meat',
    'Beef': 'Meat',
    'Rice': 'Grains',
    'Pasta': 'Grains',
    'Coffee': 'Beverages',
    'Tea': 'Beverages',
    'Juice': 'Beverages',
    'Cookies': 'Snacks',
    'Chips': 'Snacks'
}

# Generate 1000 transactions over 30 days
num_transactions = 1000
start_date = datetime(2024, 11, 1)

# Store data
transactions = []

for i in range(num_transactions):
    # Random date within 30 days
    random_days = random.randint(0, 29)
    
    # Time preferences (more customers in morning and evening)
    hour_weights = [2, 1, 1, 1, 3, 5, 8, 12, 15, 18, 16, 14, 
                    12, 10, 9, 8, 10, 15, 20, 18, 12, 8, 5, 3]
    hour = random.choices(range(24), weights=hour_weights)[0]
    minute = random.randint(0, 59)
    
    transaction_time = start_date + timedelta(days=random_days, hours=hour, minutes=minute)
    
    # Each customer buys 1-5 items
    num_items = random.choices([1, 2, 3, 4, 5], weights=[10, 30, 35, 20, 5])[0]
    
    # Select random products
    selected_products = random.sample(list(products.keys()), num_items)
    
    # Create a transaction for each item
    for product in selected_products:
        transactions.append({
            'Transaction_ID': f'TXN{i+1:04d}',
            'Date': transaction_time.date(),
            'Time': transaction_time.time(),
            'DateTime': transaction_time,
            'Day_of_Week': transaction_time.strftime('%A'),
            'Hour': hour,
            'Product': product,
            'Category': products[product],
            'Quantity': random.randint(1, 3),
            'Price': round(random.uniform(2.99, 29.99), 2)
        })

# Create DataFrame
df = pd.DataFrame(transactions)

# Save to CSV
df.to_csv('shopping_store_data.csv', index=False)
print("Sample data created successfully!")
print(f"Total transactions: {df['Transaction_ID'].nunique()}")
print(f"Total items sold: {len(df)}")
print("\nFirst few rows:")
print(df.head(10))
```

## Step 2: Load and Explore the Data

Now let's load our data and understand what we have.

```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Set style for better-looking plots
sns.set_style('whitegrid')
plt.rcParams['figure.figsize'] = (12, 6)

# Load the data
df = pd.read_csv('shopping_store_data.csv')

# Convert date columns to proper datetime format
df['Date'] = pd.to_datetime(df['Date'])
df['DateTime'] = pd.to_datetime(df['DateTime'])

print("=" * 50)
print("STEP 2: DATA EXPLORATION")
print("=" * 50)

# Basic information
print("\n1. Dataset Shape:")
print(f"   Rows: {df.shape[0]}")
print(f"   Columns: {df.shape[1]}")

print("\n2. Column Names and Types:")
print(df.dtypes)

print("\n3. First 5 rows:")
print(df.head())

print("\n4. Statistical Summary:")
print(df.describe())

print("\n5. Missing Values:")
print(df.isnull().sum())

print("\n6. Unique Values:")
print(f"   Unique Transactions: {df['Transaction_ID'].nunique()}")
print(f"   Unique Products: {df['Product'].nunique()}")
print(f"   Date Range: {df['Date'].min()} to {df['Date'].max()}")
```

## Step 3: Analyze When Customers Visit

Let's discover the patterns of when customers come to the store.

```python
print("\n" + "=" * 50)
print("STEP 3: WHEN DO CUSTOMERS VISIT?")
print("=" * 50)

# 3.1: Visits by Day of Week
print("\n3.1 Customers by Day of Week:")
visits_by_day = df.groupby('Day_of_Week')['Transaction_ID'].nunique().reindex([
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
])
print(visits_by_day)

# Visualization
plt.figure(figsize=(10, 6))
visits_by_day.plot(kind='bar', color='skyblue', edgecolor='black')
plt.title('Customer Visits by Day of Week', fontsize=16, fontweight='bold')
plt.xlabel('Day of Week', fontsize=12)
plt.ylabel('Number of Customers', fontsize=12)
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig('visits_by_day.png')
plt.show()

# 3.2: Visits by Hour
print("\n3.2 Customers by Hour of Day:")
visits_by_hour = df.groupby('Hour')['Transaction_ID'].nunique().sort_index()
print(visits_by_hour)

# Visualization
plt.figure(figsize=(12, 6))
visits_by_hour.plot(kind='line', marker='o', color='green', linewidth=2, markersize=8)
plt.title('Customer Visits by Hour of Day', fontsize=16, fontweight='bold')
plt.xlabel('Hour of Day', fontsize=12)
plt.ylabel('Number of Customers', fontsize=12)
plt.grid(True, alpha=0.3)
plt.xticks(range(0, 24))
plt.tight_layout()
plt.savefig('visits_by_hour.png')
plt.show()

# 3.3: Peak Hours Analysis
print("\n3.3 Peak Shopping Hours:")
peak_hours = visits_by_hour.nlargest(5)
print(peak_hours)
print(f"\nBusiest Hour: {peak_hours.idxmax()}:00 with {peak_hours.max()} customers")

# 3.4: Heatmap of Day and Hour
print("\n3.4 Creating Day-Hour Heatmap...")
day_hour_visits = df.groupby(['Day_of_Week', 'Hour'])['Transaction_ID'].nunique().unstack(fill_value=0)
day_hour_visits = day_hour_visits.reindex([
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
])

plt.figure(figsize=(16, 6))
sns.heatmap(day_hour_visits, cmap='YlOrRd', annot=True, fmt='d', cbar_kws={'label': 'Number of Customers'})
plt.title('Customer Visits: Day of Week vs Hour of Day', fontsize=16, fontweight='bold')
plt.xlabel('Hour of Day', fontsize=12)
plt.ylabel('Day of Week', fontsize=12)
plt.tight_layout()
plt.savefig('day_hour_heatmap.png')
plt.show()
```

## Step 4: Analyze What Customers Buy

Now let's discover what products are most popular.

```python
print("\n" + "=" * 50)
print("STEP 4: WHAT DO CUSTOMERS BUY?")
print("=" * 50)

# 4.1: Most Popular Products
print("\n4.1 Top 10 Most Popular Products:")
popular_products = df['Product'].value_counts().head(10)
print(popular_products)

# Visualization
plt.figure(figsize=(10, 6))
popular_products.plot(kind='barh', color='coral', edgecolor='black')
plt.title('Top 10 Most Popular Products', fontsize=16, fontweight='bold')
plt.xlabel('Number of Times Purchased', fontsize=12)
plt.ylabel('Product', fontsize=12)
plt.tight_layout()
plt.savefig('popular_products.png')
plt.show()

# 4.2: Sales by Category
print("\n4.2 Sales by Category:")
category_sales = df.groupby('Category').agg({
    'Product': 'count',
    'Price': 'sum',
    'Quantity': 'sum'
}).rename(columns={'Product': 'Items_Sold'})
category_sales = category_sales.sort_values('Items_Sold', ascending=False)
print(category_sales)

# Visualization
fig, axes = plt.subplots(1, 2, figsize=(14, 6))

category_sales['Items_Sold'].plot(kind='bar', ax=axes[0], color='lightblue', edgecolor='black')
axes[0].set_title('Items Sold by Category', fontsize=14, fontweight='bold')
axes[0].set_xlabel('Category', fontsize=11)
axes[0].set_ylabel('Number of Items', fontsize=11)
axes[0].tick_params(axis='x', rotation=45)

category_sales['Price'].plot(kind='bar', ax=axes[1], color='lightgreen', edgecolor='black')
axes[1].set_title('Revenue by Category', fontsize=14, fontweight='bold')
axes[1].set_xlabel('Category', fontsize=11)
axes[1].set_ylabel('Total Revenue ($)', fontsize=11)
axes[1].tick_params(axis='x', rotation=45)

plt.tight_layout()
plt.savefig('category_analysis.png')
plt.show()

# 4.3: Average basket size
print("\n4.3 Shopping Basket Analysis:")
basket_size = df.groupby('Transaction_ID').size()
print(f"Average items per transaction: {basket_size.mean():.2f}")
print(f"Median items per transaction: {basket_size.median():.0f}")
print(f"Most items in one transaction: {basket_size.max()}")

# Visualization
plt.figure(figsize=(10, 6))
basket_size.value_counts().sort_index().plot(kind='bar', color='mediumpurple', edgecolor='black')
plt.title('Distribution of Basket Sizes', fontsize=16, fontweight='bold')
plt.xlabel('Number of Items per Transaction', fontsize=12)
plt.ylabel('Number of Transactions', fontsize=12)
plt.tight_layout()
plt.savefig('basket_distribution.png')
plt.show()
```

## Step 5: Advanced Insights

Let's dig deeper to find interesting patterns.

```python
print("\n" + "=" * 50)
print("STEP 5: ADVANCED INSIGHTS")
print("=" * 50)

# 5.1: Products by Time of Day
print("\n5.1 Popular Products by Time of Day:")
df['Time_Period'] = pd.cut(df['Hour'], 
                           bins=[0, 6, 12, 18, 24], 
                           labels=['Night (0-6)', 'Morning (6-12)', 'Afternoon (12-18)', 'Evening (18-24)'],
                           include_lowest=True)

time_product = df.groupby(['Time_Period', 'Product']).size().reset_index(name='Count')
for period in ['Morning (6-12)', 'Afternoon (12-18)', 'Evening (18-24)']:
    print(f"\n{period}:")
    top_in_period = time_product[time_product['Time_Period'] == period].nlargest(5, 'Count')
    for idx, row in top_in_period.iterrows():
        print(f"   {row['Product']}: {row['Count']} purchases")

# 5.2: Weekend vs Weekday Shopping
print("\n5.2 Weekend vs Weekday Patterns:")
df['Is_Weekend'] = df['Day_of_Week'].isin(['Saturday', 'Sunday'])
weekend_comparison = df.groupby('Is_Weekend').agg({
    'Transaction_ID': 'nunique',
    'Product': 'count',
    'Price': 'sum'
}).rename(columns={
    'Transaction_ID': 'Transactions',
    'Product': 'Items_Sold',
    'Price': 'Revenue'
})
weekend_comparison.index = ['Weekday', 'Weekend']
print(weekend_comparison)

# 5.3: Daily Trends
print("\n5.3 Daily Sales Trend:")
daily_sales = df.groupby('Date').agg({
    'Transaction_ID': 'nunique',
    'Price': 'sum'
}).rename(columns={'Transaction_ID': 'Customers', 'Price': 'Revenue'})

plt.figure(figsize=(14, 6))
plt.subplot(1, 2, 1)
daily_sales['Customers'].plot(color='blue', linewidth=2)
plt.title('Daily Customer Count', fontsize=14, fontweight='bold')
plt.xlabel('Date', fontsize=11)
plt.ylabel('Number of Customers', fontsize=11)
plt.grid(True, alpha=0.3)

plt.subplot(1, 2, 2)
daily_sales['Revenue'].plot(color='green', linewidth=2)
plt.title('Daily Revenue', fontsize=14, fontweight='bold')
plt.xlabel('Date', fontsize=11)
plt.ylabel('Revenue ($)', fontsize=11)
plt.grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig('daily_trends.png')
plt.show()

print(f"\nAverage daily customers: {daily_sales['Customers'].mean():.0f}")
print(f"Average daily revenue: ${daily_sales['Revenue'].mean():.2f}")
```

## Step 6: Generate Business Recommendations

Based on our analysis, let's provide actionable insights.

```python
print("\n" + "=" * 50)
print("STEP 6: BUSINESS RECOMMENDATIONS")
print("=" * 50)

# Find key insights
busiest_day = visits_by_day.idxmax()
busiest_hour = visits_by_hour.idxmax()
top_product = df['Product'].value_counts().idxmax()
top_category = category_sales['Items_Sold'].idxmax()

print("\n📊 KEY FINDINGS:")
print(f"1. Busiest Day: {busiest_day} ({visits_by_day.max()} customers)")
print(f"2. Peak Hour: {busiest_hour}:00 ({visits_by_hour.max()} customers)")
print(f"3. Most Popular Product: {top_product}")
print(f"4. Best-Selling Category: {top_category}")

print("\n💡 RECOMMENDATIONS:")
print("\n1. STAFFING:")
print(f"   - Schedule more staff on {busiest_day}")
print(f"   - Peak hours are {visits_by_hour.nlargest(3).index.tolist()}")
print("   - Consider reduced staff during night hours (0-6)")

print("\n2. INVENTORY:")
print(f"   - Stock up on {top_product} - highest demand")
print(f"   - Focus on {top_category} category products")
print("   - Monitor fast-moving items daily")

print("\n3. PROMOTIONS:")
print("   - Run promotions during slower hours (before 9 AM)")
print("   - Weekend specials could boost sales on quieter days")
print("   - Bundle deals with popular products")

print("\n4. STORE OPERATIONS:")
print("   - Open early if morning traffic (6-9 AM) is significant")
print("   - Ensure checkout efficiency during 17-20 hours")
print("   - Position popular items strategically")

print("\n✅ Analysis Complete!")
print("All visualizations saved as PNG files.")
```

## Complete Working Script

Here's everything combined into one script you can run:

```python
# COMPLETE SHOPPING STORE ANALYTICS SCRIPT
# Run this entire script to generate data and perform analysis

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime, timedelta
import random

# Configuration
np.random.seed(42)
random.seed(42)
sns.set_style('whitegrid')
plt.rcParams['figure.figsize'] = (12, 6)

# Step 1: Generate Data (code from Step 1)
# Step 2: Load and Explore (code from Step 2)
# Step 3: Time Analysis (code from Step 3)
# Step 4: Product Analysis (code from Step 4)
# Step 5: Advanced Insights (code from Step 5)
# Step 6: Recommendations (code from Step 6)

print("\n" + "=" * 50)
print("📈 SHOPPING STORE ANALYTICS COMPLETE!")
print("=" * 50)
```

## Expected Output Files

After running this analysis, you will have:

1. `shopping_store_data.csv` - Your sample dataset
2. `visits_by_day.png` - Bar chart of visits by weekday
3. `visits_by_hour.png` - Line chart of hourly traffic
4. `day_hour_heatmap.png` - Heatmap showing day and hour patterns
5. `popular_products.png` - Top products chart
6. `category_analysis.png` - Category performance charts
7. `basket_distribution.png` - Transaction size distribution
8. `daily_trends.png` - Daily customer and revenue trends

## E-Mail

[E-Mail Ip](mailto:otakhorpeter@gmail.com) for detailed lesson on data analytics or projects

## Github

[Github](https://github.com/Ip-Tec)

## LinkedIn

[LinkedIn](https://www.linkedin.com/in/peter-innocent)
