import { SET_INFO } from './constants';

const initialState = {
  data: null,
};

const helmetReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case SET_INFO:
      return { ...state, data };
    default:
      return state;
  }
};

export default helmetReducer;
