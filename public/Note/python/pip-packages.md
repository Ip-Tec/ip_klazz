# pip and Installing Packages

## Introduction

While Python's standard library is powerful, the Python ecosystem truly shines with its vast collection of **third-party packages**. These are libraries, frameworks, and tools developed by the community that you can add to your projects to gain new functionality.

To manage these external packages, we use **pip**, the official **P**ackage **I**nstaller for **P**ython. Think of **pip** as a gateway to a massive library of code that you can instantly pull into your project.

---

## What is **pip**?

**pip** is a command-line tool that allows you to find, install, and manage third-party packages from the **Python Package Index (PyPI)**. PyPI is a public repository that hosts over 350,000 Python projects.

### Key **pip** Functions

- **Install** packages from PyPI.
- **Uninstall** packages you no longer need.
- **Upgrade** packages to their latest versions.
- **List** all packages installed in your environment.
- **Manage** project dependencies with a **requirements.txt** file.

**pip** comes bundled with Python versions 3.4 and later, so you likely already have it installed.

### Checking Your **pip** Version

To make sure **pip** is installed and to see its version, open your terminal or command prompt and run:

```bash
# On Windows
py -m pip --version

# On macOS/Linux
python3 -m pip --version
```

Using **py -m** or **python3 -m** is a best practice, as it ensures you are using the **pip** that corresponds to your Python installation.

---

## Installing a Package

The most common **pip** command is **install**. It downloads a package from PyPI and makes it available to your project.

### Syntax

```bash
pip install package_name
```

### Example: Installing **requests**

Let's install **requests**, a popular library for making HTTP requests.

```bash
pip install requests
```

When you run this, **pip** does the following:

1. Connects to PyPI to find the **requests** package.
2. Downloads the package files.
3. Installs any other packages that **requests** depends on (its **dependencies**), like **urllib3** and **certifi**.
4. Places all the files in your Python environment's **site-packages** directory.

### Installing a Specific Version

Sometimes, your project requires a specific version of a library. You can specify this using comparison operators.

```bash
# Install an exact version
pip install requests==2.25.1

# Install a version greater than or equal to a specific version
pip install "requests>=2.20.0"

# Install a version that is compatible with a major version
pip install "requests~=2.25.0"
```

---

## Managing Installed Packages

Once packages are installed, you need a way to manage them.

### Listing Packages with **pip list**

To see every package installed in your current environment, along with its version, use **pip list**.

```bash
pip list
```

**Output (example):**

```
Package            Version
------------------ ---------
certifi            2021.10.8
idna               3.3
pip                21.3.1
requests           2.26.0
setuptools         58.2.0
urllib3            1.26.7
```

### Upgrading a Package with **--upgrade**

To update a package to its latest version on PyPI, use the **--upgrade** flag.

```bash
pip install --upgrade requests
```

**pip** will check for a newer version and, if one exists, it will uninstall the old one and install the new one.

### Uninstalling a Package

If you no longer need a package, you can remove it with **pip uninstall**.

```bash
pip uninstall requests
```

**pip** will show you the files it's going to remove and ask for confirmation (**y/n**).

---

## Managing Project Dependencies with **requirements.txt**

When you work on a project, you should keep a record of its dependencies. This allows other developers (or you, on a different computer) to set up the exact same environment. The standard way to do this is with a **requirements.txt** file.

### Freezing Dependencies with **pip freeze**

The **pip freeze** command outputs all packages and their exact versions installed in the current environment.

```bash
pip freeze
```

**Output:**

```
certifi==2021.10.8
idna==3.3
requests==2.26.0
urllib3==1.26.7
```

You can save this output directly to a file:

```bash
pip freeze > requirements.txt
```

This creates a **requirements.txt** file that serves as a complete list of your project's dependencies.

### Installing from **requirements.txt**

When someone else wants to work on your project, they can use this file to install all the necessary packages in one command.

```bash
pip install -r requirements.txt
```

This command tells **pip** to read the **requirements.txt** file (**-r** stands for "requirement") and install every package listed inside it. This makes setting up a project simple and reliable.

---

## Common Mistakes

### 1. Installing Packages Globally

A very common mistake is to install all your packages into your main system's Python installation. This can lead to version conflicts between projects.
**Solution:** Always use **virtual environments** to keep each project's dependencies isolated.

### 2. Forgetting to Update **requirements.txt**

If you install a new package but forget to add it to **requirements.txt**, your project will work on your machine but will fail for others.
**Solution:** After installing a new package, immediately run **pip freeze > requirements.txt** to update your dependencies file.

### 3. Committing Packages to Version Control (Git)

Your installed packages (in **site-packages** or a **venv** folder) should **never** be committed to Git. These folders can be huge and are specific to your operating system.
**Solution:** Add your virtual environment folder (e.g., **venv/**) to your **.gitignore** file. The **requirements.txt** file is all that's needed to recreate the environment.

---

## Key Takeaways

- **pip** is the tool for managing Python packages.
- **PyPI** is the repository where packages are stored.
- **pip install <package>** installs a package.
- **pip uninstall <package>** removes a package.
- **pip list** shows all installed packages.
- **pip freeze > requirements.txt** saves your project's dependencies.
- **pip install -r requirements.txt** installs dependencies from a file.
- **Always** use virtual environments to isolate your projects.

---

## Practice Exercises

1. Install the **numpy** package.
2. Check that **numpy** appears in your **pip list**.
3. Install version **1.20.0** of **numpy**.
4. Create a **requirements.txt** file for your environment.
5. Uninstall **numpy**.

---

## Solutions

```bash
# Exercise 1: Install numpy
# Open your terminal and run:
pip install numpy

# Exercise 2: Check for numpy
# Run:
pip list
# You should see numpy in the list of packages.

# Exercise 3: Install a specific version
# First, uninstall the current version:
pip uninstall numpy
# Then, install the specific version:
pip install numpy==1.20.0

# Exercise 4: Create requirements.txt
# Run:
pip freeze > requirements.txt
# A file named requirements.txt will be created in your current directory.

# Exercise 5: Uninstall numpy
# Run:
pip uninstall numpy
# Press 'y' to confirm.
```

---

> **Next lesson:** [Virtual Environments](./virtual-environments.md)
