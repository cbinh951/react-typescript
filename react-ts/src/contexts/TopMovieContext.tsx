import { TopMovieActionType } from '../reducers/types';
import { TopMovieState, topMovieReducer } from '../reducers/TopMovieReducer';
import { useReducer, createContext } from 'react';
import topMoviesInfo from '../api/getTopMovies';

const { GET_TOP_MOVIES, TOGGLE_TOP_MOVIE_WATCHED } = TopMovieActionType;

interface TopMovieContextProps {
  children: React.ReactNode;
}

interface TopMovieContextDefault {
  topMovies: TopMovieState;
  getTopMovies: () => Promise<void>;
  toggleWatched: (id: string) => void;
}

const topMoviesDefault: TopMovieState = [];

export const TopMovieContext = createContext<TopMovieContextDefault>({
  topMovies: topMoviesDefault,
  getTopMovies: () => Promise.resolve(void 0),
  toggleWatched: (id: string) => {},
});

const TopMovieContextProvider = ({ children }: TopMovieContextProps) => {
  const [topMovies, dispatch] = useReducer(topMovieReducer, topMoviesDefault);

  const getTopMovies = async () => {
    const topMovies = await Promise.all(topMoviesInfo);
    dispatch({
      type: GET_TOP_MOVIES,
      payload: topMovies.map((topMovie) => ({
        ...topMovie.data,
        Watched: false,
      })),
    });
  };

  const toggleWatched = (imdbId: string) =>
    dispatch({ type: TOGGLE_TOP_MOVIE_WATCHED, payload: imdbId });

  const topMovieContextData = {
    topMovies,
    getTopMovies,
    toggleWatched,
  };

  return (
    <TopMovieContext.Provider value={topMovieContextData}>
      {children}
    </TopMovieContext.Provider>
  );
};

export default TopMovieContextProvider;
