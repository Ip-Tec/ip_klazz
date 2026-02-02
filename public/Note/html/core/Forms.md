### **Chapter 4: Day 4**
**Objectives:** Learn to create interactive web forms, understand the importance of accessibility in forms, and implement basic client-side validation.

---

### **Lesson: Forms and Input Types**
**Explanation:**
Forms are the primary way users interact with and submit data to a website. They are essential for logins, registrations, searches, contact pages, and more. A form is created with the `<form>` element, which acts as a container for various input elements.

The `<input>` element is the most versatile form control. Its behavior changes dramatically based on its `type` attribute:

*   **Common Input Types:**
    *   `text`: For single-line text input (e.g., username).
    *   `password`: Hides the input characters (e.g., for passwords).
    *   `email`: Validates that the input is a properly formatted email address.
    *   `number`: For numerical input, often with spin buttons.
    *   `checkbox`: For multiple selections (e.g., "select all that apply").
    *   `radio`: For single selection from multiple options (e.g., "choose one").
    *   `submit`: A button that submits the form data to a server.
    *   `button`: A generic clickable button.
    *   `date`: Provides a date picker.

*   **Other Important Form Elements:**
    *   `<select>`: Creates a dropdown list. Options are defined with `<option>` tags.
    *   `<textarea>`: For multi-line text input (e.g., comments, messages).
    *   `<button>`: Similar to `<input type="button">`, but more flexible as it can contain other HTML.

**Code Example:**
```html
<form action="/submit-form" method="POST">
  <p>Text Input:</p>
  <input type="text" name="username" placeholder="Enter your username">

  <p>Email Input:</p>
  <input type="email" name="user-email" required>

  <p>Password Input:</p>
  <input type="password" name="user-password">

  <p>Dropdown Select:</p>
  <select name="country">
    <option value="usa">United States</option>
    <option value="ca">Canada</option>
    <option value="uk">United Kingdom</option>
  </select>

  <p>Checkboxes (Multiple Selection):</p>
  <input type="checkbox" name="interest" value="html" id="interest-html">
  <label for="interest-html">HTML</label><br>
  <input type="checkbox" name="interest" value="css" id="interest-css">
  <label for="interest-css">CSS</label>

  <p>Radio Buttons (Single Selection):</p>
  <input type="radio" name="gender" value="male" id="gender-male">
  <label for="gender-male">Male</label><br>
  <input type="radio" name="gender" value="female" id="gender-female">
  <label for="gender-female">Female</label>

  <p>Textarea:</p>
  <textarea name="message" rows="4" cols="50" placeholder="Your message here..."></textarea>

  <br><br>
  <input type="submit" value="Send Data">
</form>
```

**Practice Task:**
Create a file called `form-practice.html`.
1.  Create a form with `action="#"` and `method="POST"`.
2.  Add fields for a user's full name (text), email (email), and phone number (tel).
3.  Add a dropdown (`<select>`) for them to choose their age range (e.g., 0-17, 18-25, 26-40, 40+).
4.  Add a set of radio buttons for them to select their preferred contact method (Email, Phone, SMS).
5.  Add a checkbox for them to agree to terms and conditions.
6.  Add a submit button.

---

### **Lesson: Labels and Fieldsets**
**Explanation:**
Creating accessible forms is not just good practice—it's essential. Properly labeled forms are usable by everyone, including people who rely on screen readers.

*   **The `<label>` Element:**
    *   A label describes the purpose of a form field.
    *   **Why it's important:** Clicking on the label focuses the associated input field. This is especially helpful for small checkboxes and radio buttons.
    *   **How to use it:** Use the `for` attribute on the `<label>` tag. Its value must match the `id` of the associated input field.
    *   Alternatively, you can nest the `<input>` inside the `<label>`.

*   **The `<fieldset>` and `<legend>` Elements:**
    *   A `<fieldset>` is used to group related form controls together. It draws a box around them.
    *   The `<legend>` tag provides a caption for the `<fieldset>`.
    *   **Why it's important:** It provides a visual and semantic grouping, making complex forms much easier to understand and navigate.

**Code Example:**
```html
<form action="#" method="POST">
  <!-- Using the 'for' and 'id' association -->
  <label for="fname">First Name:</label>
  <input type="text" id="fname" name="fname"><br><br>

  <!-- Nesting the input inside the label -->
  <label>Last Name:
    <input type="text" name="lname">
  </label><br><br>

  <!-- Using Fieldset and Legend -->
  <fieldset>
    <legend>Shipping Address</legend>

    <label for="street">Street:</label>
    <input type="text" id="street" name="street"><br><br>

    <label for="city">City:</label>
    <input type="text" id="city" name="city"><br><br>

    <label for="zip">ZIP Code:</label>
    <input type="text" id="zip" name="zip">
  </fieldset>

  <input type="submit" value="Submit">
</form>
```

**Practice Task:**
Modify your `form-practice.html` file.
1.  Add proper `<label>` elements for every single input, dropdown, radio button, and checkbox. Use the `for` and `id` method.
2.  Group the radio buttons for "Preferred Contact Method" inside a `<fieldset>` with an appropriate `<legend>`.
3.  Group the personal details (name, email, phone) inside another `<fieldset>`.

---

### **Lesson: Form Validation**
**Explanation:**
Form validation is the process of ensuring that user input is correct and complete before it's submitted. HTML5 provides built-in client-side validation using attributes on form elements. This catches errors early and provides immediate feedback to the user.

*   **Common Validation Attributes:**
    *   `required`: Specifies that a field must be filled out before submitting the form.
    *   `minlength` / `maxlength`: Specifies the minimum and maximum number of characters (for text inputs).
    *   `min` / `max`: Specifies the minimum and maximum values (for number inputs).
    *   `pattern`: Specifies a regular expression that the input's value must match (e.g., for a specific password format).
    *   `type="email"` / `type="url"`: The browser automatically checks if the input matches the expected format.

*   **How it works:** When a user tries to submit a form with invalid data, the browser automatically shows a default error message and stops the submission. The `:invalid` CSS pseudo-class is also applied to the element, allowing you to style it.

**Code Example:**
```html
<form action="#" method="POST">
  <label for="user">Username (required, at least 4 chars):</label>
  <input type="text" id="user" name="user" required minlength="4"><br><br>

  <label for="email">Email (must be valid format):</label>
  <input type="email" id="email" name="email" required><br><br>

  <label for="pass">Password (must be 8+ chars, contain a number):</label>
  <input type="password" id="pass" name="pass" required minlength="8" pattern=".*\d.*" title="Must contain at least one number"><br><br>

  <label for="age">Age (must be between 18 and 120):</label>
  <input type="number" id="age" name="age" min="18" max="120"><br><br>

  <input type="submit" value="Register">
</form>
```

**Practice Task:**
Enhance the validation on your `form-practice.html` form.
1.  Make the "Full Name," "Email," and "Agree to Terms" fields `required`.
2.  Set the "Phone Number" field to have a `pattern` attribute that enforces a simple format (e.g., `pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"` for 123-456-7890). Add a `title` attribute explaining the format.
3.  Test your form by trying to submit it with invalid or missing data. Observe the browser's default validation messages.

---

### **Homework:**
Create a comprehensive "User Registration" form in a file named `register.html`.
1.  The form must use a `POST` method and have an action of `#`.
2.  It must include fields for:
    *   Personal Details (in a fieldset): First Name (required), Last Name (required), Date of Birth (use `type="date"`).
    *   Account Details (in a fieldset): Email (required, type email), Password (required, minlength 8), Confirm Password (required). *Note: HTML5 cannot check if passwords match; this requires JavaScript.*
    *   A dropdown to select a security question and a text field for the answer.
    *   A checkbox to agree to the terms and conditions (required).
3.  **Crucially, every single field must have a properly associated `<label>` element.**
4.  Implement HTML5 validation on all appropriate fields (required, email format, password length).
5.  Style the form with a simple CSS rule to put a red border around input fields when they are invalid (using `input:invalid { border: 1px solid red; }`).