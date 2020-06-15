import React from 'react';
import Header from './components/Header';
import Main from './pages/Main';
import Box from '@material-ui/core/Box';
import './App.scss';

import store from "./store";
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Box>
          <Header />
          <Main />
        </Box>
      </Provider>
    </div>
  );
}

export default App;
