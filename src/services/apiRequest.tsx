import axios, {AxiosRequestConfig} from 'axios';
import {store} from '../redux/Store';
import {firebase} from '@react-native-firebase/auth';

export const currentDate = new Date();
export const GOOGLEMAPS_APIKEY = 'AIzaSyBFUxrweON9SsVhe544gW0B29zXyaoJuuY';

export const apiMethod = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE',
  patch: 'PATCH',
};

export async function apiRequest(
  method: string,
  url: string,
  data: any = null,
  isImgUpload: boolean = false,
) {
  const user = firebase.auth().currentUser;

  const headers = {
    'Content-Type': isImgUpload ? 'multipart/form-data' : 'application/json',
  };

  if (user) {
    const {token} = await user.getIdTokenResult(true);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  const config: AxiosRequestConfig = {
    method: method,
    url: url,
    headers: headers,
  };

  if (data !== null) {
    config.data = data;
  }

  try {
    const resp = await axios(config);
    return resp?.data;
  } catch (error: any) {
    throw error;
  }
}
