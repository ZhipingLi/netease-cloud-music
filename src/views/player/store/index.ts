import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import defaultSongs from "@/assets/local-data/default_songs.json"
import { getSongDetail } from "../service"
// import type { Song } from "../service"

interface IPlayerState {
  // currentSong: Song
  currentSong: any
}

const initialState: IPlayerState = {
  currentSong: defaultSongs[Math.floor(Math.random() * defaultSongs.length)],
}

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    changeCurrentSongAction(
      state,
      // { payload }: PayloadAction<Song | undefined>
      { payload }: PayloadAction<any>
    ) {
      payload && (state.currentSong = payload)
    },
  },
})

export const fetchSongDetailAction = createAsyncThunk(
  "player/songDetail",
  (ids: number[], { dispatch }) => {
    getSongDetail(ids).then((res) => {
      dispatch(changeCurrentSongAction(res.songs[0]))
    })
  }
)

export default playerSlice.reducer
export const { changeCurrentSongAction } = playerSlice.actions
