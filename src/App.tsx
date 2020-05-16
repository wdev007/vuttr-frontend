import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './styles/global';
import Routes from './routes';
import { AppProvider } from './contexts/app';
import { ToolProvider } from './contexts/tool';

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <AppProvider>
      <ToolProvider>
        <Router>
          <Routes />
        </Router>
      </ToolProvider>
    </AppProvider>
  </>
);

export default App;
