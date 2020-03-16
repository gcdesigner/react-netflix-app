import { produce } from 'immer';

const INITIAL_DATA = {
  input: null,
  items: [],
  loading: false,
};

export default function Search(state = INITIAL_DATA, action) {
  return produce(state, draft => {
    switch (action.type) {
      case 'SEARCH_REQUEST':
        draft.input = action.payload.input;
        draft.loading = true;
        break;

      case 'SEARCH_SUCCESS':
        draft.items = action.payload.data;
        draft.loading = false;
        break;

      default:
        break;
    }
  });
}
