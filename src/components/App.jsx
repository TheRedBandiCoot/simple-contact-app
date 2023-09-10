import { Error } from './Error';
import { Loading } from './Loading';
import { Profile } from './Profile';
import { TOGGLE_SHOW_ALL, TOGGLE_THEME } from '../utils/actionType';
import useCustomHook from '../utils/useCustomHook';
import { useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const { state, dispatch } = useCustomHook(API_URL);

  const { users, showAll, isLoading, isError, theme } = state;

  useEffect(() => {
    document.body.style.backgroundColor = `${theme ? '#333' : '#fff'}`;
  }, [theme]);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }

  return (
    <>
      <button type="button" onClick={() => dispatch({ type: TOGGLE_SHOW_ALL })}>
        {showAll ? 'Hide' : 'Show'} All
      </button>
      <button type="button" onClick={() => dispatch({ type: TOGGLE_THEME })}>
        {theme ? 'light' : 'dark'}
      </button>
      <div className="container">
        {users &&
          users.map((user, i) => {
            i += 1;
            if (i > 3) return; // i = 100
            return <Profile key={i} showAll={showAll} user={user} />;
          })}
      </div>
    </>
  );
};

export default App;
