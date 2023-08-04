/**
 * 开发环境和生产环境的区分
 */

/** 1. 手动切换 */
// export const BASE_URL = "http://httpbin.org/dev"
// export const BASE_URL = "http://httpbin.org/prod"
// export const BASE_URL = "http://httpbin.org/test"

/** 2. process.env.NODE_ENV - webpack.DefinePlugin */
// export let BASE_URL = ""
// if (process.env.NODE_ENV === "development") {
//   BASE_URL = "http://httpbin.org/dev"
// } else if (process.env.NODE_ENV === "production") {
//   BASE_URL = "http://httpbin.org/prod"
// } else if (process.env.NODE_ENV === "test") {
//   BASE_URL = "http://httpbin.org/test"
// }

/** 3. .env.[development/production/test] - REACT_APP_BASE_URL=http://httpbin.org/*** */
// export const BASE_URL = process.env.REACT_APP_BASE_URL

/** ------------------------------------------------------------------------------------------- */
export const BASE_URL = process.env.REACT_APP_BASE_URL
export const TIME_OUT = 10000
