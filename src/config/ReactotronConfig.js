import Reactotron from 'reactotron-react-native';
import { NativeModules } from 'react-native';

// grabs the ip address
const host = NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0];

if (__DEV__) {
  const tron = Reactotron.configure({
    enabled: true,
    host: '192.168.1.106',
    port: 9090,
  })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
