import { configureStore } from "@reduxjs/toolkit"

import recommendReducer from "../views/discover/c-views/recommend/store"
import playerReducer from "../views/player/store"

const store = configureStore({
  reducer: {
    recommend: recommendReducer,
    player: playerReducer,
  },
})

export default store
export * from "./hooks"
