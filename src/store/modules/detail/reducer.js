import { produce } from 'immer';

const INITIAL_STATE = {
  movie_id: null,
  item: {},
  similars: [],
  loading: false,
};

export default function Detail(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case 'DETAIL_REQUEST':
        draft.movie_id = action.payload.movie_id;
        draft.loading = true;
        break;

      case 'DETAIL_SUCCESS':
        draft.item = action.payload.item;
        draft.loading = false;
        break;

      case 'SIMILAR_REQUEST':
        draft.movie_id = action.payload.movie_id;
        draft.loading = true;
        break;

      case 'SIMILAR_SUCCESS':
        draft.similars = action.payload.similars;
        draft.loading = false;
        break;

      default:
        break;
    }
  });
}
