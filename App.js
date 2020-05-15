import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView, StatusBar} from 'react-native';
import Navigator from './Pages/Navigator';
import configureStore from './store/store';

const store = configureStore();

const App = () => (
    <Provider store={store}>
      <Navigator>
        <SafeAreaView>
          <StatusBar barStyle="dark-content" />
        </SafeAreaView>
      </Navigator>
    </Provider>
);


export default App;
