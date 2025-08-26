### **Chapter 12: Day 12**
**Objectives:** Master advanced table techniques, learn to merge cells for complex data presentation, and implement accessibility best practices for tabular data.

---

### **Lesson: Tables with Styling**
**Explanation:**
While HTML provides the structure for tables, CSS is used to make them visually appealing and easier to read. Proper styling can significantly improve the usability and aesthetics of tabular data. Modern CSS techniques allow for responsive, accessible, and attractive tables.

**Key Styling Techniques:**
1. **Border Management:** Using `border-collapse` and `border-spacing` for clean borders
2. **Zebra Striping:** Alternating row colors for better readability
3. **Hover Effects:** Highlighting rows or cells on hover
4. **Responsive Design:** Making tables work on mobile devices
5. **Typography:** Adjusting font sizes, weights, and alignment for clarity

**Code Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Styled Tables</title>
    <style>
        /* Basic table reset */
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 20px 0;
            font-family: Arial, sans-serif;
        }
        
        /* Zebra striping */
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        
        /* Header styling */
        th {
            background-color: #4361ee;
            color: white;
            text-align: left;
            padding: 12px 15px;
            position: sticky;
            top: 0;
        }
        
        /* Cell styling */
        td {
            padding: 10px 15px;
            border-bottom: 1px solid #ddd;
        }
        
        /* Hover effects */
        tr:hover {
            background-color: #f1f1f1;
            transition: background-color 0.3s;
        }
        
        /* Caption styling */
        caption {
            font-weight: bold;
            font-size: 1.2em;
            margin-bottom: 10px;
            caption-side: top;
            text-align: left;
        }
        
        /* Responsive table container */
        .table-container {
            overflow-x: auto;
            max-width: 100%;
        }
        
        /* Special cell highlighting */
        .highlight {
            background-color: #ffdd00;
            font-weight: bold;
        }
        
        /* Custom alignment */
        .number {
            text-align: right;
            font-family: monospace;
        }
        
        .center {
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Styled Tables</h1>
    
    <div class="table-container">
        <table>
            <caption>Employee Sales Report - Q1 2023</caption>
            <thead>
                <tr>
                    <th>Employee</th>
                    <th>Department</th>
                    <th class="number">January</th>
                    <th class="number">February</th>
                    <th class="number">March</th>
                    <th class="number">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John Smith</td>
                    <td>Sales</td>
                    <td class="number">$12,450</td>
                    <td class="number">$15,670</td>
                    <td class="number highlight">$18,990</td>
                    <td class="number">$47,110</td>
                </tr>
                <tr>
                    <td>Sarah Johnson</td>
                    <td>Marketing</td>
                    <td class="number">$8,720</td>
                    <td class="number">$9,540</td>
                    <td class="number">$11,230</td>
                    <td class="number">$29,490</td>
                </tr>
                <tr>
                    <td>Michael Brown</td>
                    <td>Sales</td>
                    <td class="number">$14,380</td>
                    <td class="number highlight">$16,750</td>
                    <td class="number">$15,420</td>
                    <td class="number">$46,550</td>
                </tr>
                <tr>
                    <td>Emily Davis</td>
                    <td>Operations</td>
                    <td class="number">$6,540</td>
                    <td class="number">$7,810</td>
                    <td class="number">$8,950</td>
                    <td class="number">$23,300</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="2">Quarter Total</td>
                    <td class="number">$42,090</td>
                    <td class="number">$49,770</td>
                    <td class="number">$54,590</td>
                    <td class="number">$146,450</td>
                </tr>
            </tfoot>
        </table>
    </div>
</body>
</html>
```

**Practice Task:**
Create a styled table with:
1. Zebra striping for rows
2. A sticky header with a different background color
3. Hover effects on rows
4. Special formatting for numeric columns (right-aligned, monospace font)
5. A caption above the table
6. A footer with summary data
7. A container that enables horizontal scrolling on small screens

---

### **Lesson: Merging Cells**
**Explanation:**
Cell merging allows you to create more complex table structures by spanning cells across multiple rows or columns. This is useful for grouping related data, creating headers for multiple columns, or reducing repetition in tables.

**Key Concepts:**
1. **colspan:** Merges cells horizontally (across columns)
2. **rowspan:** Merges cells vertically (across rows)
3. **Proper Planning:** Requires careful planning of table structure
4. **Accessibility Considerations:** Screen readers need to understand merged cells

**Code Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Merging Cells</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 20px 0;
        }
        
        th, td {
            border: 1px solid #ddd;
            padding: 8px 12px;
            text-align: center;
        }
        
        th {
            background-color: #f2f2f2;
        }
        
        .header-cell {
            background-color: #4361ee;
            color: white;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Merging Cells in Tables</h1>
    
    <h2>Class Schedule</h2>
    <table>
        <tr>
            <th rowspan="2">Time</th>
            <th colspan="5">Days</th>
        </tr>
        <tr>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
        </tr>
        <tr>
            <td>9:00-10:00</td>
            <td>Math</td>
            <td>English</td>
            <td rowspan="2">Science Lab</td>
            <td>History</td>
            <td>Art</td>
        </tr>
        <tr>
            <td>10:00-11:00</td>
            <td>English</td>
            <td>Math</td>
            <td>Geography</td>
            <td>Music</td>
        </tr>
        <tr>
            <td>11:00-12:00</td>
            <td colspan="5" class="header-cell">Lunch Break</td>
        </tr>
        <tr>
            <td>12:00-1:00</td>
            <td>Physics</td>
            <td>Chemistry</td>
            <td>Biology</td>
            <td>Physics</td>
            <td rowspan="2">PE</td>
        </tr>
        <tr>
            <td>1:00-2:00</td>
            <td>Chemistry</td>
            <td>Biology</td>
            <td>Physics</td>
            <td>Chemistry</td>
        </tr>
    </table>
    
    <h2>Team Roster</h2>
    <table>
        <tr>
            <th rowspan="2">Team</th>
            <th colspan="3">Players</th>
        </tr>
        <tr>
            <th>Starter</th>
            <th>Backup</th>
            <th>Rookie</th>
        </tr>
        <tr>
            <td rowspan="2">Dragons</td>
            <td>John Smith</td>
            <td>Mike Johnson</td>
            <td>Tom Wilson</td>
        </tr>
        <tr>
            <td>Sarah Brown</td>
            <td>Emily Davis</td>
            <td>Alex Lee</td>
        </tr>
        <tr>
            <td rowspan="2">Tigers</td>
            <td>Robert Taylor</td>
            <td>Jennifer White</td>
            <td>David Clark</td>
        </tr>
        <tr>
            <td>Lisa Martin</td>
            <td>Paul Anderson</td>
            <td>Jessica Garcia</td>
        </tr>
    </table>
</body>
</html>
```

**Practice Task:**
Create a complex table using both colspan and rowspan that represents:
1. A weekly schedule with time slots and activities
2. A organizational chart with departments and team members
3. Ensure the table is properly structured and accessible
4. Use appropriate styling to make the merged cells visually distinct

---

### **Lesson: Table Accessibility**
**Explanation:**
Accessible tables are crucial for users who rely on screen readers or other assistive technologies. Proper semantic markup and ARIA attributes help convey the structure and relationships within tabular data.

**Key Accessibility Features:**
1. **Caption:** Provides a title or summary of the table's purpose
2. **Scope Attribute:** Defines whether headers apply to rows, columns, or groups
3. **Headers Attribute:** Associates data cells with their corresponding headers
4. **ARIA Roles:** Additional semantic information for complex tables
5. **Summary:** A detailed description of the table's content (though deprecated in HTML5, alternatives exist)

**Code Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Accessible Tables</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 20px 0;
        }
        
        th, td {
            border: 1px solid #ddd;
            padding: 8px 12px;
        }
        
        th {
            background-color: #f2f2f2;
            font-weight: bold;
        }
        
        caption {
            font-weight: bold;
            font-size: 1.2em;
            margin-bottom: 10px;
            text-align: left;
        }
        
        .visually-hidden {
            position: absolute;
            width: 1px;
            height: 1px;
            margin: -1px;
            padding: 0;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            border: 0;
        }
    </style>
</head>
<body>
    <h1>Accessible Tables</h1>
    
    <h2>Simple Accessible Table</h2>
    <table>
        <caption>Monthly Expenses</caption>
        <!-- Hide the summary from visual users but keep it for screen readers -->
        <span class="visually-hidden">This table shows monthly expenses for January through March 2023, categorized by type</span>
        <thead>
            <tr>
                <th scope="col">Category</th>
                <th scope="col">January</th>
                <th scope="col">February</th>
                <th scope="col">March</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Housing</th>
                <td>$1,200</td>
                <td>$1,200</td>
                <td>$1,200</td>
            </tr>
            <tr>
                <th scope="row">Food</th>
                <td>$400</td>
                <td>$450</td>
                <td>$420</td>
            </tr>
            <tr>
                <th scope="row">Transportation</th>
                <td>$150</td>
                <td>$180</td>
                <td>$160</td>
            </tr>
            <tr>
                <th scope="row">Entertainment</th>
                <td>$100</td>
                <td>$120</td>
                <td>$90</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th scope="row">Total</th>
                <td>$1,850</td>
                <td>$1,950</td>
                <td>$1,870</td>
            </tr>
        </tfoot>
    </table>
    
    <h2>Complex Accessible Table</h2>
    <table>
        <caption>Employee Skills Matrix</caption>
        <span class="visually-hidden">This table shows employee skills ratings across different technologies</span>
        <thead>
            <tr>
                <th scope="col" rowspan="2">Employee</th>
                <th scope="colgroup" colspan="3">Frontend</th>
                <th scope="colgroup" colspan="2">Backend</th>
            </tr>
            <tr>
                <th scope="col">HTML/CSS</th>
                <th scope="col">JavaScript</th>
                <th scope="col">React</th>
                <th scope="col">Node.js</th>
                <th scope="col">Python</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">John Smith</th>
                <td>Advanced</td>
                <td>Intermediate</td>
                <td>Beginner</td>
                <td>Advanced</td>
                <td>Intermediate</td>
            </tr>
            <tr>
                <th scope="row">Sarah Johnson</th>
                <td>Advanced</td>
                <td>Advanced</td>
                <td>Advanced</td>
                <td>Intermediate</td>
                <td>Beginner</td>
            </tr>
            <tr>
                <th scope="row">Michael Brown</th>
                <td>Intermediate</td>
                <td>Intermediate</td>
                <td>Intermediate</td>
                <td>Advanced</td>
                <td>Advanced</td>
            </tr>
        </tbody>
    </table>
    
    <h2>Table with headers attribute</h2>
    <table>
        <caption>Product Inventory</caption>
        <thead>
            <tr>
                <th id="product">Product</th>
                <th id="category">Category</th>
                <th id="price">Price</th>
                <th id="stock">In Stock</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td headers="product">Laptop X1</td>
                <td headers="category">Electronics</td>
                <td headers="price">$999</td>
                <td headers="stock">Yes</td>
            </tr>
            <tr>
                <td headers="product">Desk Chair</td>
                <td headers="category">Furniture</td>
                <td headers="price">$199</td>
                <td headers="stock">No</td>
            </tr>
            <tr>
                <td headers="product">Wireless Mouse</td>
                <td headers="category">Electronics</td>
                <td headers="price">$49</td>
                <td headers="stock">Yes</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
```

**Practice Task:**
Create an accessible table with:
1. A proper caption and summary (using visually-hidden text)
2. Appropriate scope attributes for all headers
3. Both simple and complex header structures
4. A headers/id association for at least one complex table
5. Test your table with a screen reader to ensure it's accessible

---

### **Homework:**
Create a comprehensive data report that demonstrates all the table techniques covered in this chapter:

1. **Financial Report Table:**
   - Use colspan and rowspan for multi-level headers
   - Implement zebra striping and hover effects
   - Ensure proper alignment of numeric data
   - Include a summary row with totals

2. **Accessibility Features:**
   - Add a descriptive caption
   - Use proper scope attributes
   - Include a hidden summary for screen readers
   - Test with a screen reader

3. **Responsive Design:**
   - Make the table scroll horizontally on small screens
   - Ensure the header remains visible when scrolling

4. **Documentation:**
   - Include comments explaining your accessibility choices
   - Write a brief explanation of how you ensured the table is accessible

Submit your completed table as an HTML file with embedded CSS.