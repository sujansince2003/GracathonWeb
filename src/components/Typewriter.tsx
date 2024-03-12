import React, { useState, useEffect, ReactElement } from "react";

interface TypewriterProps {
  texts: string[];
  delay: number;
  infinite: boolean;
}

const Typewriter: React.FC<TypewriterProps> = ({ texts, delay, infinite }) => {
  const [currentText, setCurrentText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState<number>(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;

    // Check if texts array is not empty and currentSentenceIndex is within bounds
    if (texts.length > 0 && currentSentenceIndex < texts.length) {
      const currentSentence = texts[currentSentenceIndex];
      if (currentIndex < currentSentence.length) {
        timeout = setTimeout(() => {
          setCurrentText(
            (prevText) => prevText + currentSentence[currentIndex]
          );
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, delay);
      } else if (currentIndex === currentSentence.length) {
        // Only reset and clear the text when the current sentence has been fully typed
        setCurrentIndex(0);
        setCurrentText("");
        if (infinite) {
          // Move to the next sentence or loop back to the first sentence
          setCurrentSentenceIndex(
            (prevIndex) => (prevIndex + 1) % texts.length
          );
        }
      }
    }

    return () => timeout && clearTimeout(timeout);
  }, [currentIndex, delay, infinite, texts, currentSentenceIndex]);

  return <span className="text-3xl font-semibold">{currentText}</span>;
};

export default Typewriter;
