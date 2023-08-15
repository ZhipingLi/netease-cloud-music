import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import defaultSongs from "@/assets/local-data/default_songs.json"
import { getSongDetail, getSongLyric } from "../service"
import { parseLyric } from "@/utils"
import type { ILyric } from "@/utils"
// import type { Song } from "../service"

interface IPlayerState {
  // currentSong: Song
  currentSong: any
  lyrics: ILyric[]
  lyricIndex: number
}

const initialState: IPlayerState = {
  currentSong: defaultSongs[Math.floor(Math.random() * defaultSongs.length)],
  lyrics: [],
  lyricIndex: -1,
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
      state.currentSong = payload
    },
    changeLyricsAction(state, { payload }: PayloadAction<ILyric[]>) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }: PayloadAction<number>) {
      state.lyricIndex = payload
    },
  },
})

export const fetchSongDetailAction = createAsyncThunk(
  "player/songDetail",
  (ids: number[], { dispatch }) => {
    /** 歌曲数据 */
    getSongDetail(ids).then((res) => {
      if (!res.songs.length) return
      // TO-DO: 加入到歌单播放列表
      dispatch(changeCurrentSongAction(res.songs[0]))

      /** 歌词数据 */
      getSongLyric(res.songs[0].id).then((res) => {
        const lyrics = parseLyric(res.lrc.lyric)
        dispatch(changeLyricsAction(lyrics))
      })
    })
  }
)

export default playerSlice.reducer
export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction,
} = playerSlice.actions
