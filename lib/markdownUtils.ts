import { unified } from "unified";
import remarkParse from "remark-parse";
import { visit } from "unist-util-visit";
import { Node } from "unist";

function extractSections(markdown: string) {
  const tree = unified().use(remarkParse).parse(markdown);
  const sections: { title: string; content: string }[] = [];

  let currentTitle = "";
  let currentContent = "";

  visit(tree, "heading", (node: Node) => {
    if ((node as any).depth === 2) {
      if (currentTitle) {
        sections.push({ title: currentTitle, content: currentContent });
        currentContent = "";
      }
      currentTitle = (node as any).children.map((c: any) => c.value).join(" ");
    }
  });

  visit(tree, (node: Node) => {
    if (node.type !== "heading") {
      currentContent += unified().use(() => () => node).stringify(node) + "\n";
    }
  });

  if (currentTitle) {
    sections.push({ title: currentTitle, content: currentContent });
  }

  return sections;
}
