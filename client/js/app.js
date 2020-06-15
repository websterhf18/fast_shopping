import React from 'react';
import Header from './components/Header';
import Main from './pages/Main';
import Box from '@material-ui/core/Box';
import './App.scss';

import { store, persistor } from "./store";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Box>
            <Header />
            <Main />
          </Box>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
