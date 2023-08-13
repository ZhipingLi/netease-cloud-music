import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import {
  getSettleSingers,
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
  Singer,
} from "../service"
import fallbackData from "./fallback-data.json"

interface IRecommendState {
  banners: IBanner[]
  hotRecommend: IHotRecommend[]
  newAlbum: IAlbum[]
  playLists: Playlist[]
  settleSingers: Singer[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommend: [],
  newAlbum: [],
  playLists: [],
  settleSingers: [],
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
    changeSettleSingerAction(state, { payload }: PayloadAction<Singer[]>) {
      state.settleSingers = payload
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

export const fetchSettleSingerAction = createAsyncThunk(
  "recommend/artistList",
  (_, { dispatch }) => {
    getSettleSingers(5).then((res) => {
      dispatch(changeSettleSingerAction(res.artists))
    })
  }
)

export default recommendSlice.reducer
export const {
  changeBannersAction,
  changeHotRecomendAction,
  changeNewAlbumAction,
  changeRecommendRankingAction,
  changeSettleSingerAction,
} = recommendSlice.actions
