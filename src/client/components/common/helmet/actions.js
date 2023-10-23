import { SET_INFO } from './constants';

export const setHelmetInfo = (data) => (dispatch) =>
  dispatch({ type: SET_INFO, data });
