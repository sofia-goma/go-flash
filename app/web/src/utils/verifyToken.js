import getToken from './getToken.js';
import appConfig from '../config/app.config.js';
import axios from 'axios';

console.log(getToken());
const verifyToken = async () => {
   const token = getToken();
   console.log(token);
   if (!token) {
     console.error('No token found');
     return false;
   }
 
   try {
     const response = await axios.post(`${appConfig.BACKEND_API_URL}/api/verifytoken`, { token });
     return response.data.isValid;
   } catch (error) {
     console.error('Error verifying token:', error);
     return false;
   }
 };
 
 export default verifyToken;