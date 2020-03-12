import React from 'react';

import { SafeAreaView, StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#333' }}>
        <Routes />
      </SafeAreaView>
    </>
  );
};

export default App;
