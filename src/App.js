import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import TaxEngineDisplay from './components/taxEngineDisplayContainer';

import store from './boot/store';
import './App.css';

function App() {
  return (
    <Typography component={'div'}>
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" component={TaxEngineDisplay} />
        </BrowserRouter>
      </Provider>
    </Typography>

  );
}

export default App;
