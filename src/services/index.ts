import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ISignIn } from '~/types';

export interface IAuthResponse {
  status: number;
  message: string;
  body: {
    token: string;
  };
}

const apiUrl = import.meta.env.VITE_API_URL;
Axios.defaults.baseURL = apiUrl;

/** Redirection to login page if token is expired */
Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // localStorage.removeItem('token');
      const navigate = useNavigate();
      navigate('/sign-in');
    } else {
      return Promise.reject(error);
    }
  }
);

/**
 * Api call to authenticate user and get token
 * @param data - Credentials to authenticate
 * @returns - Response data with user token
 */
async function authenticate(data: ISignIn) {
  try {
    const res = await Axios.post('/login', data);
    if (res.status === 200) {
      // localStorage.setItem('token', res.data.body.token);
      const authResData: IAuthResponse = res.data;
      return authResData;
    }
    throw new Error(res.data.message);
  } catch (err) {
    throw new Error(`${err}`);
  }
}
export { authenticate };
