# Installing Python

Before you can start writing Python code, you need to install Python on your computer. This guide will walk you through the installation process for Windows, macOS, and Linux.

## Checking If Python Is Already Installed

Many computers (especially Mac and Linux) come with Python pre-installed. Let's check if you already have it!

### Step 1: Open Your Terminal/Command Prompt

**Windows:**

- Press `Win + R`
- Type `cmd` and press Enter

**macOS:**

- Press `Cmd + Space`
- Type `terminal` and press Enter

**Linux:**

- Press `Ctrl + Alt + T`
- Or search for "Terminal" in your applications

### Step 2: Check Python Version

Type this command and press Enter:

```bash
python --version
```

Or try:

```bash
python3 --version
```

**If you see something like:**

```
Python 3.11.5
```

Congratulations! Python is already installed. Make sure it's **Python 3.8 or higher**.

**If you see an error** or Python 2.x, continue with the installation steps below.

---

## Installing Python on Windows

### Step 1: Download Python

1. Go to the official Python website: [https://www.python.org/downloads/](https://www.python.org/downloads/)
2. Click the yellow **"Download Python 3.x.x"** button (it will show the latest version)
3. The download should start automatically

### Step 2: Run the Installer

1. Open the downloaded `.exe` file
2. **IMPORTANT:** Check the box that says **"Add Python to PATH"** at the bottom
3. Click **"Install Now"**

![Windows Installation](../image/python-install-windows.png)

### Step 3: Verify Installation

1. Open Command Prompt (Win + R, type `cmd`, press Enter)
2. Type: `python --version`
3. You should see: `Python 3.x.x`

### Step 4: Verify pip (Package Manager)

Type:

```bash
pip --version
```

You should see something like:

```bash
pip 23.2.1 from C:\Python311\lib\site-packages\pip (python 3.11)
```

**pip** is Python's package manager—it helps you install libraries and frameworks.

### Troubleshooting Windows

**Problem:** `python` command not recognized

**Solution:**

1. Reopen Command Prompt (close and open again)
2. If still not working, you need to add Python to PATH manually:
   - Search "Environment Variables" in Windows
   - Click "Environment Variables"
   - Under "System variables", find "Path"
   - Click "Edit" and add Python's installation path (usually `C:\Python311\`)

---

## Installing Python on macOS

### Step 1: Download Python

1. Go to: [https://www.python.org/downloads/](https://www.python.org/downloads/)
2. Click **"Download Python 3.x.x"** for macOS
3. Download the `.pkg` installer

### Step 2: Run the Installer

1. Open the downloaded `.pkg` file
2. Follow the installation wizard
3. Click "Continue" → "Agree" → "Install"
4. Enter your Mac password if prompted

### Step 3: Verify Installation

1. Open Terminal (Cmd + Space, type "terminal")
2. Type: `python3 --version`
3. You should see: `Python 3.x.x`

**Note:** On macOS, use `python3` instead of `python` to ensure you're using Python 3.

### Step 4: Verify pip

Type:

```bash
pip3 --version
```

### Troubleshooting macOS

**Problem:** Command not found

**Solution:**

1. Make sure you're using `python3` not `python`
2. If still not working, reinstall Python with the official installer

---

## Installing Python on Linux

Most Linux distributions come with Python 3 pre-installed. Let's verify and update if needed.

### For Ubuntu/Debian

#### Check if Python 3 is installed

```bash
python3 --version
```

#### If not installed or outdated

```bash
sudo apt update
sudo apt install python3
```

#### Install pip

```bash
sudo apt install python3-pip
```

### For Fedora

```bash
sudo dnf install python3
sudo dnf install python3-pip
```

### For Arch Linux

```bash
sudo pacman -S python python-pip
```

### Verify Installation

```bash
python3 --version
pip3 --version
```

---

## Understanding Python Commands

After installation, you'll use these commands:

### Windows

```bash
python          # Run Python interpreter
python script.py  # Run a Python file
pip             # Install packages
```

### macOS/Linux

```bash
python3         # Run Python interpreter
python3 script.py # Run a Python file
pip3            # Install packages
```

**Tip:** On macOS/Linux, you can create an alias for convenience:

```bash
alias python=python3
alias pip=pip3
```

---

## Testing Your Installation

Let's make sure everything works! Open your terminal/command prompt and type:

```bash
python
```

Or on macOS/Linux:

```bash
python3
```

You should see something like:

```bash
Python 3.11.5 (main, Sep 11 2023, 13:54:46)
[GCC 11.2.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

The `>>>` is Python's **interactive prompt**. You're now inside Python!

### Try Your First Python Command

Type this and press Enter:

```python
print("Hello, Python!")
```

You should see:

```bash
Hello, Python!
```

🎉 **Congratulations!** Python is working!

### Exit the Python Interpreter

To exit, type:

```python
exit()
```

Or press `Ctrl + D` (Mac/Linux) or `Ctrl + Z` then Enter (Windows).

---

## What is pip?

**pip** is Python's package installer. It allows you to install thousands of third-party libraries.

### Basic pip Commands

```bash
# Install a package
pip install package_name

# Install a specific version
pip install package_name==1.2.3

# Upgrade a package
pip install --upgrade package_name

# Uninstall a package
pip uninstall package_name

# List installed packages
pip list

# Show package information
pip show package_name
```

**Example:** Install the popular `requests` library:

```bash
pip install requests
```

---

## Updating Python

### Check for Updates

Visit [https://www.python.org/downloads/](https://www.python.org/downloads/) to see if there's a newer version.

### Windows/macOS

Download and run the latest installer. It will update your existing installation.

### Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt upgrade python3
```

---

## Setting Up a Code Editor

Now that Python is installed, you'll need a place to write your code. While you can use any text editor, here are some popular options:

### 1. **Visual Studio Code (Recommended)**

- Free and powerful
- Excellent Python support
- Built-in terminal
- Download: [https://code.visualstudio.com/](https://code.visualstudio.com/)

**After installing VS Code:**

1. Install the Python extension (search "Python" in Extensions)
2. VS Code will automatically detect your Python installation

### 2. **PyCharm**

- Professional Python IDE
- Great for larger projects
- Free Community Edition available
- Download: [https://www.jetbrains.com/pycharm/](https://www.jetbrains.com/pycharm/)

### 3. **IDLE**

- Comes bundled with Python
- Simple and lightweight
- Good for beginners
- Already installed! Search "IDLE" on your computer

### 4. **Sublime Text**

- Fast and lightweight
- Minimalist interface
- Download: [https://www.sublimetext.com/](https://www.sublimetext.com/)

### 5. **Jupyter Notebook**

- Interactive coding environment
- Great for data science and learning
- Install with: `pip install notebook`
- Run with: `jupyter notebook`

**For this course, we recommend VS Code** due to its balance of features and simplicity.

---

## Quick Setup Checklist

Before moving to the next lesson, make sure you have:

- ✅ Python 3.8 or higher installed
- ✅ `python --version` (or `python3 --version`) works in terminal
- ✅ `pip --version` (or `pip3 --version`) works
- ✅ Successfully ran `print("Hello, Python!")` in the interpreter
- ✅ A code editor installed (VS Code recommended)

---

## Common Installation Issues

### Issue 1: "Python is not recognized as a command"

**Solution:** Python is not in your PATH. 

- **Windows:** Re-run installer and check "Add Python to PATH"

- **macOS/Linux:** Use `python3` instead of `python`

### Issue 2: "Permission denied" on Linux

**Solution:** Use `sudo` before the command:

```bash
sudo apt install python3
```

### Issue 3: Multiple Python versions installed

**Solution:** Specify the version:

```bash
python3.11 --version
```

### Issue 4: pip not working

**Solution:** 

```bash
python -m pip --version
```

Or reinstall pip:

```bash
python -m ensurepip --upgrade
```

---

## Summary

You've successfully installed Python! Here's what you learned:

- How to download and install Python on any operating system
- How to verify your installation
- What pip is and how to use it
- How to run Python in the interactive interpreter
- Recommended code editors for Python development

**Next up:** We'll write and run your first Python program in a file!

---

## Need Help?

If you're having trouble with installation:

- **Python Documentation:** [https://docs.python.org/3/](https://docs.python.org/3/)
- **Python Discord:** Search "Python Discord" for community help
- **Stack Overflow:** Search your specific error message
- **r/learnpython:** Reddit community for Python beginners

**Next lesson:** [Your First Python Program](first-program.md)