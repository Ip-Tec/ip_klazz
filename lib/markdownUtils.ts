import { unified } from "unified";
import remarkParse from "remark-parse";
import { Node } from "unist";
import { toMarkdown } from "mdast-util-to-markdown";

interface Section {
  title: string;
  content: string;
}

export function extractSections(markdown: string): Section[] {
  const tree = unified().use(remarkParse).parse(markdown);
  const sections: Section[] = [];

  let currentTitle = "";
  let currentNodes: Node[] = [];

  for (let i = 0; i < tree.children.length; i++) {
    const node = tree.children[i];

    if (node.type === "heading" && (node as any).depth === 2) {
      if (currentTitle && currentNodes.length > 0) {
        const content = toMarkdown({ type: "root", children: currentNodes });
        sections.push({ title: currentTitle, content });
        currentNodes = [];
      }

      currentTitle = (node as any).children.map((c: any) => c.value).join(" ");
    } else if (currentTitle) {
      currentNodes.push(node);
    }
  }

  // Push the last section
  if (currentTitle && currentNodes.length > 0) {
    const content = toMarkdown({ type: "root", children: currentNodes });
    sections.push({ title: currentTitle, content });
  }

  return sections;
}
