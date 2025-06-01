import React from 'react';
import { HashRouter } from 'react-router-dom';
import AppContent from 'src/tv/AppContent';

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
