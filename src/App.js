import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import TaxEngineDisplay from './components/taxEngineDisplayContainer';

import store from './boot/store';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#14B9F1', contrastText: '#fff', dark: '#1689ce' },
  },
  typography: {
    fontSize: 12,
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Typography component={'div'}>
        <Provider store={store}>
          <BrowserRouter>
            <Route path="/" component={TaxEngineDisplay} />
          </BrowserRouter>
        </Provider>
      </Typography>
    </MuiThemeProvider>

  );
}

export default App;
