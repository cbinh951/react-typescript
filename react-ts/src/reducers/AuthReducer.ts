import { ActionTypes } from './types';

const {TOGGLE_AUTH} = ActionTypes;

export interface AuthState {
  isAuthenticated: boolean;
  username: string;
}

type AuthAction = {
  type: ActionTypes;
  payload: string;
}

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case TOGGLE_AUTH:
      return {
        ...state,
        isAuthenticated: !state.isAuthenticated,
        username: action.payload
      }
    default:
      return state;
  }
}