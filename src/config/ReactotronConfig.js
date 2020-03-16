import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({
      // enabled: true,
      // host: '192.168.1.106',
      // port: 9090,
    })
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  console.tron = tron;

  tron.clear();
}
