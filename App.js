import React from 'react';
import {Store} from './src/global/store';
import Main from './src/navigation/main';

const App = () => {
  return (
    <Store>
      <Main />
    </Store>
  );
};

export default App;
