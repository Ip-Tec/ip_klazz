# Assignment Operators

Assignment operators are used to assign values to variables and perform operations at the same time. They provide a shorthand way to update variables, making your code more concise and readable.

## Simple Assignment (=)

The basic assignment operator assigns a value to a variable.

```python
# Basic assignment
x = 5
name = "Alice"
price = 19.99
is_active = True

# Assign result of expression
total = 10 + 5
area = length * width

# Multiple assignment (same value)
a = b = c = 0
print(a, b, c)  # 0 0 0

# Multiple assignment (different values)
x, y, z = 1, 2, 3
print(x, y, z)  # 1 2 3

# Swapping values
a = 5
b = 10
a, b = b, a
print(a, b)  # 10 5
```

---

## Compound Assignment Operators

Compound assignment operators combine an operation with assignment, providing a shorthand notation.

### Overview Table

| Operator | Example | Equivalent To | Description |
|----------|---------|---------------|-------------|
| `+=` | `x += 5` | `x = x + 5` | Add and assign |
| `-=` | `x -= 5` | `x = x - 5` | Subtract and assign |
| `*=` | `x *= 5` | `x = x * 5` | Multiply and assign |
| `/=` | `x /= 5` | `x = x / 5` | Divide and assign |
| `//=` | `x //= 5` | `x = x // 5` | Floor divide and assign |
| `%=` | `x %= 5` | `x = x % 5` | Modulus and assign |
| `**=` | `x **= 5` | `x = x ** 5` | Exponent and assign |

---

## Addition Assignment (+=)

Adds a value to the variable and assigns the result.

```python
# Basic usage
count = 10
count += 5  # Same as: count = count + 5
print(count)  # 15

# Adding to zero (initialization)
total = 0
total += 10
total += 20
total += 30
print(total)  # 60

# Incrementing by 1
score = 0
score += 1  # Increment
score += 1
score += 1
print(score)  # 3

# With floats
price = 19.99
price += 5.00
print(price)  # 24.99

# With negative numbers
balance = 100
balance += -25  # Same as balance -= 25
print(balance)  # 75
```

### Practical Examples

```python
# Accumulating sum
total = 0
for i in range(1, 6):
    total += i
print(f"Sum: {total}")  # Sum: 15

# Shopping cart
cart_total = 0.0
cart_total += 19.99  # Item 1
cart_total += 29.99  # Item 2
cart_total += 9.99   # Item 3
print(f"Cart total: ${cart_total:.2f}")

# Score tracking
player_score = 0
player_score += 10  # Small win
player_score += 50  # Big win
player_score += 5   # Bonus
print(f"Final score: {player_score}")

# String concatenation
message = "Hello"
message += " "
message += "World"
message += "!"
print(message)  # Hello World!
```

---

## Subtraction Assignment (-=)

Subtracts a value from the variable and assigns the result.

```python
# Basic usage
count = 10
count -= 3  # Same as: count = count - 3
print(count)  # 7

# Decrementing
lives = 3
lives -= 1  # Lost a life
print(lives)  # 2

# With floats
balance = 100.50
balance -= 25.25
print(balance)  # 75.25

# Multiple subtractions
value = 100
value -= 10
value -= 20
value -= 5
print(value)  # 65
```

### Practical Examples

```python
# Bank withdrawal
balance = 1000
withdrawal = 250
balance -= withdrawal
print(f"New balance: ${balance}")

# Inventory management
stock = 50
sold = 15
stock -= sold
print(f"Remaining stock: {stock}")

# Countdown
time_left = 60
time_left -= 10  # 10 seconds passed
time_left -= 15  # 15 more seconds
print(f"Time remaining: {time_left} seconds")

# Health points in game
health = 100
health -= 25  # Took damage
health -= 10  # More damage
print(f"Health: {health}/100")
```

---

## Multiplication Assignment (*=)

Multiplies the variable by a value and assigns the result.

```python
# Basic usage
count = 5
count *= 3  # Same as: count = count * 3
print(count)  # 15

# Doubling
value = 10
value *= 2
print(value)  # 20

# With floats
price = 10.0
price *= 1.5
print(price)  # 15.0

# Multiplying by fraction
amount = 100
amount *= 0.5  # Half
print(amount)  # 50.0
```

### Practical Examples

```python
# Apply tax
price = 100
tax_rate = 1.08  # 8% tax
price *= tax_rate
print(f"Price with tax: ${price:.2f}")

# Population growth
population = 1000
growth_rate = 1.05  # 5% growth
population *= growth_rate
print(f"New population: {population:.0f}")

# Compound interest
principal = 1000
rate = 1.05  # 5% interest
principal *= rate  # Year 1
principal *= rate  # Year 2
principal *= rate  # Year 3
print(f"Amount after 3 years: ${principal:.2f}")

# Scale measurement
meters = 5
meters *= 100  # Convert to centimeters
print(f"{meters} cm")

# Doubling pattern
value = 1
value *= 2  # 2
value *= 2  # 4
value *= 2  # 8
value *= 2  # 16
print(value)  # 16
```

---

## Division Assignment (/=)

Divides the variable by a value and assigns the result. Always returns a float.

```python
# Basic usage
count = 20
count /= 4  # Same as: count = count / 4
print(count)  # 5.0

# Even division
value = 100
value /= 2
print(value)  # 50.0

# Division with remainder
number = 10
number /= 3
print(number)  # 3.3333...

# Multiple divisions
value = 1000
value /= 10
value /= 10
print(value)  # 10.0
```

### Practical Examples

```python
# Split bill
total_bill = 120.0
num_people = 4
total_bill /= num_people
print(f"Each person pays: ${total_bill:.2f}")

# Calculate average
total = 450
count = 5
total /= count
print(f"Average: {total}")

# Halving
value = 100
value /= 2  # 50.0
value /= 2  # 25.0
value /= 2  # 12.5
print(value)

# Convert percentage
percentage = 75
percentage /= 100  # Convert to decimal
print(percentage)  # 0.75
```

---

## Floor Division Assignment (//=)

Performs floor division and assigns the result (rounds down to nearest integer).

```python
# Basic usage
count = 20
count //= 3  # Same as: count = count // 3
print(count)  # 6

# Even division
value = 100
value //= 2
print(value)  # 50

# Multiple floor divisions
number = 1000
number //= 10  # 100
number //= 10  # 10
print(number)  # 10

# With negative numbers
value = 17
value //= -5
print(value)  # -4 (rounds down!)
```

### Practical Examples

```python
# Items per box
total_items = 47
box_capacity = 5
boxes_needed = total_items
boxes_needed //= box_capacity
print(f"Full boxes: {boxes_needed}")  # 9
leftover = total_items % box_capacity
print(f"Items left over: {leftover}")  # 2

# Time conversion
total_seconds = 3725
hours = total_seconds
hours //= 3600  # 1 hour
print(f"Hours: {hours}")

# Halving (integer)
value = 100
value //= 2  # 50
value //= 2  # 25
value //= 2  # 12
print(value)  # 12 (not 12.5)
```

---

## Modulus Assignment (%=)

Performs modulus operation and assigns the remainder.

```python
# Basic usage
count = 17
count %= 5  # Same as: count = count % 5
print(count)  # 2 (remainder)

# Getting last digit
number = 12345
number %= 10
print(number)  # 5

# Wrapping around
position = 8
max_position = 5
position %= max_position
print(position)  # 3
```

### Practical Examples

```python
# Circular array index
index = 10
array_length = 7
index %= array_length
print(f"Wrapped index: {index}")  # 3

# Clock hours (12-hour format)
hour = 14  # 2 PM
hour %= 12
if hour == 0:
    hour = 12
print(f"12-hour format: {hour}")

# Day of week cycling
day = 25  # Day 25
day %= 7  # Get day of week (0-6)
print(f"Day of week: {day}")

# Getting remainder repeatedly
value = 100
value %= 30  # 10
value %= 7   # 3
print(value)  # 3
```

---

## Exponentiation Assignment (**=)

Raises the variable to a power and assigns the result.

```python
# Basic usage
count = 2
count **= 3  # Same as: count = count ** 3
print(count)  # 8

# Squaring
value = 5
value **= 2
print(value)  # 25

# Cubing
number = 3
number **= 3
print(number)  # 27

# Multiple exponentiations
value = 2
value **= 2  # 4
value **= 2  # 16
value **= 2  # 256
print(value)
```

### Practical Examples

```python
# Compound interest formula
principal = 1000
rate = 1.05
years = 10
# Calculate (1 + r)^n
rate **= years
amount = principal * rate
print(f"Amount: ${amount:.2f}")

# Population growth exponential
population = 1000
growth_factor = 1.02  # 2% growth
years = 5
growth_factor **= years
final_population = population * growth_factor
print(f"Population: {final_population:.0f}")

# Area of square (repeated squaring)
side = 2
side **= 2  # 4 (area of 2x2 square)
print(f"Area: {side}")
```

---

## Chaining Assignment Operators

You can use multiple assignment operators in sequence.

```python
# Chain different operations
x = 10
x += 5   # 15
x *= 2   # 30
x -= 10  # 20
x /= 4   # 5.0
print(x)

# Accumulating values
total = 0
total += 10
total += 20
total += 30
total -= 5
print(total)  # 55

# Complex calculation
value = 100
value *= 1.1   # Apply 10% increase
value -= 15    # Subtract fee
value /= 2     # Split in half
print(f"Final value: {value:.2f}")
```

---

## Assignment with Unpacking

Python allows assigning multiple variables at once through unpacking.

```python
# Unpack sequence
x, y, z = 1, 2, 3
print(x, y, z)  # 1 2 3

# Unpack list
numbers = [10, 20, 30]
a, b, c = numbers
print(a, b, c)  # 10 20 30

# Swap values
x, y = 5, 10
x, y = y, x
print(x, y)  # 10 5

# Unpack with remainder
first, *rest = [1, 2, 3, 4, 5]
print(first)  # 1
print(rest)   # [2, 3, 4, 5]

# Get first and last
first, *middle, last = [1, 2, 3, 4, 5]
print(first)   # 1
print(middle)  # [2, 3, 4]
print(last)    # 5
```

---

## Common Patterns

### Counter Pattern

```python
# Simple counter
count = 0
count += 1  # Increment
count += 1
count += 1
print(count)  # 3

# Loop counter
iterations = 0
for i in range(10):
    iterations += 1
print(f"Total iterations: {iterations}")
```

### Accumulator Pattern

```python
# Sum accumulator
total = 0
numbers = [1, 2, 3, 4, 5]
for num in numbers:
    total += num
print(f"Sum: {total}")  # 15

# Product accumulator
product = 1
for num in numbers:
    product *= num
print(f"Product: {product}")  # 120
```

### Running Average

```python
# Calculate running average
total = 0
count = 0
values = [10, 20, 30, 40, 50]

for value in values:
    total += value
    count += 1
    average = total / count
    print(f"After {count} values, average = {average}")
```

### Decrement Pattern

```python
# Countdown
countdown = 10
while countdown > 0:
    print(countdown)
    countdown -= 1
print("Blast off!")
```

---

## Common Mistakes

### Mistake 1: Using Before Initializing

```python
# Wrong - variable not initialized
# count += 5  # NameError: name 'count' is not defined

# Correct - initialize first
count = 0
count += 5
print(count)  # 5
```

### Mistake 2: Confusing = and ==

```python
x = 5

# Wrong - assignment in condition
# if x = 10:  # SyntaxError
#     print("Equal")

# Correct - comparison
if x == 10:
    print("Equal")

# Assignment operator is =
x = 10

# Comparison operator is ==
if x == 10:
    print("Now it's 10")
```

### Mistake 3: Forgetting Type Changes

```python
# Division always returns float
count = 10
count /= 2
print(type(count))  # <class 'float'>
print(count)  # 5.0 (not 5)

# Use floor division for integer result
count = 10
count //= 2
print(type(count))  # <class 'int'>
print(count)  # 5
```

### Mistake 4: Order of Operations

```python
# Be careful with order
x = 5
x += 3 * 2  # x = x + (3 * 2) = x + 6 = 11
print(x)  # 11

# Not the same as:
x = 5
x = (x + 3) * 2  # (5 + 3) * 2 = 16
print(x)  # 16
```

---

## Classwork

Practice assignment operators!

### Exercise 1: Basic Operations

Create a file called `assignment_practice.py`:

```python
"""
Practice all assignment operators.
"""

# Start with initial value
value = 100

print(f"Starting value: {value}")

# Addition assignment
value += 50
print(f"After += 50: {value}")

# Subtraction assignment
value -= 30
print(f"After -= 30: {value}")

# Multiplication assignment
value *= 2
print(f"After *= 2: {value}")

# Division assignment
value /= 4
print(f"After /= 4: {value}")

# Floor division assignment
value //= 10
print(f"After //= 10: {value}")

# Modulus assignment
value %= 3
print(f"After %= 3: {value}")

# Exponentiation assignment
value **= 4
print(f"After **= 4: {value}")
```

### Exercise 2: Shopping Cart

Create a file called `shopping_cart.py`:

```python
"""
Shopping cart using assignment operators.
"""

# Initialize cart
cart_total = 0.0
items_count = 0

print("=" * 50)
print("SHOPPING CART")
print("=" * 50)

# Add items
print("\nAdding items...")
cart_total += 19.99
items_count += 1
print(f"Added item ($19.99) - Total: ${cart_total:.2f}")

cart_total += 29.99
items_count += 1
print(f"Added item ($29.99) - Total: ${cart_total:.2f}")

cart_total += 9.99
items_count += 1
print(f"Added item ($9.99) - Total: ${cart_total:.2f}")

# Apply discount
print(f"\nSubtotal: ${cart_total:.2f}")
discount = 0.10  # 10% discount
discount_amount = cart_total * discount
cart_total -= discount_amount
print(f"Discount (10%): -${discount_amount:.2f}")

# Add tax
tax_rate = 0.08  # 8% tax
tax_amount = cart_total * tax_rate
cart_total += tax_amount
print(f"Tax (8%): +${tax_amount:.2f}")

# Final total
print("=" * 50)
print(f"Items: {items_count}")
print(f"TOTAL: ${cart_total:.2f}")
print("=" * 50)
```

### Exercise 3: Game Score System

Create a file called `game_score.py`:

```python
"""
Game scoring system using assignment operators.
"""

# Initialize
player_score = 0
level = 1
multiplier = 1

print("=" * 50)
print("GAME SCORE TRACKER")
print("=" * 50)

# Level 1
print(f"\nLevel {level}")
player_score += 10  # Small enemy
print(f"  Defeated small enemy: +10 (Score: {player_score})")

player_score += 50  # Boss
print(f"  Defeated boss: +50 (Score: {player_score})")

player_score += 25  # Bonus
print(f"  Collected bonus: +25 (Score: {player_score})")

# Level 2 with multiplier
level += 1
multiplier += 1
print(f"\nLevel {level} (Multiplier: x{multiplier})")

points = 10
points *= multiplier
player_score += points
print(f"  Defeated small enemy: +{points} (Score: {player_score})")

points = 50
points *= multiplier
player_score += points
print(f"  Defeated boss: +{points} (Score: {player_score})")

# Penalty
penalty = 20
player_score -= penalty
print(f"  Time penalty: -{penalty} (Score: {player_score})")

print("=" * 50)
print(f"FINAL SCORE: {player_score}")
print("=" * 50)
```

### Exercise 4: Bank Account Simulator

Create a file called `bank_account.py`:

```python
"""
Bank account simulator using assignment operators.
"""

# Initialize account
balance = 1000.00
transaction_count = 0

print("=" * 50)
print("BANK ACCOUNT SIMULATOR")
print("=" * 50)
print(f"Opening balance: ${balance:.2f}\n")

# Deposit
deposit = 500.00
balance += deposit
transaction_count += 1
print(f"Deposit: +${deposit:.2f}")
print(f"Balance: ${balance:.2f}\n")

# Withdrawal
withdrawal = 200.00
balance -= withdrawal
transaction_count += 1
print(f"Withdrawal: -${withdrawal:.2f}")
print(f"Balance: ${balance:.2f}\n")

# Interest (monthly)
interest_rate = 0.01  # 1% per month
interest = balance * interest_rate
balance += interest
transaction_count += 1
print(f"Interest: +${interest:.2f}")
print(f"Balance: ${balance:.2f}\n")

# Fee
fee = 10.00
balance -= fee
transaction_count += 1
print(f"Monthly fee: -${fee:.2f}")
print(f"Balance: ${balance:.2f}\n")

# Summary
print("=" * 50)
print(f"Final balance: ${balance:.2f}")
print(f"Total transactions: {transaction_count}")
print("=" * 50)
```

---

## Assignment

### Project: Financial Calculator System

Create a comprehensive program called `financial_calculator.py` that demonstrates mastery of assignment operators through financial calculations.

### Requirements

Your program should include:

#### 1. **Personal Budget Tracker**

- Track income (use +=)
- Track expenses (use -=)
- Calculate savings
- Apply percentage-based allocations
- Generate monthly summary

#### 2. **Investment Growth Calculator**

- Initial investment
- Monthly contributions (use +=)
- Annual return rate (use *=)
- Calculate compound growth over years
- Show year-by-year breakdown

#### 3. **Loan Amortization Calculator**

- Loan amount
- Interest rate
- Monthly payment (use -=)
- Calculate remaining balance
- Show payment schedule

#### 4. **Shopping Cart with Complex Discounts**

- Add/remove items
- Apply multiple discount types:
  - Percentage discounts (use *=)
  - Fixed amount discounts (use -=)
  - Buy-one-get-one deals
- Calculate tax
- Split bill among people (use /=)

#### 5. **Salary Calculator**

- Gross salary
- Deductions (use -=):
  - Federal tax
  - State tax
  - Insurance
  - Retirement contribution
- Calculate net salary
- Show monthly and yearly breakdown

#### 6. **Currency Converter**

- Convert between currencies
- Apply exchange rates (use *=)
- Apply conversion fees (use -=)
- Handle multiple conversions

#### 7. **Tip Calculator**

- Bill amount
- Tip percentage (use *=)
- Split among people (use /=)
- Round up option
- Show per-person breakdown

#### 8. **Retirement Savings Planner**

- Current age and retirement age
- Current savings
- Monthly contributions (use +=)
- Expected return (use *=)
- Calculate future value
- Determine if goal is achievable

### Code Requirements

- Use ALL assignment operators (+= -= *= /= //= %= **=)
- Demonstrate each operator at least 3 times
- Use compound operators for efficiency
- Include running totals with +=
- Show proper initialization
- Professional error handling
- Menu-driven interface
- Functions for organization
- Comments and docstrings
- Formatted currency output

### Example Output

```
╔══════════════════════════════════════════════════╗
║                                                  ║
║        FINANCIAL CALCULATOR SYSTEM               ║
║                                                  ║
╚══════════════════════════════════════════════════╝

MAIN MENU:
1. Personal Budget Tracker
2. Investment Growth Calculator
3. Loan Amortization Calculator
4. Shopping Cart with Discounts
5. Salary Calculator
6. Currency Converter
7. Tip Calculator
8. Retirement Savings Planner
9. Exit

Enter your choice (1-9): 4

════════════════════════════════════════════════════
        SHOPPING CART WITH DISCOUNTS
════════════════════════════════════════════════════

ADDING ITEMS:
────────────────────────────────────────────────────
Item 1: $29.99 added
Item 2: $49.99 added
Item 3: $19.99 added
Item 4: $39.99 added
────────────────────────────────────────────────────
Subtotal: $139.96

APPLYING DISCOUNTS:
────────────────────────────────────────────────────
Member discount (15%): -$20.99
Coupon ($10 off): -$10.00
────────────────────────────────────────────────────
After discounts: $108.97

ADDING TAX:
────────────────────────────────────────────────────
Tax (8.5%): +$9.26
────────────────────────────────────────────────────
Total: $118.23

SPLIT BILL:
────────────────────────────────────────────────────
Number of people: 3
Per person: $39.41
════════════════════════════════════════════════════
```

### Bonus Challenges (Optional)

1. **Credit Card Payment Calculator**: Minimum payment vs full payment
2. **Stock Portfolio Tracker**: Buys, sells, dividends, splits
3. **Utility Bill Splitter**: Multiple roommates, variable usage
4. **Cryptocurrency Converter**: Multiple conversions, fees
5. **Mortgage Calculator**: Principal, interest, escrow
6. **Tax Refund Estimator**: Multiple deductions and credits
7. **Business Expense Tracker**: Categories, reimbursements
8. **College Savings Calculator**: 529 plan simulation

### Submission Guidelines

- File name: `financial_calculator.py`
- Must include all 8 calculators
- Professional menu system
- Currency formatting ($X.XX)
- Input validation
- Use all assignment operators
- Well-organized with functions
- Comments and docstrings
- Test with various inputs
- Estimated time: 120-150 minutes

### Grading Criteria

- ✅ Personal budget tracker (12 points)
- ✅ Investment growth calculator (14 points)
- ✅ Loan amortization calculator (14 points)
- ✅ Shopping cart with discounts (14 points)
- ✅ Salary calculator (12 points)
- ✅ Currency converter (10 points)
- ✅ Tip calculator (10 points)
- ✅ Retirement savings planner (14 points)
- ✅ Use of all assignment operators (15 points)
- ✅ Proper initialization (5 points)
- ✅ Error handling (8 points)
- ✅ Code organization (5 points)
- ✅ Output formatting (5 points)
- ✅ Comments and documentation (5 points)
- ✅ Bonus challenges (up to 8 extra points)

**Total: 143 points (+ up to 8 bonus points)**

---

## Quick Reference

### Assignment Operators

```python
=     # Assign
+=    # Add and assign
-=    # Subtract and assign
*=    # Multiply and assign
/=    # Divide and assign
//=   # Floor divide and assign
%=    # Modulus and assign
**=   # Exponent and assign
```

### Common Patterns

```python
# Increment
count += 1

# Accumulate
total += value

# Decrement
lives -= 1

# Double
value *= 2

# Halve
value /= 2
```

---

## Summary

In this lesson, you learned:

- ✅ Simple assignment operator (=)
- ✅ All compound assignment operators (+=, -=, *=, /=, //=, %=, **=)
- ✅ How assignment operators combine operation and assignment
- ✅ Common patterns (counter, accumulator, decrement)
- ✅ Assignment with unpacking
- ✅ Chaining assignment operators
- ✅ Practical applications in various scenarios
- ✅ Common mistakes and how to avoid them

**You can now write more concise and efficient code!** Assignment operators are essential for updating variables, accumulating values, and writing cleaner code.

You have now completed the **Operators** section! Next, we'll move to **Control Flow** to learn about making decisions and repeating actions.

---

## Additional Resources

- **Python Assignment Operators:** [https://docs.python.org/3/reference/simple_stmts.html#assignment-statements](https://docs.python.org/3/reference/simple_stmts.html#assignment-statements)
- **Augmented Assignment:** [https://docs.python.org/3/reference/simple_stmts.html#augmented-assignment-statements](https://docs.python.org/3/reference/simple_stmts.html#augmented-assignment-statements)

**Next section:** [Control Flow - If, Elif, and Else Statements](conditionals)
