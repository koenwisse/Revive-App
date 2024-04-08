import {
  ACCESSTOKEN,
  FCMTOKEN,
  HASTOKEN,
  LOGOUT,
  SETUSER,
} from '../../utilitis/ActionConstants';

export interface AuthState {
  hasToken: boolean;
  accessToken: string;
}

export interface AuthAction {
  type: string;
  payload?: any;
}

const initialState = {
  userInfo: '',
  hasToken: false,
  accessToken: '',
  fcmToken: '',
};

export const authReducer = (
  state: AuthState = initialState,
  action: AuthAction,
) => {
  switch (action.type) {
    case SETUSER:
      return {...state, userInfo: action.payload};
    case HASTOKEN:
      return {...state, hasToken: action.payload};
    case ACCESSTOKEN:
      return {...state, accessToken: action.payload};
    case FCMTOKEN:
      return {...state, fcmToken: action.payload};
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
