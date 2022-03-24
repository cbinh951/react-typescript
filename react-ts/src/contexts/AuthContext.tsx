import { createContext, useReducer } from 'react';
import { authReducer, AuthState } from '../reducers/AuthReducer';
import { ActionTypes } from '../reducers/types';

const { TOGGLE_AUTH } = ActionTypes;

interface AuthContextProps {
  children: React.ReactNode;
}

interface AuthContextDefault {
  authInfo: AuthState;
  toggleAuth: (username: string) => void;
}

const authDefault = {
  isAuthenticated: false,
  username: '',
};

export const AuthContext = createContext<AuthContextDefault>({
  authInfo: authDefault,
  toggleAuth: () => {},
});

const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [authInfo, dispatch] = useReducer(authReducer, authDefault);

  const toggleAuth = (username: string) =>
    dispatch({ type: TOGGLE_AUTH, payload: username });

  const authContextData = {
    authInfo,
    toggleAuth,
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
