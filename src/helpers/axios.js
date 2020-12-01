import axios from "axios";
import config from "../configs";
const callApi = axios.create({
  baseURL: `${config.REACT_APP_URL}`
});

callApi.interceptors.response.use(
  (res) => {
    return Promise.resolve(res.data);
  },
  (error) => {
    return Promise.reject(error.response.data.error);
  }
);

export default callApi;
