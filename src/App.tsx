import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './styles/global';
import Routes from './routes';
import { AppProvider } from './contexts/app';

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <AppProvider>
      <Router>
        <Routes />
      </Router>
    </AppProvider>
  </>
);

export default App;
