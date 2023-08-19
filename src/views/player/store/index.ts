import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import defaultSong from "@/assets/local-data/default_song.json"
import { getSongDetail, getSongLyric } from "../service"
// import type { Song } from "../service"
import { parseLyric } from "@/utils"
import type { ILyric } from "@/utils"

interface IPlayerState {
  currentSong: any // Song
  lyrics: ILyric[]
  lyricIndex: number
  songList: any[]
  songIndex: number
}

const initialState: IPlayerState = {
  currentSong: defaultSong,
  lyrics: [],
  lyricIndex: -1,
  songList: [defaultSong],
  songIndex: 0,
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
    changeSongListAction(state, { payload }: PayloadAction<any[]>) {
      state.songList = payload
    },
    changeSongIndexAction(state, { payload }: PayloadAction<number>) {
      state.songIndex = payload
    },
  },
})

export const fetchSongDetailsToSongListAction = createAsyncThunk(
  "player/songDetails",
  (
    args: {
      ids: number[]
      isCurrentSong: boolean
      fullfilledCallback?: () => void
      rejectedCallback?: (err: Error) => void
    },
    { getState, dispatch }
  ) => {
    getSongDetail(args.ids)
      .then((res) => {
        if (!res.songs.length) throw new Error("empty song detail!")

        const { songList } = (getState() as any).player
        // 加入歌单播放列表
        dispatch(changeSongListAction([...songList, ...res.songs]))
        if (args.isCurrentSong) {
          dispatch(changeSongIndexAction(songList.length))
          // fullfilledCalback: setIsPlaying(true) -> 播放歌单，立即播放
          args.fullfilledCallback && args.fullfilledCallback()
          dispatch(updateCurrentSongfromSongListAction())
        }
      })
      .catch(args.rejectedCallback)
  }
)

export const updateCurrentSongfromSongListAction = createAsyncThunk(
  "player/updateCurrentSong",
  (_, { getState, dispatch }) => {
    const { songList, songIndex, currentSong } = (getState() as any).player
    dispatch(
      // 实现切换相同歌曲时，歌曲重新播放
      changeCurrentSongAction(
        songList[songIndex] === currentSong
          ? { ...songList[songIndex] }
          : songList[songIndex]
      )
    )
  }
)

export const fetchSongLyricAction = createAsyncThunk(
  "player/songLyric",
  (id: number, { dispatch }) => {
    /** 歌词数据 */
    getSongLyric(id).then((res) => {
      const lyrics = parseLyric(res.lrc.lyric)
      dispatch(changeLyricsAction(lyrics))
    })
  }
)

export const playSingleSongAction = createAsyncThunk(
  "player/playSingleSong",
  (
    args: {
      id: number
      callback?: () => void
    },
    { getState, dispatch }
  ) => {
    const { songList } = (getState() as any).player
    const index = songList.findIndex((song: any) => song.id === args.id)
    if (index === -1) {
      dispatch(
        fetchSongDetailsToSongListAction({
          ids: [args.id],
          isCurrentSong: true,
          fullfilledCallback: args.callback,
        })
      )
    } else {
      dispatch(changeSongIndexAction(index))
      dispatch(updateCurrentSongfromSongListAction())
      args.callback && args.callback()
    }
  }
)

export const playSongListAction = createAsyncThunk(
  "player/playSongList",
  (
    args: {
      ids: number[]
      callback?: () => void
    },
    { getState, dispatch }
  ) => {
    const { songList: originSongList } = (getState() as any).player
    dispatch(changeSongListAction([]))
    dispatch(
      fetchSongDetailsToSongListAction({
        ids: args.ids,
        isCurrentSong: true,
        fullfilledCallback: args.callback,
        rejectedCallback: () => {
          dispatch(changeSongListAction(originSongList))
        },
      })
    )
  }
)

export default playerSlice.reducer
export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction,
  changeSongListAction,
  changeSongIndexAction,
} = playerSlice.actions
