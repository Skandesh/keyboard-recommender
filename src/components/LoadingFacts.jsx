import React, { useState, useEffect } from 'react';
import './LoadingFacts.css';

const facts = [
  'Did you know? The QWERTY keyboard layout was designed to slow typists down to prevent jamming on mechanical typewriters.',
  'Zero-knowledge proofs allow you to prove you know something without revealing the information itself.',
  'The verification process uses cryptographic techniques to ensure the privacy and security of your typing data.',
  'The average typing speed is around 40 words per minute. How fast can you type?',
  'Reclaim Protocol uses zero-knowledge proofs to verify claims without revealing sensitive information.',
  'ZK-SNARKs (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge) allow verification of computations without revealing inputs, revolutionizing blockchain privacy.',
  'In 2013, a team of researchers demonstrated a zero-knowledge proof for Sudoku, allowing someone to prove they solved the puzzle without revealing the solution.',
  'Touch typing can increase productivity by up to 20% as it allows you to type without looking at the keyboard, reducing errors and improving focus.',
  'Typing regularly can improve cognitive skills such as memory and concentration, as it engages multiple areas of the brain simultaneously.',
  'Learning to type with all ten fingers can reduce the risk of repetitive strain injuries by distributing the workload evenly across your hands.',
  // Add more facts here...
];

function LoadingFacts() {
  const [currentFact, setCurrentFact] = useState('');
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentFact(facts[Math.floor(Math.random() * facts.length)]);
        setFadeIn(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-facts">
      <div className="loading-spinner"></div>
      <p className={`fact ${fadeIn ? 'fade-in' : 'fade-out'}`}>{currentFact}</p>
    </div>
  );
}

export default LoadingFacts;
