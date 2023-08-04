import axios from "axios"
import type { AxiosInstance, InternalAxiosRequestConfig } from "axios"
import type {
  CustomedRequestInterceptors,
  CustomedRequestConfig,
} from "./types"

class CustomedRequest {
  instance: AxiosInstance
  interceptors?: CustomedRequestInterceptors

  constructor(config: CustomedRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    /** 实例拦截器处理 */
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    /** 全局拦截器处理 */
    // ...
  }

  request<T = any>(config: CustomedRequestConfig<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      /** 单个请求的请求拦截处理 */
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(
          config as InternalAxiosRequestConfig
        )
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          /** 单个请求的相应拦截处理 */
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: CustomedRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" })
  }

  post<T = any>(config: CustomedRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" })
  }

  delete<T = any>(config: CustomedRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" })
  }

  patch<T = any>(config: CustomedRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" })
  }
}

export default CustomedRequest
