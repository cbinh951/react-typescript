import { Box, Button, Chip, TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { MovieContext } from '../contexts/MovieContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { PropTypes } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    movieInput: {
      marginRight: '5px',
    },
    movieChip: {
      fontSize: '2rem',
      padding: '30px 10px',
      margin: '5px',
    },
  })
);

const Movies = () => {
  const classes = useStyles();

  const [movie, setMovie] = React.useState<string>('');

  const { movies, addMovie, deleteMovie } = useContext(MovieContext);
  const { theme } = useContext(ThemeContext);

  const chipTheme = theme as Exclude<PropTypes.Color, 'inherit'>;

  const onMovieChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setMovie(event.target.value);

  return (
    <>
      <Box display="flex" justifyContent="center" my={5}>
        <TextField
          label="You favourite movie"
          variant="outlined"
          className={classes.movieInput}
          onChange={onMovieChange}
          value={movie}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            addMovie(movie);
            setMovie('');
          }}
        >
          Add
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap" mx={5}>
        {movies.map((movie) => (
          <Chip
            key={movie.id}
            label={movie.title}
            clickable
            color={chipTheme}
            className={classes.movieChip}
            onDelete={deleteMovie.bind(this, movie.id)}
          />
        ))}
      </Box>
    </>
  );
};

export default Movies;
