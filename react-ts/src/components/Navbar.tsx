import {
  AppBar,
  Box,
  Button,
  Chip,
  FormControl,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState, useContext } from 'react';
import WelcomeMessage from './WelcomeMessage';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { ProgressContext } from '../contexts/ProgressContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

import Login from './Login';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    positionSelect: {
      color: 'while',
      borderBottom: '1px solid while',
    },
  })
);

const Navbar = () => {
  const classes = useStyles();

  const { lastTime, status } = useContext(ProgressContext);
  const { theme } = useContext(ThemeContext);
  const {
    authInfo: { isAuthenticated },
    toggleAuth,
  } = useContext(AuthContext);

  const [position, setPosition] = useState<string>('Full-stack Developer');
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date(Date.now()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const onPositionChange = (
    event: React.ChangeEvent<{
      value: unknown;
    }>
  ) => setPosition(event.target.value as string);

  return (
    <AppBar position="static" color={theme}>
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          py={2}
        >
          <Typography variant="h6">My movies</Typography>
          <Box textAlign="center">
            <WelcomeMessage position={position} />
            <Chip
              label={`Last time working on this project: ${lastTime} - Status: ${status}`}
            />
            <Box mt={1}>
              <FormControl>
                <Select
                  value={position}
                  onChange={onPositionChange}
                  className={classes.positionSelect}
                >
                  <MenuItem value="Full-stack Developer">
                    Full-stack Developer
                  </MenuItem>
                  <MenuItem value="Front-end Developer">
                    Front-end Developer
                  </MenuItem>
                  <MenuItem value="Back-end Developer">
                    Back-end Developer
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box textAlign="center">
              <Box my={1}>
                <Typography variant="h6">{time.toUTCString()}</Typography>
              </Box>
              <Button
                variant="contained"
                onClick={
                  isAuthenticated
                    ? toggleAuth.bind(this, '')
                    : setLoginOpen.bind(this, true)
                }
              >
                {isAuthenticated ? 'Logout' : 'Login'}
              </Button>
            </Box>
          </Box>

          <Login isOpen={loginOpen} handleClose={setLoginOpen} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
