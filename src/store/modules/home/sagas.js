import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { API_KEY } from 'react-native-dotenv';
import { loadGenresSuccess, loadMoviesSuccess } from './actions';
import { Alert } from 'react-native';

import deviceLanguage from '~/services/deviceLanguage';

export function* loadGenres() {
  try {
    const resp = yield call(
      api.get,
      `/genre/movie/list?api_key=${API_KEY}&language=${deviceLanguage}`
    );
    const data = resp.data.genres.map(genre => ({
      id: genre.id,
      name: genre.name,
    }));

    yield put(loadGenresSuccess(data));
  } catch (error) {
    Alert.alert('Error', 'erro ao carregar genres');
  }
}

export function* loadMoviesByGenre({ payload }) {
  try {
    const { genre_id } = payload;

    const resp = yield call(
      api.get,
      `/discover/movie?api_key=${API_KEY}&page=1&sort_by=popularity.desc&with_genre=${genre_id}&language=${deviceLanguage}`
    );

    const items = resp.data.results.map(i => ({
      id: i.id,
      image: i.poster_path,
      genre: i.genre_ids,
      title: i.title,
    }));

    yield put(loadMoviesSuccess(items));
  } catch (error) {
    Alert.alert('Error', error);
  }
}

export default all([
  takeLatest('LOAD_GENRES_REQUEST', loadGenres),
  takeLatest('LOAD_REQUEST', loadMoviesByGenre),
]);
