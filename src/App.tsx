import React from 'react';
import { Router } from 'react-router-dom';

import GlobalStyles from './styles/global';
import Routes from './routes';

import history from './services/history';
import { AppProvider } from './contexts/app';
import { ToolProvider } from './contexts/tool';

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <AppProvider>
      <ToolProvider>
        <Router history={history}>
          <Routes />
        </Router>
      </ToolProvider>
    </AppProvider>
  </>
);

export default App;
