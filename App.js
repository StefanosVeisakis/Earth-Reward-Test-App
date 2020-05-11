/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './Pages/Navigator';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './store/store';

import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
} from 'react-native';


const store = configureStore();

const App = () => {
  return (
    <Provider store = {store}>
      <Navigator>
        <SafeAreaView>
          <StatusBar barStyle="dark-content" />
        </SafeAreaView>
      </Navigator>
    </Provider>
  );
};


export default App;
