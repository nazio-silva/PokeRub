import * as React from 'react';
import { Provider } from 'react-redux';
import { Text } from 'react-native';
import { store } from './src/store/store';
import { BASE_URL } from '@env';
import HomePage from './src/pages/Home';

const App = () => {
  return (
    <Provider store={store} children={undefined}>
      <HomePage />
    </Provider>
  );
}

export default App;
