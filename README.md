# Welcome to Klazz

## What is Klazz?

---

Klazz is a lightweight, markdown-driven learning platform for developers and students. It organizes tutorials by language (Markdown files in the Note/ folder) and renders them as clean, readable pages with syntax-highlighted code blocks — ideal for bite-sized lessons, examples, and quick reference.

---

**ip_klazz** is a dynamic, markdown-powered tutorial platform built with [Next.js](https://nextjs.org). It allows users to explore educational content across multiple programming languages and technologies — all rendered beautifully from `.md` files.

🌐 **Live Site**: [klazz.vercel.app](https://klazz.vercel.app)  
📁 **Source Code**: [GitHub Repository](https://github.com/Ip-Tec/ip_klazz)

---

## 🚀 Features

- 📚 Multi-language support (HTML, CSS, JavaScript, and more)
- 📖 Markdown-based tutorials with interactive code blocks
- 🧭 Accordion-style table of contents for easy navigation
- 🎨 Tailwind CSS styling for clean, responsive UI
- 🔗 GitHub Pages deployment for public access

---

## 🛠️ Getting Started

To run the project locally:

```bash
# Clone the repo
git clone https://github.com/Ip-Tec/ip_klazz.git
cd ip_klazz

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit `http://localhost:3000` in your browser to explore the app.

---

## 📦 Folder Structure

```bash
├── app/
│   ├── language/
│   │   ├── [lang]/
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx
├── components/
│   ├── Accordion.tsx
│   ├── AccordionList.tsx
│   └── CodeBlock.tsx
├── lib/
│   └── markdownUtils.ts
├── public/
│   ├── Note/
│   │   ├── html/
│   │   │   ├── Table_Of_Contents.md
│   │   │   ├── intro.md
│   │   │   └── forms.md
│   │   ├── css/
│   │   │   ├── Table_Of_Contents.md
│   │   │   └── animations.md
│   │   ├── js/
│   │   │   ├── Table_Of_Contents.md
│   │   │   └── intro.md
│   ├── image/
│   │   ├── image1.png
│   │   └── image2.png
│   ├── favicon.ico
│   ├── manifest.json
│   └── android-chrome-192x192.png
```

Each subfolder represents a language. Tutorials are written in markdown and rendered dynamically.

---

## 🌍 GitHub Pages Deployment

This project is deployed using GitHub Pages. You can view the live site at:

👉 [ip-tec.github.io/ip_klazz](https://ip-tec.github.io/ip_klazz)

To deploy updates:

1. Push changes to the `main` branch.
2. GitHub Actions will automatically rebuild and deploy the site.

---

## 🤝 Contributing

Feel free to fork the repo, add new tutorials, or improve the UI. Pull requests are welcome!

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

Made with ❤️ by [Ip-Tec](https://github.com/Ip-Tec)

```

```
