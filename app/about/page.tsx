import Link from "next/link";

export const metadata = {
  title: "About — Ip Klazz",
  description: "About Ip Klazz — a markdown-powered learning platform",
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">About Ip Klazz</h1>
      <p className="mb-4">Klazz is a lightweight, markdown-driven learning platform for developers and students. It organizes tutorials by language and renders them as clean, readable pages with syntax-highlighted code blocks — ideal for bite-sized lessons, examples, and quick reference.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Features</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Multi-language tutorials (HTML, CSS, JavaScript, and more)</li>
        <li>Markdown-based content rendering</li>
        <li>Responsive UI with Tailwind CSS</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Get started</h2>
      <p className="mb-4">To run locally: <code>npm install</code> and <code>npm run dev</code>. Visit <Link href="/">the home page</Link> to explore content.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contribute</h2>
      <p className="mb-4">Feel free to fork the repo, add new tutorials, or improve the UI. Pull requests are welcome.</p>

      <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Ip-Tec</p>
    </main>
  );
}
