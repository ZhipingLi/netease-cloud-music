import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import defaultSong from "@/assets/local-data/default_song.json"
import { getSongDetail, getSongLyric } from "../service"
// import type { Song } from "../service"
import { parseLyric } from "@/utils"
import type { ILyric } from "@/utils"
import type { RootStateType } from "@/store"

interface IPlayerState {
  currentSong: any // Song
  lyrics: ILyric[]
  lyricIndex: number
  songList: any[]
  songIndex: number
  playMode: PlayMode
}

export enum PlayMode {
  INORDER = 0, // 顺序播放
  SHUFFLE = 1, // 随机播放
  CYCLE = 2, // 单曲循环
}

const initialState: IPlayerState = {
  currentSong: defaultSong,
  lyrics: [],
  lyricIndex: -1,
  songList: [defaultSong],
  songIndex: 0,
  playMode: PlayMode.INORDER,
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
    changePlayModeAction(state, { payload }: PayloadAction<number>) {
      state.playMode = payload
    },
  },
})

/**
 * createAsyncThunk泛型解析（createAsyncThunk.d.ts）
 *
 * export declare type AsyncThunkPayloadCreator<
 *   Returned, // 返回值类型
 *   ThunkArg = void, // 参数类型
 *   ThunkApiConfig extends AsyncThunkConfig = {}, // ![code focus]
 * > = (
 *   arg: ThunkArg,
 *   thunkAPI: GetThunkAPI<ThunkApiConfig>
 * ) => AsyncThunkPayloadCreatorReturnValue<Returned, ThunkApiConfig>
 *
 * declare type AsyncThunkConfig = {
 *   state?: unknown;
 *   dispatch?: Dispatch;
 *   extra?: unknown;
 *   rejectValue?: unknown;
 *   serializedErrorType?: unknown;
 *   pendingMeta?: unknown;
 *   fulfilledMeta?: unknown;
 *   rejectedMeta?: unknown;
 * };
 *
 * solutions:
 * 1. 定义createAsyncThunk类型 - createAsyncThunk()<>
 * 2. 为createAppAsyncThunk定义预类型 - createAsyncThunk.withTypes<>()
 */

interface IThunkState {
  state: RootStateType
}
export const fetchSongDetailsToSongListAction = createAsyncThunk<
  void,
  {
    ids: number[]
    isCurrentSong: boolean
    fullfilledCallback?: () => void
    rejectedCallback?: (err: Error) => void
  },
  IThunkState
>("player/songDetails", (args, { getState, dispatch }) => {
  getSongDetail(args.ids)
    .then((res) => {
      if (!res.songs.length) throw new Error("empty song detail!")

      const { songList } = getState().player
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
})

export const updateCurrentSongfromSongListAction = createAsyncThunk<
  void,
  void,
  IThunkState
>("player/updateCurrentSong", (_, { getState, dispatch }) => {
  const { songList, songIndex, currentSong } = getState().player
  dispatch(
    // 实现切换相同歌曲时，歌曲重新播放
    changeCurrentSongAction(
      songList[songIndex] === currentSong
        ? { ...songList[songIndex] }
        : songList[songIndex]
    )
  )
})

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

export const playSingleSongAction = createAsyncThunk<
  void,
  {
    id: number
    callback?: () => void
  },
  IThunkState
>("player/playSingleSong", (args, { getState, dispatch }) => {
  const { songList } = getState().player
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
})

export const playSongListAction = createAsyncThunk<
  void,
  {
    ids: number[]
    callback?: () => void
  },
  IThunkState
>("player/playSongList", (args, { getState, dispatch }) => {
  const { songList: originSongList } = getState().player
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
})

export default playerSlice.reducer
export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction,
  changeSongListAction,
  changeSongIndexAction,
  changePlayModeAction,
} = playerSlice.actions
