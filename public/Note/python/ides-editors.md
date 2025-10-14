# Python IDEs and Text Editors

Choosing the right development environment can make your Python programming experience much better. In this lesson, we'll explore different IDEs (Integrated Development Environments) and text editors, and help you set them up for Python development.

## What's the Difference?

### Text Editor

A program for writing and editing code files. It's lightweight and simple.

**Examples:** Notepad++, Sublime Text, Vim

**Pros:**

- Fast and lightweight
- Simple interface
- Good for quick edits

**Cons:**

- Limited features
- No built-in debugging
- Requires manual setup

### IDE (Integrated Development Environment)

A complete development toolkit with built-in features for coding, testing, and debugging.

**Examples:** VS Code, PyCharm, IDLE

**Pros:**

- Code completion (IntelliSense)
- Built-in debugger
- Integrated terminal
- Error highlighting
- Project management

**Cons:**

- Can be heavier/slower
- Steeper learning curve
- More complex interface

**For Python beginners, we recommend starting with VS Code** - it's the perfect balance between features and simplicity.

---

## 1. Visual Studio Code (VS Code) - RECOMMENDED

VS Code is a free, powerful, and lightweight code editor from Microsoft. It's the most popular choice for Python developers.

### Why VS Code?

- ✅ Free and open-source
- ✅ Excellent Python support
- ✅ Built-in terminal
- ✅ Git integration
- ✅ Tons of extensions
- ✅ IntelliSense (smart code completion)
- ✅ Works on Windows, Mac, and Linux
- ✅ Active community and frequent updates

### Installing VS Code

1. **Download:** Go to [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. **Install:** Run the installer for your operating system
3. **Open:** Launch VS Code

### Setting Up VS Code for Python

#### Step 1: Install the Python Extension

1. Open VS Code
2. Click the **Extensions** icon on the left sidebar (or press `Ctrl+Shift+X`)
3. Search for **"Python"**
4. Click **Install** on the extension by Microsoft

![VS Code Python Extension](../image/vscode-python-extension.png)

#### Step 2: Select Python Interpreter

1. Open any `.py` file (or create one)
2. Look at the bottom-left corner of VS Code
3. Click on the Python version shown (or "Select Interpreter")
4. Choose your Python installation (usually the highest version)

**Example:** `Python 3.11.5 64-bit`

#### Step 3: Verify Setup

1. Create a new file: `test.py`
2. Type: `print("Hello, VS Code!")`
3. Right-click in the editor → **"Run Python File in Terminal"**
4. You should see the output in the integrated terminal

### Essential VS Code Features

#### 1. IntelliSense (Auto-completion)

As you type, VS Code suggests code completions:

```python
# Start typing 'pri' and VS Code will suggest 'print'
pri
```

Press `Tab` or `Enter` to accept the suggestion.

#### 2. Syntax Highlighting

Code is colored based on what it is:

- **Blue:** Keywords (`if`, `for`, `def`)
- **Green:** Strings
- **Purple:** Functions
- **White/Gray:** Variables

#### 3. Error Detection

VS Code underlines errors before you even run the code:

```python
# Missing closing quote - VS Code will underline this
print("Hello World)
```

#### 4. Integrated Terminal

- Press `` Ctrl+` `` (backtick) to open/close the terminal
- Run Python files without leaving VS Code
- Access all terminal commands

#### 5. Code Formatting

Install the **Black** formatter:

1. Press `Ctrl+Shift+P` (Cmd+Shift+P on Mac)
2. Type: "Format Document"
3. Choose a formatter (Black is recommended)

Or install via terminal:

```bash
pip install black
```

#### 6. Debugging

Set breakpoints by clicking to the left of line numbers. Run in debug mode with `F5`.

### Useful VS Code Shortcuts

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Run file | Right-click → Run | Right-click → Run |
| Open terminal | Ctrl + ` | Cmd + ` |
| Command palette | Ctrl + Shift + P | Cmd + Shift + P |
| Save file | Ctrl + S | Cmd + S |
| Find | Ctrl + F | Cmd + F |
| Replace | Ctrl + H | Cmd + H |
| Comment line | Ctrl + / | Cmd + / |
| Multi-cursor | Alt + Click | Option + Click |
| Duplicate line | Shift + Alt + ↓ | Shift + Option + ↓ |

### Recommended VS Code Extensions for Python

1. **Python** (Microsoft) - Essential
2. **Pylance** - Enhanced Python language support
3. **Python Indent** - Better auto-indentation
4. **autoDocstring** - Generate docstrings automatically
5. **Better Comments** - Color-coded comments
6. **Error Lens** - Inline error messages
7. **Bracket Pair Colorizer** - Matching brackets in color

---

## 2. PyCharm

PyCharm is a professional Python IDE by JetBrains. It's more powerful than VS Code but also heavier.

### PyCharm Editions

- **Community Edition:** Free, open-source, perfect for learning
- **Professional Edition:** Paid, includes web development tools (Django, Flask, etc.)

**For learning Python, the Community Edition is perfect!**

### Installing PyCharm

1. **Download:** Go to [https://www.jetbrains.com/pycharm/download/](https://www.jetbrains.com/pycharm/download/)
2. Choose **Community Edition**
3. **Install:** Run the installer
4. **Open:** Launch PyCharm

### Creating a New Project in PyCharm

1. Click **"New Project"**
2. Choose a location for your project
3. Select **"Create a new virtual environment"** (recommended)
4. Click **"Create"**

### PyCharm Features

- **Smart code completion** (more advanced than VS Code)
- **Built-in debugger** with visual interface
- **Refactoring tools** (rename variables across files, extract functions, etc.)
- **Database tools** (Professional only)
- **Scientific tools** (notebooks, data viewers)
- **Version control** integration

### When to Use PyCharm

- Large, complex projects
- Professional development
- Need advanced refactoring
- Working with databases
- Data science projects

### PyCharm Shortcuts

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Run file | Shift + F10 | Ctrl + R |
| Debug | Shift + F9 | Ctrl + D |
| Find | Ctrl + F | Cmd + F |
| Search everywhere | Double Shift | Double Shift |
| Comment line | Ctrl + / | Cmd + / |
| Reformat code | Ctrl + Alt + L | Cmd + Option + L |

---

## 3. IDLE (Python's Built-in IDE)

IDLE comes bundled with Python. It's simple and perfect for absolute beginners.

### Features

- Comes with Python (no separate installation)
- Syntax highlighting
- Interactive shell
- Simple debugger
- Good for learning basics

### How to Use IDLE

1. **Open IDLE:** Search "IDLE" on your computer
2. **Interactive Mode:** Type Python commands directly
3. **Script Mode:** File → New File → Write code → Run → Run Module (F5)

### When to Use IDLE

- You're a complete beginner
- Learning Python basics
- Quick testing and experiments
- Don't want to install anything else

### IDLE Limitations

- Basic features only
- No advanced code completion
- Limited project management
- Can feel outdated

---

## 4. Jupyter Notebook

Jupyter is different from traditional editors. It's an interactive, web-based environment perfect for data science, learning, and experimentation.

### What Makes Jupyter Special?

- **Cell-based execution:** Run code in small chunks
- **Inline output:** See results immediately below code
- **Mix code and text:** Add explanations with Markdown
- **Visualizations:** Display charts and graphs inline
- **Great for learning:** Step-by-step experimentation

### Installing Jupyter

```bash
pip install notebook
```

### Running Jupyter

```bash
jupyter notebook
```

This opens Jupyter in your web browser.

### When to Use Jupyter

- Learning Python interactively
- Data analysis and visualization
- Machine learning projects
- Sharing code with explanations
- Teaching and tutorials

### Jupyter Alternatives

- **JupyterLab:** More advanced version of Jupyter
- **Google Colab:** Free Jupyter in the cloud (no installation needed)
- **VS Code:** Has built-in Jupyter notebook support

---

## 5. Sublime Text

Sublime Text is a fast, lightweight text editor with Python support through plugins.

### Features

- Extremely fast
- Multiple cursors
- Goto anything
- Split editing
- Package control (plugins)

### Installing Sublime Text

1. **Download:** [https://www.sublimetext.com/](https://www.sublimetext.com/)
2. **Install:** Run the installer
3. **Install Package Control:** Follow instructions on their website

### Setting Up for Python

1. Install Package Control
2. Install "Anaconda" plugin (Python IDE features)
3. Install "SublimeREPL" (run Python code)

### When to Use Sublime

- You want speed above all else
- You prefer minimalist interfaces
- You work with multiple languages

---

## 6. Atom

Atom is a free, open-source text editor by GitHub (now maintained by community).

**Note:** Atom was sunset by GitHub in 2022, but still works. Consider alternatives like VS Code.

### Features

- Free and open-source
- Highly customizable
- Built-in package manager
- GitHub integration

---

## 7. Thonny

Thonny is a Python IDE specifically designed for beginners.

### Features

- Designed for teaching Python
- Simple variable explorer
- Step-through debugger
- Shows how Python evaluates expressions
- No complex configuration

### Installing Thonny

Download from: [https://thonny.org/](https://thonny.org/)

### When to Use Thonny

- You're a complete beginner
- You want to understand how Python works internally
- You're teaching kids or beginners
- You want something simpler than VS Code

---

## 8. Online Python Editors (No Installation)

Sometimes you just want to code without installing anything!

### 1. **Replit**

- Website: [https://replit.com/](https://replit.com/)
- Full IDE in the browser
- Collaboration features
- Free tier available

### 2. **Python.org Shell**

- Website: [https://www.python.org/shell/](https://www.python.org/shell/)
- Simple Python shell
- No sign-up required

### 3. **Google Colab**

- Website: [https://colab.research.google.com/](https://colab.research.google.com/)
- Free Jupyter notebooks
- Free GPU access
- Google Drive integration

### 4. **Programiz Python Online**

- Website: [https://www.programiz.com/python-programming/online-compiler/](https://www.programiz.com/python-programming/online-compiler/)
- Simple online compiler
- No sign-up needed

### 5. **PyFiddle**

- Website: [https://pyfiddle.io/](https://pyfiddle.io/)
- Share Python snippets
- Quick testing

---

## Our Recommendation for Beginners

### For Complete Beginners

**Start with IDLE or Thonny**

- Simple interface
- No setup required
- Focus on learning Python, not the tools

### For Serious Learners

**Use VS Code**

- Industry standard
- Balances features and simplicity
- You'll use it professionally later
- Free and well-supported

### For Data Science

**Use Jupyter Notebook or Google Colab**

- Interactive learning
- Visualizations
- Cell-by-cell execution

### For Professional Development

**Use PyCharm**

- Advanced features
- Better for large projects
- Professional refactoring tools

---

## Configuring Your Editor

### Basic Settings (VS Code)

1. **Open Settings:** File → Preferences → Settings (or Ctrl+,)
2. **Font Size:** Search "font size" and adjust
3. **Tab Size:** Set to 4 spaces (Python standard)
4. **Auto Save:** Enable for convenience
5. **Format on Save:** Automatically format code when saving

### Python Linting (Error Checking)

Install a linter to catch errors:

**VS Code:**

1. Open Command Palette (Ctrl+Shift+P)
2. Type "Python: Select Linter"
3. Choose "pylint" or "flake8"

**Install pylint:**

```bash
pip install pylint
```

---

## Classwork

Let's practice setting up and using your chosen editor!

### Exercise 1: Environment Setup

1. Choose an IDE/editor (we recommend VS Code)
2. Install it if you haven't already
3. Install the Python extension/plugin
4. Create a test file and run it successfully

### Exercise 2: Explore Features

Using your chosen editor:

1. Create a new file called `editor_test.py`
2. Write this code:

    ```python
    # Test auto-completion
    print("Testing auto-completion")

    # Test syntax highlighting
    name = "Python"
    age = 32

    # Test error detection (this has an error - can your editor spot it?)
    print("Hello World)
    ```

3. Fix the error your editor detects
4. Run the file successfully

### Exercise 3: Shortcuts Practice

1. Use keyboard shortcuts to:
   - Save your file
   - Comment/uncomment a line
   - Open the integrated terminal
   - Run your Python file
2. Write down the shortcuts that work in your editor

### Exercise 4: Customization

Customize your editor:

1. Change the color theme (choose one you like)
2. Adjust the font size (make it comfortable to read)
3. Enable auto-save (if available)
4. Install one useful extension/plugin

---

## Assignment

### Project: Editor Comparison Report

Create a document (or Python comment file) called `my_editor_choice.py` where you:

### Part 1: Research (20 minutes)

Try at least **TWO different editors** from this lesson:

- Create a simple Python file in each
- Run a basic program
- Note what you like and dislike about each

### Part 2: Write Your Report

In comments or a separate document, answer:

1. **Which editors did you try?**
2. **What features did you like most?**
3. **What was confusing or difficult?**
4. **Which editor will you use for this course and why?**
5. **What keyboard shortcuts did you learn?**

### Part 3: Create a Setup Guide

Write a short setup guide (in comments) for your chosen editor that includes:

- How to create a new Python file
- How to run Python code
- At least 3 useful keyboard shortcuts
- One customization you made

### Example Format

```python
"""
MY PYTHON EDITOR COMPARISON

Editors Tried:
1. VS Code
2. IDLE

=================================
VS CODE REVIEW
=================================
Things I Liked:
- Auto-completion helped me type faster
- Terminal is built-in
- Pretty syntax highlighting

Things I Found Difficult:
- Many options in settings
- Needed to install extension first

=================================
IDLE REVIEW
=================================
Things I Liked:
- Already installed with Python
- Simple and not overwhelming
- Easy to start immediately

Things I Found Difficult:
- No auto-completion
- Interface looks old
- Can't split screen

=================================
MY CHOICE: VS Code
=================================
Reason: Better features for long-term learning, 
and I'll use it for web development later.

=================================
MY VS CODE SETUP GUIDE
=================================
1. Create new file: Ctrl+N, then save as .py
2. Run code: Right-click → Run Python File in Terminal
3. Shortcuts I learned:
   - Ctrl+S: Save
   - Ctrl+/: Comment line
   - Ctrl+`: Open terminal
   - Ctrl+Shift+P: Command palette

Customization: Changed theme to "Dark+ (default dark)"
"""
```

**Submission Requirements:**

- Try at least 2 editors
- Be specific about features
- Include keyboard shortcuts
- Total time: 45-60 minutes

---

## Tips for Choosing Your Editor

### Choose VS Code if

- ✅ You want industry-standard tools
- ✅ You plan to learn web development
- ✅ You like customization
- ✅ You want a good balance of features

### Choose PyCharm if

- ✅ You're serious about Python development
- ✅ You don't mind a learning curve
- ✅ You want advanced refactoring
- ✅ You're building large projects

### Choose IDLE if

- ✅ You're a complete beginner
- ✅ You want immediate simplicity
- ✅ You're just learning basics
- ✅ You don't want complexity

### Choose Jupyter if

- ✅ You're learning data science
- ✅ You like interactive coding
- ✅ You want to see output immediately
- ✅ You're doing analysis or visualization

### Choose Thonny if

- ✅ You're teaching kids/beginners
- ✅ You want to understand Python internals
- ✅ You want the simplest option
- ✅ You're new to programming entirely

---

## Summary

In this lesson, you learned:

- ✅ The difference between text editors and IDEs
- ✅ Popular Python development environments
- ✅ How to set up VS Code for Python (recommended)
- ✅ Features of different editors (PyCharm, IDLE, Jupyter, etc.)
- ✅ Online Python editors for quick coding
- ✅ How to customize your development environment
- ✅ Keyboard shortcuts for efficiency
- ✅ How to choose the right editor for your needs

**Remember:** The best editor is the one you're comfortable with! Don't spend too much time switching—pick one and master it.

---

## Additional Resources

- **VS Code Python Tutorial:** [https://code.visualstudio.com/docs/python/python-tutorial](https://code.visualstudio.com/docs/python/python-tutorial)
- **PyCharm Getting Started:** [https://www.jetbrains.com/pycharm/learn/](https://www.jetbrains.com/pycharm/learn/)
- **Jupyter Documentation:** [https://jupyter.org/documentation](https://jupyter.org/documentation)
- **Python IDEs Comparison:** [https://realpython.com/python-ides-code-editors-guide/](https://realpython.com/python-ides-code-editors-guide/)

**Next lesson:** [Variables and Data Types](variables-datatypes)
