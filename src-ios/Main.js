import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './configureStore';

import Navigation from './navigation';

export const store = configureStore();

export default function Main() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

