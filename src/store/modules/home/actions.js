export function loadGenresRequest() {
  return {
    type: 'LOAD_GENRES_REQUEST',
  };
}

export function loadGenresSuccess(genres) {
  return {
    type: 'LOAD_GENRES_SUCCESS',
    payload: { genres },
  };
}

export function loadMoviesRequest(genre_id) {
  return {
    type: 'LOAD_REQUEST',
    payload: { genre_id },
  };
}

export function loadMoviesSuccess(items) {
  return {
    type: 'LOAD_SUCCESS',
    payload: { items },
  };
}
