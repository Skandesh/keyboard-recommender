import React from 'react';
import { ReclaimProvider } from './contexts/ReclaimContext';
import KeyboardRecommender from './components/KeyboardRecommender';
import './App.css';

function App() {
  return (
    <ReclaimProvider>
      <div className="App">
        <div className="container">
          <h1>Keyboard Recommender</h1>
          <KeyboardRecommender />
        </div>
      </div>
    </ReclaimProvider>
  );
}

export default App;
