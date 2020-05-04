/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import Navigator from './Pages/Navigator'

import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  useEffect(() => {

  }, [])
  return (
    <Navigator>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />

      </SafeAreaView>
    </Navigator>
  );
};


export default App;
