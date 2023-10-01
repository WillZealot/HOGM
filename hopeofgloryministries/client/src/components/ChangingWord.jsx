import React, { useState, useEffect } from 'react';

const ChangingWord = () => {
  const wordsArray = ['Brazil', 'Mexico', 'Ecuador', 'Ukraine', 'Africa', 'You']; // Add your words here
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeIn(false); // Fade out the current word
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordsArray.length);
        setFadeIn(true); // Fade in the new word
      }, 500); // Adjust the duration as needed (half a second for the fade-out effect)

    }, 3000); // Change the word every 3 seconds

    return () => clearInterval(intervalId); // Clean up the interval
  }, []);

  return (
    <h1 className={`text-6xl lg:text-8xl md:text-center xxs:text-left text-right font-bold transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      {wordsArray[currentWordIndex]}
    </h1>
  );
};

export default ChangingWord;
