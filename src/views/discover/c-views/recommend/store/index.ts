import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import { getBanners } from "../service"
import type { IBanner } from "../service"
import fallbackData from "./fallback-data.json"

interface IRecommendState {
  banners: IBanner[]
}

const initialState: IRecommendState = {
  banners: [],
}

const recommendSlice = createSlice({
  name: "discover/recommend",
  initialState,
  reducers: {
    changeBannersAction(state, { payload }: PayloadAction<IBanner[]>) {
      state.banners = payload
    },
  },
})

export const fetchBannerDataAction = createAsyncThunk(
  "recommend/banners",
  (arg, { dispatch }) => {
    getBanners().then(
      (res) => {
        dispatch(changeBannersAction(res.banners))
      },
      () => {
        dispatch(changeBannersAction(fallbackData.banners))
      }
    )
  }
)

export default recommendSlice.reducer
export const { changeBannersAction } = recommendSlice.actions
