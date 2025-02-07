import React, { useEffect, useState } from 'react';
import { diff_match_patch } from 'diff-match-patch';

interface AnimatedCodeProps {
  startCode: string;
  endCode: string;
  progress: number; // 0 to 1 (used for animation)
}

const dmp = new diff_match_patch();

const AnimatedCode: React.FC<AnimatedCodeProps> = ({ startCode, endCode, progress }) => {
  const [diffs, setDiffs] = useState<Array<[number, string]>>([]);
  const [positions, setPositions] = useState<Record<number, number>>({});

  useEffect(() => {
    const computedDiffs = dmp.diff_main(startCode, endCode);
    dmp.diff_cleanupSemantic(computedDiffs);

    let index = 0;
    const posMap: Record<number, number> = {};
    computedDiffs.forEach(([type, text]) => {
      if (type === 0) {
        // Track positions of unchanged text
        for (let i = 0; i < text.length; i++) {
          posMap[index] = dmp.diff_xIndex(computedDiffs, index);
          index++;
        }
      } else if (type === -1) {
        // Deletion
        index += text.length;
      }
    });

    setDiffs(computedDiffs);
    setPositions(posMap);
  }, [startCode, endCode]);

  return (
    <pre className="relative font-mono text-sm leading-relaxed">
      {diffs.map(([type, text], i) => {
        const isMoved = type === 0 && positions[i] !== undefined;

        return (
          <span
            key={i}
            className={`${isMoved ? 'text-gray-400 transition-transform duration-300' : ''} ${
              type === 1 ? 'fade-in text-green-400' : ''
            } ${type === -1 ? 'fade-out text-red-400 hidden' : ''}`}
            style={{
              opacity: type === 1 ? progress : 1, // Use progress to fade in new text
              transform: isMoved ? `translateY(${positions[i] * progress * 1.2}px)` : 'none',
            }}
          >
            {text}
          </span>
        );
      })}
    </pre>
  );
};

export { AnimatedCode };
