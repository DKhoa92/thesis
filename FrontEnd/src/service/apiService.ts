import axios, { AxiosRequestConfig } from "axios";
import store from "store/store";
import { setAuth } from "store/auth/authSlice";
import { ApiResponse, MODE } from "types";

const baseURL = process.env.REACT_APP_API_URL;
const Mode = process.env.REACT_APP_MODE || MODE.STAGING;

const api = {
  isRefreshingToken: false,
  request: function <T>(
    config: {
      method: AxiosRequestConfig["method"];
      url: AxiosRequestConfig["url"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
    },
    isFormData?: boolean
  ): Promise<ApiResponse<T>> {
    const {
      auth: { auth },
    } = store.getState() || {};

    const { jwt } = auth || {};
    return new Promise((resolve, reject) => {
      const headers = {
        // mode: 'no-cors',
        // "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${jwt}`,
        "Content-Type": isFormData ? "multipart/form-data" : "application/json",
      };
      axios({ baseURL, headers, withCredentials: true, ...config })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          if (!err.response) reject(err);
          const { status } = err.response;

          if (
            status === 401 &&
            err.response.data.code === "token_has_expired"
          ) {
            if (this.isRefreshingToken) {
              const itv = setInterval(() => {
                if (!this.isRefreshingToken) {
                  resolve(this.request(config, isFormData));
                  clearInterval(itv);
                }
              }, 500);
              return;
            }
            this.refreshToken().then((res: boolean) => {
              if (res) {
                resolve(this.request(config, isFormData));
              } else {
                reject(err.response.data);
                store.dispatch(setAuth(null));
              }
            });
          } else if (status === 401) {
            store.dispatch(setAuth(null));
            reject(err.response.data);
          } else {
            reject(err.response.data);
          }
        });
    });
  },
  refreshToken: async function () {
    const {
      auth: { auth },
    } = store.getState() || {};

    const { refreshToken = "", jwt = "" } = auth || {};
    try {
      this.isRefreshingToken = true;
      const res = await axios({
        baseURL,
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
        url: "/auth/refreshtoken",
        method: "post",
        data: {
          refreshToken,
        },
      });
      store.dispatch(setAuth({ ...auth, ...res.data.data }));
      return true;
    } catch (error) {
      return false;
    } finally {
      this.isRefreshingToken = false;
    }
  },
  get: function <T>(url: string, params?: AxiosRequestConfig["params"]) {
    return this.request<T>({
      url,
      method: "get",
      params,
    });
  },
  post: function <T>(
    url: string,
    data: AxiosRequestConfig["data"],
    isFormData?: boolean
  ) {
    return this.request<T>(
      {
        url,
        method: "post",
        data,
      },
      isFormData
    );
  },
  put: function <T>(url: string, data: AxiosRequestConfig["data"]) {
    let config = {
      url,
      method: "put",
      data,
    };
    return this.request<T>(config);
  },
  delete: function <T>(url: string) {
    return this.request<T>({
      url,
      method: "delete",
    });
  },
};

export default api;
