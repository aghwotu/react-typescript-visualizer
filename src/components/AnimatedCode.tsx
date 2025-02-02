import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShikiHighlighter } from './ShikiHighlighter';
import diff_match_patch from 'diff-match-patch';

interface AnimatedCodeProps {
  startCode: string;
  endCode: string;
  language?: string;
  progress: number;
}

export function AnimatedCode({ startCode, endCode, language = 'typescript', progress }: AnimatedCodeProps) {
  const [currentCode, setCurrentCode] = useState(startCode);
  const previousCodeRef = useRef(startCode);

  useEffect(() => {
    const dmp = new diff_match_patch();
    const diffs = dmp.diff_main(startCode, endCode);
    dmp.diff_cleanupSemantic(diffs);

    // Reconstruct the current state based on diffs and progress
    let result = '';
    let currentPosition = 0;
    const totalDiffLength = diffs.reduce((sum, [, text]) => sum + text.length, 0);
    const progressPosition = progress * totalDiffLength;

    for (const [type, text] of diffs) {
      const textLength = text.length;

      if (type === 0) {
        // EQUAL
        result += text;
        currentPosition += textLength;
      } else if (type === -1) {
        // DELETE
        if (currentPosition + textLength > progressPosition) {
          const keepChars = Math.floor(textLength - (progressPosition - currentPosition));
          result += text.slice(0, keepChars);
        }
        currentPosition += textLength;
      } else if (type === 1) {
        // INSERT
        if (currentPosition < progressPosition) {
          const insertChars = Math.min(textLength, Math.floor(progressPosition - currentPosition));
          result += text.slice(0, insertChars);
        }
        currentPosition += textLength;
      }
    }

    if (result !== previousCodeRef.current) {
      setCurrentCode(result);
      previousCodeRef.current = result;
    }
  }, [startCode, endCode, progress]);

  return (
    <motion.div className="relative font-mono" layout transition={{ duration: 0.3, ease: 'easeInOut' }}>
      <ShikiHighlighter code={currentCode} language={language} />
    </motion.div>
  );
}
