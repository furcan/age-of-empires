import { combineReducers } from 'redux';

import unitsReducer from './unitsReducer';

const rootReducer = combineReducers({
  units: unitsReducer,
});

export default rootReducer;
