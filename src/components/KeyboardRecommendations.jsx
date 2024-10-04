import React from 'react';

function KeyboardRecommendations({ recommendations }) {
  return (
    <div>
      <h3>Recommended Keyboards</h3>
      <ul className="recommendations">
        {recommendations.map((keyboard, index) => (
          <li key={index}>
            {keyboard.name}
            <button onClick={() => window.open(keyboard.link, '_blank')}>
              View on Amazon
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KeyboardRecommendations;
