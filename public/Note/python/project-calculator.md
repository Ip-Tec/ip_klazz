# Python Calculator Project

This project is a simple calculator application built with Python and the **customtkinter** library. It provides a graphical user interface for performing basic arithmetic calculations.

## How to Run

1. **Install dependencies:**
    Open a terminal or command prompt in the **Python/calculator** directory and run the following command to install the required libraries:

    ```bash
    pip install -r requirements.txt
    ```

2. **Run the application:**
    Once the dependencies are installed, you can run the calculator with the following command:

    ```bash
    python main.py
    ```

## Application Code

The main application is contained in **main.py**.

```python
import customtkinter as ctk

# ---------------------------
# APP SETTINGS
# ---------------------------
# Note: set_appearance_mode and set_default_color_theme should be called before CTkApp instance
ctk.set_appearance_mode("Dark")      # Light or Dark (Capitalized 'Dark' is correct for the function)
ctk.set_default_color_theme("blue")  # Color theme

class CalculatorApp(ctk.CTk):

    def __init__(self):
        super().__init__()

        self.title("CustomTkinter Calculator")
        self.geometry("350x500")
        self.resizable(False, False)

        # ---------------------------
        # VARIABLES
        # ---------------------------
        self.expression = ""

        # ---------------------------
        # DISPLAY
        # ---------------------------
        self.display = ctk.CTkEntry(self, justify="right", font=("Arial", 28), height=70)
        self.display.grid(row=0, column=0, columnspan=4, pady=20, padx=20, sticky="nsew")

        # ---------------------------
        # THEME TOGGLE BUTTON
        # ---------------------------
        self.theme_btn = ctk.CTkButton(self, text="Toggle Theme", command=self.toggle_theme)
        self.theme_btn.grid(row=1, column=0, columnspan=4, pady=10, padx=20, sticky="nsew")

        # ---------------------------
        # BUTTON COLORS
        # ---------------------------
        self.number_color = "#1E90FF"      # Color for number buttons (e.g., Dodger Blue)
        self.operator_color = "#FF8C00"    # Color for + - × ÷ buttons (e.g., Dark Orange)
        self.utility_color = "#32CD32"     # Color for AC, DEL, = (e.g., Lime Green)

        # ---------------------------
        # BUTTON LAYOUT
        # ---------------------------
        buttons = [
            ("AC", self.utility_color), ("DEL", self.utility_color), ("%", self.operator_color), ("/", self.operator_color),
            ("7", self.number_color), ("8", self.number_color), ("9", self.number_color), ("*", self.operator_color),
            ("4", self.number_color), ("5", self.number_color), ("6", self.number_color), ("-", self.operator_color),
            ("1", self.number_color), ("2", self.number_color), ("3", self.number_color), ("+", self.operator_color),
            ("0", self.number_color), (".", self.number_color), ("=", self.utility_color)
        ]

        # Dynamically generate buttons
        row_index = 2
        col_index = 0

        for (text, color) in buttons:
            # The '=' button needs to span two columns, so we handle it separately
            if text == "=":
                btn = ctk.CTkButton(
                    self,
                    text=text,
                    font=("Arial", 22),
                    fg_color=color,
                    hover_color="#000000",
                    command=lambda t=text: self.button_click(t)
                )
                # Make the '=' button span two columns (col_index=2, columnspan=2)
                btn.grid(row=row_index, column=col_index, columnspan=2, padx=10, pady=10, sticky="nsew")
                col_index += 2 # Move past the two spanned columns
            else:
                btn = ctk.CTkButton(
                    self,
                    text=text,
                    font=("Arial", 22),
                    fg_color=color,
                    hover_color="#000000",
                    command=lambda t=text: self.button_click(t)
                )
                btn.grid(row=row_index, column=col_index, padx=10, pady=10, sticky="nsew")

                col_index += 1
                if col_index > 3:
                    col_index = 0
                    row_index += 1
        
        # Make rows & columns responsive
        for i in range(6):
            self.grid_rowconfigure(i, weight=1)
        for i in range(4):
            self.grid_columnconfigure(i, weight=1)
        
    def button_click(self, char):
        if char == "AC":
            self.expression = ""
        elif char == "DEL":
            self.expression = self.expression[:-1]
        elif char == "=":
            try:
                # Use str(eval()) to calculate the result
                self.expression = str(eval(self.expression))
            except:
                self.expression = "Error"
        else:
            self.expression += str(char)

        # Update the display
        self.display.delete(0, ctk.END)
        self.display.insert(0, self.expression)
        
    def toggle_theme(self):
        current = ctk.get_appearance_mode()
        # Toggle between 'Dark' and 'Light'
        ctk.set_appearance_mode("Light" if current == "Dark" else "Dark")


# ---------------------------
# START APP
# ---------------------------
if __name__ == "__main__":
    app = CalculatorApp()
    app.mainloop()
```

## Dependencies

The project's dependencies are listed in **requirements.txt**.

```txt
customtkinter==5.2.2
darkdetect==0.8.0
packaging==25.0
```

---

> **Next lesson:**  [Project 2: To-Do List](project-todo.md)

---
