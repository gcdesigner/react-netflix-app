import { Platform, NativeModules } from 'react-native';
import * as RNLocalize from 'react-native-localize';

const deviceLanguage = RNLocalize.getLocales();
const language = deviceLanguage.map(i => i.languageTag);

console.tron.log(language);

export default language;
