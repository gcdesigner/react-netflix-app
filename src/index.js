import React from 'react';

import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import './config/ReactotronConfig';

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
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#333' }}>
        <NavigationContainer theme={MyTheme}>
          <Routes />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default App;
