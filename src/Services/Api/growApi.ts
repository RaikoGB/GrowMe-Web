import axios from 'axios';

// import { getEnvVariables } from '../helpers';

// const { REACT_APP_API_URL } = getEnvVariables()

console.log(process.env.REACT_APP_API_URL)
const growApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

// growApi.interceptors.request.use( config => {

//   config.headers = {
//       ...config.headers,
//       'x-token': localStorage.getItem('token')
//   }

//   return config;
// })

export default growApi;
