import {
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Button,
} from '@material-ui/core';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

interface LoginProps {
  isOpen: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}
const Login = ({ isOpen, handleClose }: LoginProps) => {
  const { toggleAuth } = useContext(AuthContext);

  const [username, setUsername] = useState('');

  const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);

  const onLoginSubmit = () => {
    toggleAuth(username);
    setUsername('');
    handleClose(false);
  };

  return (
    <Dialog open={isOpen} onClose={handleClose.bind(this, false)}>
      <DialogContent>
        <TextField
          label="Username"
          onChange={onUsernameChange}
          required
          value={username}
        />
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          variant="contained"
          onClick={onLoginSubmit}
          disabled={username === ''}
        >
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Login;
