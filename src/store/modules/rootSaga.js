import { all } from 'redux-saga/effects';

import home from './home/sagas';
import search from './search/sagas';
import detail from './detail/sagas';

export default function* rootSaga() {
  return yield all([home, search, detail]);
}
