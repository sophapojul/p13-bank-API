import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ISignIn, IGetUser } from '~/types';

export interface IAuthResponse {
  status: number;
  message: string;
  body: {
    token: string;
  };
}

export interface IUserResponse {
  status: number;
  message: string;
  body: IGetUser;
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
      localStorage.setItem('token', res.data.body.token);
      const authResData: IAuthResponse = res.data;
      return authResData;
    }
    throw new Error(res.data.message);
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
  }
}
/** Api call to get user informations
 * @returns - Response data with user informations
 * */
async function getUser() {
  try {
    const authAxios = Axios.create({
      baseURL: apiUrl,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    const res = await authAxios.post('/profile');
    if (res.status === 200) {
      const getUserData: IUserResponse = res.data;
      return getUserData;
    }
    throw new Error(res.data.message);
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
  }
}

/**
 * Api call to update user informations
 * @param data - user informations to update
 * @returns - response data with user informations updated
 */
async function putProfile(data: IGetUser) {
  try {
    /** Set headers options with Authorization token from localStorage */
    const authAxios = Axios.create({
      baseURL: apiUrl,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    const res = await authAxios.put('/profile', data);
    if (res.status === 200) {
      const putProfileData: IUserResponse = res.data;
      return putProfileData;
    }
    throw new Error(res.data.message);
  } catch (err) {
    throw new Error(`${err}`);
  }
}

/** Remove the token to log out the user */
function logout() {
  localStorage.removeItem('token');
}
export { authenticate, logout, getUser, putProfile };
