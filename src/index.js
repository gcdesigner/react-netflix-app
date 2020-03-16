import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import './config/ReactotronConfig';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { persistor, store } from './store';
import Routes from './routes';

const MyTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fff',
    background: '#1A191A',
    card: '#111',
    text: '#fff',
    border: '#fff',
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <StatusBar
            barStyle="light-content"
            translucent
            backgroundColor="transparent"
          />
          <NavigationContainer theme={MyTheme}>
            <Routes />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
