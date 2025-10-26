# Virtual Environments

## Introduction

As you work on more Python projects, you will find that different projects have different dependencies. Project A might need version 1.0 of a library, while Project B needs version 2.0. This can create conflicts if you install all your packages in the same place.

The solution is a **virtual environment**. A virtual environment is a private, isolated directory that contains a specific version of Python and its own set of installed packages. It's a self-contained world for your project to live in.

---

## Why Use Virtual Environments?

Using virtual environments is a fundamental best practice in modern Python development.

- **Isolation**: It keeps the dependencies for each project separate and organized. What you install for one project won't affect any others.
- **Reproducibility**: It allows you to create a **requirements.txt** file that perfectly represents your project's dependencies, making it easy for others to replicate your setup.
- **Permissions**: You can install packages without needing administrator rights, since everything is stored in a local project folder.
- **Cleanliness**: It keeps your global Python installation clean and free of clutter.

---

## Creating and Using a Virtual Environment

Python includes the **venv** module in its standard library for creating virtual environments.

### Step 1: Create the Environment

Navigate to your project's root folder in your terminal and run the following command.

```bash
# On Windows
py -m venv venv

# On macOS/Linux
python3 -m venv venv
```

- **py -m venv**: Tells Python to run the **venv** module.
- **venv**: This is the name of the folder that will be created to hold your environment. Naming it **venv** is a strong convention.

This will create a **venv** directory in your project.

### Step 2: Activate the Environment

Creating the environment isn't enough; you must **activate** it to start using it.

**On Windows (Command Prompt/CMD):**

```bash
.\venv\Scripts\activate
```

**On Windows (PowerShell):**

```powershell
.\venv\Scripts\Activate.ps1
```

**On macOS and Linux:**

```bash
source venv/bin/activate
```

After activation, your terminal prompt will change to show **(venv)**, indicating that the virtual environment is active.

### Step 3: Work in the Environment

Now that your environment is active, any **pip** command you run will install packages inside the **venv** folder, not globally.

```bash
(venv) > pip install requests
(venv) > pip list
```

The **pip list** command will show only **requests** and its dependencies, proving your environment is isolated.

### Step 4: Deactivate the Environment

When you're done working, you can deactivate the environment to return to your global Python context.

```bash
(venv) > deactivate
```

Your prompt will return to normal.

---

## A Typical Project Workflow

1. **cd my_project**
2. **python3 -m venv venv**
3. **source venv/bin/activate** (or the Windows equivalent)
4. **pip install numpy pandas requests**
5. **pip freeze > requirements.txt**
6. Work on your code...
7. **deactivate**

---

## Common Mistakes

### 1. Forgetting to Activate the Environment

If you forget to activate the **venv**, you will accidentally install packages into your global Python site-packages, which defeats the purpose of having an environment.
**Solution:** Always check for the **(venv)** prefix in your terminal prompt.

### 2. Committing the **venv** Folder to Git

The **venv** folder can be very large and contains files specific to your operating system. It should **never** be committed to version control.
**Solution:** Add **venv/** to your **.gitignore** file immediately after creating the environment.

### 3. Manually Moving Environments

A virtual environment is not always portable. If you move the project folder, the environment may break because of hardcoded file paths.
**Solution:** It's better to delete the **venv** folder, move the project, and recreate the environment using **pip install -r requirements.txt**.

---

## Key Takeaways

- A virtual environment is an **isolated** space for your project's dependencies.
- Use the built-in **venv** module to create them.
- Always **activate** your environment before working on a project.
- Keep your dependencies documented in a **requirements.txt** file.
- **Never** commit your **venv** folder to version control.

---

## Practice Exercises

1. Create a new project folder named **my-test-project**.
2. Inside that folder, create a virtual environment named **venv**.
3. Activate the environment.
4. Install the **cowsay** package.
5. Run **pip freeze** to see the package and its dependencies.
6. Deactivate the environment.

---

## Solutions

```bash
# This is a sequence of commands to be run in your terminal.

# 1. Create project folder and navigate into it
mkdir my-test-project
cd my-test-project

# 2. Create virtual environment
# On Windows: py -m venv venv
# On macOS/Linux: python3 -m venv venv

# 3. Activate the environment
# On Windows (CMD): .\venv\Scripts\activate
# On macOS/Linux: source venv/bin/activate

# Your terminal prompt should now start with (venv)

# 4. Install the cowsay package
pip install cowsay

# 5. Run pip freeze
pip freeze
# You will see cowsay and its dependencies listed.

# You can also try running the package
# python -m cowsay "Hello, Virtual Environments!"

# 6. Deactivate the environment
deactivate

# Your terminal prompt should be back to normal.

```

---

> **Next lesson:** [Introduction to OOP](oop-intro)
