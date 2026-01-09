import React, { useState } from 'react';
import Home from './components/Home';
import FlashcardDeck from './components/FlashcardDeck';
import BackgroundEffects from './components/BackgroundEffects';
import './App.css';

function App() {
  const [view, setView] = useState('home'); // 'home' or 'deck'
  const [initialSectionIndex, setInitialSectionIndex] = useState(0);

  const handleBackToHome = () => {
    window.history.pushState(null, '', '/');
    setView('home');
  };

  React.useEffect(() => {
    const handlePopState = () => {
      if (view === 'deck') {
        setView('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [view]);

  const handleNavigate = (index) => {
    window.history.pushState({ view: 'deck' }, '', '#deck');
    setInitialSectionIndex(index);
    setView('deck');
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
