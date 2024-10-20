// util/axiosInstance.js
import axios from 'axios';

function isTokenExpired(token) {
  const decodedToken = JSON.parse(atob(token.split('.')[1]));
  const expiryTime = decodedToken.exp * 1000;
  return expiryTime < Date.now();
}

async function refreshToken() {
  const refreshToken = localStorage.getItem('refreshToken');
  try {
    const response = await axios.post('/api/auth/refresh', {
      token: refreshToken,
    });
    localStorage.setItem('accessToken', response.data.accessToken);
    return response.data.accessToken;
  } catch (error) {
    console.log('Unable to refresh token', error);
    // Handle token refresh failure (e.g., logout user)
    return null;
  }
}

const apiClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`
});

apiClient.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem('accessToken');

    if (isTokenExpired(token)) {
      token = await refreshToken();
    }

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
