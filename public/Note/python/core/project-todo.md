```python

import customtkinter as ctk

class TodoApp(ctk.CTk):
    def __init__(self):
        super().__init__()

        self.title("Todo List")
        self.geometry("400x500")

        self.tasks = []

        self.task_entry = ctk.CTkEntry(self, placeholder_text="Enter a new task")
        self.task_entry.pack(pady=10, padx=10, fill="x")

        self.add_button = ctk.CTkButton(self, text="Add Task", command=self.add_task)
        self.add_button.pack(pady=5, padx=10, fill="x")

        self.task_list_frame = ctk.CTkFrame(self)
        self.task_list_frame.pack(pady=10, padx=10, fill="both", expand=True)

    def add_task(self):
        task_text = self.task_entry.get()
        if task_text:
            self.tasks.append({"text": task_text, "completed": False})
            self.task_entry.delete(0, "end")
            self.render_tasks()

    def render_tasks(self):
        for widget in self.task_list_frame.winfo_children():
            widget.destroy()

        for i, task in enumerate(self.tasks):
            task_frame = ctk.CTkFrame(self.task_list_frame)
            task_frame.pack(pady=5, padx=5, fill="x")

            check_var = ctk.StringVar(value="on" if task["completed"] else "off")
            task_check = ctk.CTkCheckBox(
                task_frame,
                text=task["text"],
                variable=check_var,
                onvalue="on",
                offvalue="off",
                command=lambda index=i: self.toggle_task(index),
            )
            task_check.pack(side="left", padx=5)

            delete_button = ctk.CTkButton(
                task_frame, text="Delete", command=lambda index=i: self.delete_task(index)
            )
            delete_button.pack(side="right", padx=5)

    def toggle_task(self, index):
        self.tasks[index]["completed"] = not self.tasks[index]["completed"]
        self.render_tasks()

    def delete_task(self, index):
        self.tasks.pop(index)
        self.render_tasks()

if __name__ == "__main__":
    app = TodoApp()
    app.mainloop()


```
