import { FETCH_ERROR, FETCH_SUCCESS, TOGGLE_SHOW_ALL } from './actionType';

export const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
        isError: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case TOGGLE_SHOW_ALL:
      return {
        ...state,
        showAll: !state.showAll,
      };
    default:
      return state;
  }
};
