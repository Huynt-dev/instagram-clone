import dotenv from "dotenv";
dotenv.config();

const configs = {
  REACT_APP_URL: process.env.REACT_APP_URL,
  IMAGE_URL: process.env.REACT_APP_IMAGE_URL
};

export default configs;
