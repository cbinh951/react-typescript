import React, { useContext, useEffect } from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  Box,
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  Checkbox,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { TopMovieContext } from '../contexts/TopMovieContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topMoviesHeader: {
      paddingBottom: 0,
    },
    topMoviesList: {
      paddingTop: 0,
    },
    topMoviesItem: {
      paddingTop: '2px',
      paddingBottom: '2px',
    },
  })
);

const TopMovies = () => {
  const classes = useStyles();

  const { topMovies, getTopMovies, toggleWatched } =
    useContext(TopMovieContext);

  useEffect(() => {
    getTopMovies();
  }, []);

  return (
    <Box mt={1} ml={2}>
      <Card raised>
        <CardHeader
          title="Top 10 movies of all time"
          className={classes.topMoviesHeader}
          titleTypographyProps={{
            variant: 'h4',
            align: 'center',
            color: 'primary',
          }}
        />
        <CardContent className={classes.topMoviesList}>
          <List>
            {topMovies.map((movie, index) => (
              <ListItem
                button
                className={classes.topMoviesItem}
                key={movie.imdbID}
              >
                <ListItemIcon>
                  <Checkbox
                    checked={movie.Watched}
                    onClick={toggleWatched.bind(this, movie.imdbID)}
                  />
                </ListItemIcon>
                <ListItemText primary={movie.Title} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TopMovies;
