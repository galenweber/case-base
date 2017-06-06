import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './configureStore';

import Navigation from './navigation';

export const store = configureStore();

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

