import CustomedRequest from "./request"
import { BASE_URL, TIME_OUT } from "./config/index"

const requestInstance = new CustomedRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
})

export { requestInstance as default, CustomedRequest }
