import FuseUtils from '@fuse/utils/FuseUtils';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import httpApi from 'src/app/httpApi';
import jwtServiceConfig from './jwtServiceConfig';

/* eslint-disable camelcase */

class JwtService extends FuseUtils.EventEmitter {
  init() {
    this.setInterceptors();
    this.handleAuthentication();
  }

  setInterceptors = () => {
    httpApi.interceptors.response.use(
      (response) => {
        return response;
      },
      (err) => {
        return new Promise((resolve, reject) => {
          if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
            // if you ever get an unauthorized response, logout the user
            this.emit('onAutoLogout', 'Invalid accessToken');
            this.setSession(null);
          }
          throw err;
        });
      }
    );
  };

  handleAuthentication = () => {
    const accessToken = this.getAccessToken();

    if (!accessToken) {
      this.emit('onNoAccessToken');

      return;
    }

    if (this.isAuthTokenValid(accessToken)) {
      this.setSession(accessToken);
      this.emit('onAutoLogin', true);
    } else {
      this.setSession(null);
      this.emit('onAutoLogout', 'access_token expired');
    }
  };

  createUser = (data) => {
    return new Promise((resolve, reject) => {
      httpApi.post(jwtServiceConfig.signUp, data).then((response) => {
        if (response.data.userName) {
          this.setSession(response.data.accessToken);
          resolve(response.data.userName);
          this.emit('onLogin', response.data.userName);
        } else {
          reject(response.data.error);
        }
      });
    });
  };

  signInWithEmailAndPassword = (name, pass) => {
    return new Promise((resolve, reject) => {
      httpApi
        .post(jwtServiceConfig.signIn, {
          userName: name,
          password: pass,
        })
        .then((response) => {
          console.log(response);
          if (response.data) {
            console.log(response.data.data);
            this.setSession(response.data.data.accessToken, response.data.data.refreshToken);
            this.emit('onLogin', response.data.data);
            // localStorage.setItem('refreshToken', response.data.data.refreshToken);
            resolve(response.data);
          } else {
            reject(response.data.error);
          }
        });
    });
  };

  signInWithToken = () => {
    return new Promise((resolve, reject) => {
      httpApi
        .post(jwtServiceConfig.accessToken, {
          refreshToken: this.getrefreshToken(),
        })
        .then((response) => {
          console.log(response);
          if (response.data.data) {
            this.setSession(response.data.data.accessToken);
            resolve(response.data.data);
          } else {
            this.logout();
            reject(new Error('Failed to login with token.'));
          }
        })
        .catch((error) => {
          this.logout();
          reject(new Error('Failed to login with token.'));
        });
    });
  };

  updateUserData = (user) => {
    return axios.post(jwtServiceConfig.updateUser, {
      user,
    });
  };

  setSession = (accessToken, refreshToken = 1) => {
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      httpApi.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      // httpApi.defaults.headers.common.=-'content-type': "multipart/form-data";
      
      if (refreshToken !== 1) {
        localStorage.setItem('refreshToken', refreshToken);
      }
    } else {
      localStorage.removeItem('accessToken');
      // delete httpApi.defaults.headers.common.Authorization;
    }
  };

  logout = () => {
    this.setSession(null);
    this.emit('onLogout', 'Logged out');
  };

  isAuthTokenValid = (accessToken) => {
    if (!accessToken) {
      return false;
    }
    const decoded = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      console.warn('access token expired');
      return false;
    }

    return true;
  };

  getAccessToken = () => {
    return window.localStorage.getItem('accessToken');
  };

  getrefreshToken = () => {
    return window.localStorage.getItem('refreshToken');
  };
}

const instance = new JwtService();

export default instance;
