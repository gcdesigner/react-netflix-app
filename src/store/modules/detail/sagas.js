import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { API_KEY } from 'react-native-dotenv';
import { detailSuccess, similarSuccess } from './actions';

import deviceLanguage from '~/services/deviceLanguage';

export function* loadDetail({ payload }) {
  const { movie_id } = payload;
  try {
    const resp = yield call(
      api.get,
      `/movie/${movie_id}?api_key=${API_KEY}&language=${deviceLanguage}&append_to_response=videos`
    );

    yield put(detailSuccess(resp.data));
  } catch (error) {
    console.log(error);
  }
}

export function* loadSimilar({ payload }) {
  const { movie_id } = payload;
  try {
    const resp = yield call(
      api.get,
      `/movie/${movie_id}/similar?api_key=${API_KEY}&page=1`
    );

    const similars = resp.data.results;

    yield put(similarSuccess(similars));
  } catch (error) {
    console.log(error);
  }
}

export default all([
  takeLatest('DETAIL_REQUEST', loadDetail),
  takeLatest('SIMILAR_REQUEST', loadSimilar),
]);
