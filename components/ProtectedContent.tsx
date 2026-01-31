'use client';

import { useAuth } from '@/app/context/AuthContext';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CodeBlock from '@/components/CodeBlock';

interface ProtectedContentProps {
  lang: string;
  path: string; // e.g. "javascript/core"
  fileContents: string;
  isPremium?: boolean;
}

export default function ProtectedContent({ lang, path, fileContents, isPremium }: ProtectedContentProps) {
  const { user, paidCourses, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  const hasAccess = !isPremium || (user && paidCourses[lang]);

  if (!hasAccess) {
    return (
      <div className="max-w-[900px] mx-auto p-8 text-center">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Access Denied</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">This is a paid course. Please purchase it to get access.</p>
        <Link href="/pricing" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Go to Pricing
        </Link>
      </div>
    );
  }

  if (!fileContents) {
    return null;
  }

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ href, children }) => {
          if (!href) return <span>{children}</span>;

          const isExternal = href.startsWith("http://") || href.startsWith("https://");
          if (isExternal) {
            return (
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {children}
              </a>
            );
          }

          // Remove .md extension and relative path prefix
          const cleanHref = href.replace(/\.md$/, "").replace(/^\.\//, "");
          // If the link starts with /, use it as-is, otherwise prepend the current path
          const finalHref = cleanHref.startsWith("/") ? cleanHref : `/language/${path}/${cleanHref}`;

          return (
            <Link href={finalHref} className="text-orange-500 hover:underline font-medium">
              {children}
            </Link>
          );
        },
        code({ inline, className, children, ...props }: any) {
          if (inline) {
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
          return (
            <div>
              <CodeBlock className={className} {...props}>
                {children}
              </CodeBlock>
            </div>
          );
        },
      }}
    >
      {fileContents}
    </ReactMarkdown>
  );
}
