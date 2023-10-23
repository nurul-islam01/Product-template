import apiService from '@utils/apiService';
import { SSR_DATA } from './constant';

export const getSSRData = () => (dispatch) =>
  dispatch({
    type: SSR_DATA,
    payload: apiService({ url: 'ssr' }),
  });
