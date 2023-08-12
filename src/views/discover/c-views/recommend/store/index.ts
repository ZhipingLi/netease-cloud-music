import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import {
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlayListDetail,
} from "../service"
import type {
  IAlbum,
  IBanner,
  IHotRecommend,
  IPlayLlist,
  Playlist,
} from "../service"
import fallbackData from "./fallback-data.json"

interface IRecommendState {
  banners: IBanner[]
  hotRecommend: IHotRecommend[]
  newAlbum: IAlbum[]
  playLists: Playlist[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommend: [],
  newAlbum: [],
  playLists: [],
}

const recommendSlice = createSlice({
  name: "discover/recommend",
  initialState,
  reducers: {
    changeBannersAction(state, { payload }: PayloadAction<IBanner[]>) {
      state.banners = payload
    },
    changeHotRecomendAction(
      state,
      { payload }: PayloadAction<IHotRecommend[]>
    ) {
      state.hotRecommend = payload
    },
    changeNewAlbumAction(state, { payload }: PayloadAction<IAlbum[]>) {
      state.newAlbum = payload
    },
    changeRecommendRankingAction(
      state,
      { payload }: PayloadAction<Playlist[]>
    ) {
      state.playLists = payload
    },
  },
})

export const fetchBannerDataAction = createAsyncThunk(
  "recommend/banners",
  (_, { dispatch }) => {
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

export const fetchHotRecommendAction = createAsyncThunk(
  "recommend/hotRecommend",
  (_, { dispatch }) => {
    getHotRecommend(8).then((res) => {
      dispatch(changeHotRecomendAction(res.result))
    })
  }
)

export const fetchNewAlbumAction = createAsyncThunk(
  "recommend/newAlbum",
  (_, { dispatch }) => {
    getNewAlbum().then((res) => {
      dispatch(changeNewAlbumAction(res.albums))
    })
  }
)

export const fetchRecommendRankingAction = createAsyncThunk(
  "recommend/ranking",
  (args: number[], { dispatch }) => {
    const promises: Promise<IPlayLlist>[] = args.map((arg) =>
      getPlayListDetail(arg)
    )
    Promise.all(promises).then((resArr) => {
      const playLists = resArr.map((res) => res.playlist)
      dispatch(changeRecommendRankingAction(playLists))
    })
  }
)

export default recommendSlice.reducer
export const {
  changeBannersAction,
  changeHotRecomendAction,
  changeNewAlbumAction,
  changeRecommendRankingAction,
} = recommendSlice.actions
