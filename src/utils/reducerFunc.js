import { FETCH_ERROR, FETCH_SUCCESS, TOGGLE_SHOW_ALL, TOGGLE_THEME } from './actionType';

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
    case TOGGLE_THEME:
      return {
        ...state,
        theme: !state.theme,
      };
    default:
      throw new Error(`Not Found : ${action.type}`);
    // return state;
  }
};
