export function searchRequest(input) {
  return {
    type: 'SEARCH_REQUEST',
    payload: { input },
  };
}

export function searchSuccess(data) {
  return {
    type: 'SEARCH_SUCCESS',
    payload: { data },
  };
}
