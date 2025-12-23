import React, { useState } from 'react';
import Home from './components/Home';
import FlashcardDeck from './components/FlashcardDeck';
import BackgroundEffects from './components/BackgroundEffects';
import './App.css';

function App() {
  const [view, setView] = useState('home'); // 'home' or 'deck'
  const [initialSectionIndex, setInitialSectionIndex] = useState(0);

  const handleNavigate = (index) => {
    setInitialSectionIndex(index);
    setView('deck');
  };

  const handleBackToHome = () => {
    setView('home');
  };

  return (
    <div className="App">
      <BackgroundEffects />
      {view === 'home' ? (
        <Home onNavigate={handleNavigate} />
      ) : (
        <FlashcardDeck
          initialSectionIndex={initialSectionIndex}
          onBackToHome={handleBackToHome}
        />
      )}
    </div>
  );
}

export default App;
