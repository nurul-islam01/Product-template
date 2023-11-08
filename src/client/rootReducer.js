import { combineReducers } from 'redux';

// Helmet
import helmetReducer from './components/common/helmet/reducer';
import { HELMET_STATE_KEY } from './components/common/helmet/constants';

const createRootReducer = () =>
  combineReducers({
    [HELMET_STATE_KEY]: helmetReducer,
  });

export default createRootReducer;
