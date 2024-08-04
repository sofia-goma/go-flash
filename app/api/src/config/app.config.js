import dotenv from 'dotenv';

dotenv.config();
const appConfig = {
   ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
}

export default appConfig;