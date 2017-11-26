import React, { Component } from "react";
import { AppRegistry } from 'react-native';
import { AppNavigator }  from './App';

// import { Provider } from 'react-redux';
// import configureStore from './app/configureStore'

// const store = configureStore();

const FoodApp = () => (
    // <Provider store={store}>
      <AppNavigator />
    // </Provider>
)

AppRegistry.registerComponent('foodApp', () => FoodApp);