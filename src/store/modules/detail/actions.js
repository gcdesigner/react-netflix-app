export function detailRequest(movie_id) {
  return {
    type: 'DETAIL_REQUEST',
    payload: { movie_id },
  };
}

export function detailSuccess(item) {
  return {
    type: 'DETAIL_SUCCESS',
    payload: { item },
  };
}

export function similarRequest(movie_id) {
  return {
    type: 'SIMILAR_REQUEST',
    payload: { movie_id },
  };
}

export function similarSuccess(similars) {
  return {
    type: 'SIMILAR_SUCCESS',
    payload: { similars },
  };
}
