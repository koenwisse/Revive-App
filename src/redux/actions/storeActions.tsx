import {endPoints} from '../../services/endPoints';
import {SELCTEDCOUNTRY} from '../../utilitis/ActionConstants';
import {apiMethod, apiRequest} from '../../services/apiRequest';

export const createStore = (payload: any) => {
  return async (dispatch: Function) => {
    try {
      apiRequest(apiMethod.post, endPoints.login, payload)
        .then(responce => {
          dispatch({type: SELCTEDCOUNTRY, payload: ''});
          console.log(responce);
        })
        .catch(e => console.log(e));
    } catch (error) {
      console.error('Error fetching country:', error);
    }
  };
};
