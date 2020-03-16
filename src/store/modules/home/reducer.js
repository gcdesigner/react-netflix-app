import { produce } from 'immer';

const INITIAL_STATE = {
  genres: [],
  items: [],
  loading: false,
};

export default function Home(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case 'LOAD_GENRES_REQUEST':
        break;

      case 'LOAD_GENRES_SUCCESS':
        draft.genres = action.payload.genres;
        break;

      case 'LOAD_REQUEST':
        draft.loading = true;
        break;

      case 'LOAD_SUCCESS':
        draft.items = action.payload.items;
        draft.loading = false;
        break;

      default:
        break;
    }
  });
}
