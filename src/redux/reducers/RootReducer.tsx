import {Reducer, UnknownAction, combineReducers} from 'redux';
import {HASTOKEN} from '../../utilitis/ActionConstants';
import {AuthState, authReducer} from './AuthReducer';

interface Rootstate {
  authReducer: AuthState;
}

const appReducer: Reducer<Rootstate> = combineReducers({
  authReducer,
});

const RootReducer = (state: Rootstate | undefined, action: UnknownAction) => {
  if (action.type === HASTOKEN && action.payload === false) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default RootReducer;
