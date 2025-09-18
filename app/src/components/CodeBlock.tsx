// components/CodeBlock.tsx
"use client";

interface CodeBlockProps {
  code: string;
  language?: string; // optional, for display purposes
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  code,
  language = "python",
  showLineNumbers = true,
}: CodeBlockProps) {
  const lines = code.split("\n");

  return (
    <div className="bg-zinc-800 text-zinc-500 p-4 overflow-x-auto font-karla text-sm">
      {language && (
        <div className="text-zinc-400 text-xs mb-2">{language.toUpperCase()}</div>
      )}
      <pre className="whitespace-pre">
        {lines.map((line, idx) => (
          <div
            key={idx}
            className="flex space-x-2 items-start min-w-max"
          >
            {showLineNumbers && (
              <span className="w-6 text-zinc-400 select-none text-right">
                {idx + 1}
              </span>
            )}
            <span className="flex-1">{line}</span>
          </div>
        ))}
      </pre>
    </div>
  );
}
