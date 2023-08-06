import { configureStore } from "@reduxjs/toolkit"

import recommendReducer from "../views/discover/c-views/recommend/store"

const store = configureStore({
  reducer: {
    recommend: recommendReducer,
  },
})

export default store
export * from "./hooks"
