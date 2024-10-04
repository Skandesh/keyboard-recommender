import React from 'react';

function TypingResults({ accuracy, wpm }) {
  return (
    <div className="results">
      <h2>Verification Successful!</h2>
      <h3>Your Monkeytype Records</h3>
      <div className="stats">
        <div className="stat">
          <span className="label">Accuracy:</span>
          <span className="value">{accuracy}%</span>
        </div>
        <div className="stat">
          <span className="label">WPM:</span>
          <span className="value">{wpm}</span>
        </div>
      </div>
    </div>
  );
}

export default TypingResults;
