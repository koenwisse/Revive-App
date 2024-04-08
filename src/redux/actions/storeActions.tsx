import {apiMethod, apiRequest} from '../../services/apiRequest';
import {endPoints} from '../../services/endPoints';
import {SELCTEDCOUNTRY} from '../../utilitis/ActionConstants';
import {useAppDispatch} from '../Store';

export const createStore = (payload: any) => {
  //   const dispatch = useAppDispatch();
  return async (dispatch: Function) => {
    try {
      apiRequest(apiMethod.post, endPoints.login, payload)
        .then(responce => {
          dispatch({type: SELCTEDCOUNTRY, payload: ''});
          console.log(responce);
        })
        .catch(e => console.log(e));
    } catch (error) {
      // Handle error if API call fails
      console.error('Error fetching country:', error);
    }
  };
};
