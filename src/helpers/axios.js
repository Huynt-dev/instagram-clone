import axios from "axios";

const callApi = axios.create({
  baseURL: "https://1q6gt.sse.codesandbox.io"
});

callApi.interceptors.response.use(
  (res) => {
    console.log(res);
    return Promise.resolve(res.data);
  },
  (error) => {
    return Promise.reject(error.response.data.error);
  }
);

export default callApi;
