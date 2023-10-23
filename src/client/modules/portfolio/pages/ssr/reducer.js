const initialSSRState = {
  data: null,
};

const ssrReducer = (state = initialSSRState, { type, payload }) => {
  switch (type) {
    case 'SSR_DATA_LOADING': {
      return { ...state, isLoading: true };
    }
    case 'SSR_DATA_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        data: payload.data,
        isSuccess: true,
      };
    }
    case 'SSR_DATA_ERROR': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: {
          type: payload.error,
          message: payload.message,
        },
      };
    }
    default:
      return state;
  }
};

export default ssrReducer;
