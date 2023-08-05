import { Error } from './Error';
import { Loading } from './Loading';
import { Profile } from './Profile';
import { TOGGLE_SHOW_ALL } from '../utils/actionType';
import useCustomHook from '../utils/useCustomHook';

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const { state, dispatch } = useCustomHook(API_URL);

  const { users, showAll, isLoading, isError } = state;

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
      <div className="container">
        {users &&
          users.map((user, i) => {
            return <Profile key={i} showAll={showAll} user={user} />;
          })}
      </div>
    </>
  );
};

export default App;
