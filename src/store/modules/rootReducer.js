import { combineReducers } from 'redux';

import home from './home/reducer';
import search from './search/reducer';
import detail from './detail/reducer';

export default combineReducers({
  home,
  search,
  detail,
});
