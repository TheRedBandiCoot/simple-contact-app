import { useEffect, useReducer } from 'react';
import { FETCH_ERROR, FETCH_SUCCESS } from './actionType';
import { reducer } from './reducerFunc';
import { initialState } from './initialState';

const useCustomHook = (API_URL) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getUsers = async () => {
    try {
      const resp = await fetch(API_URL);
      if (!resp.ok) {
        dispatch({ type: FETCH_ERROR });
        return;
      }
      const data = await resp.json();
      dispatch({ type: FETCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_ERROR });
      console.error(`Error: ${error}`);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return { state, dispatch };
};
export default useCustomHook;
