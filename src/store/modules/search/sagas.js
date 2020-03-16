import { all, takeLatest, call, put } from 'redux-saga/effects';
import { API_KEY } from 'react-native-dotenv';
import { Alert } from 'react-native';
import api from '~/services/api';
import { searchSuccess } from './actions';
import deviceLanguage from '~/services/deviceLanguage';

export function* searchRequest({ payload }) {
  try {
    const { input } = payload;

    if (input) {
      const resp = yield call(
        api.get,
        `/search/movie?api_key=${API_KEY}&query="${input}"&language=${deviceLanguage}&page=1`
      );
      const data = resp.data.results.filter(i => i.poster_path !== null);
      yield put(searchSuccess(data));
    } else {
      const resp = yield call(
        api.get,
        `/movie/popular?api_key=${API_KEY}&language=${deviceLanguage}&page=1`
      );
      const data = resp.data.results;
      yield put(searchSuccess(data));
    }
  } catch (error) {
    Alert.alert('Erro', error.response.error);
  }
}

export default all([takeLatest('SEARCH_REQUEST', searchRequest)]);
