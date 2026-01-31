import { unified } from "unified";
import remarkParse from "remark-parse";
import { Parent } from "unist";
import { toMarkdown } from "mdast-util-to-markdown";
import { Heading, Text, RootContent } from "mdast";

interface Section {
  title: string;
  slug: string;
  content: string;
}

export function extractSections(markdown: string): Section[] {
  const tree = unified().use(remarkParse).parse(markdown) as Parent;
  const sections: Section[] = [];

  let currentTitle = "";
  let currentNodes: RootContent[] = [];

  for (const node of tree.children) {
    try {
      if (node.type === "heading") {
        const headingNode = node as Heading;

        if (headingNode.depth === 2) {
          if (currentTitle && currentNodes.length > 0) {
            const content = toMarkdown({ type: "root", children: currentNodes });
            sections.push({
              title: currentTitle,
              content: content,
              slug: currentTitle.toLowerCase().replace(/\s+/g, "-"), // simple slug
            });
            currentNodes = [];
          }

          currentTitle = headingNode.children
            .filter((child): child is Text => child.type === "text")
            .map((child) => child.value)
            .join(" ");
        }
      } else if (currentTitle) {
        currentNodes.push(node as RootContent);
      }
    } catch (err) {
      console.error("Error processing node in extractSections:", err);
    }
  }

  if (currentTitle && currentNodes.length > 0) {
    try {
      const content = toMarkdown({ type: "root", children: currentNodes });
      sections.push({
        title: currentTitle,
        content: content,
        slug: currentTitle.toLowerCase().replace(/\s+/g, "-"), // simple slug
      });
    } catch (err) {
      console.error("Error finalizing section in extractSections:", err);
    }
  }

  return sections;
}
