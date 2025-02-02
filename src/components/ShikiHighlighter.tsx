// src/components/ShikiHighlighter.tsx
'use client';

import { createHighlighter, BundledLanguage, BundledTheme } from 'shiki';
import React from 'react';

let highlighterPromise: ReturnType<typeof createHighlighter>;

const languageThemes = {
  typescript: 'one-dark-pro',
  html: 'dracula',
  css: 'monokai',
  default: 'one-dark-pro',
} as const;

const initHighlighter = async () => {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['one-dark-pro', 'dracula', 'monokai'],
      langs: ['typescript', 'javascript', 'html', 'css', 'json', 'markdown'],
    });
  }
  return highlighterPromise;
};

export function ShikiHighlighter({ code, language = 'html' }: { code: string; language?: string }) {
  const [html, setHtml] = React.useState('');

  React.useEffect(() => {
    initHighlighter().then((highlighter) => {
      const actualLanguage = language === 'typescript-angular' ? 'typescript' : language;
      const theme = languageThemes[actualLanguage as keyof typeof languageThemes] || languageThemes.default;

      const highlighted = highlighter.codeToHtml(code, {
        lang: actualLanguage as BundledLanguage,
        theme: theme as BundledTheme,
      });
      setHtml(highlighted);
    });
  }, [code, language]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
