import { createSlice } from "@reduxjs/toolkit"
import { Song } from "../service"

interface IPlayerState {
  currentSong: Song
}

const initialState: IPlayerState = {
  currentSong: {
    name: "大哥",
    id: 5256469,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 9605,
        name: "卫兰",
        tns: [],
        alias: [],
      },
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: "600902000008894611",
    fee: 8,
    v: 1237,
    crbt: null,
    cf: "",
    al: {
      id: 512139,
      name: "叱吒新一代",
      picUrl:
        "https://p2.music.126.net/i2P1ox4pWG9VLeoRFeUxfQ==/76965813961922.jpg",
      tns: [],
      pic: 76965813961922,
    },
    dt: 237094,
    h: {
      br: 320002,
      fid: 0,
      size: 9486672,
      vd: -29558,
      sr: 44100,
    },
    m: {
      br: 192002,
      fid: 0,
      size: 5692021,
      vd: -26939,
      sr: 44100,
    },
    l: {
      br: 128002,
      fid: 0,
      size: 3794695,
      vd: -25206,
      sr: 44100,
    },
    sq: {
      br: 823005,
      fid: 0,
      size: 24391276,
      vd: -29555,
      sr: 44100,
    },
    hr: null,
    a: null,
    cd: "1",
    no: 1,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 0,
    s_id: 0,
    mark: 8192,
    originCoverType: 1,
    originSongSimpleData: null,
    tagPicList: null,
    resourceState: true,
    version: 1237,
    songJumpInfo: null,
    entertainmentTags: null,
    awardTags: null,
    single: 0,
    noCopyrightRcmd: null,
    rtype: 0,
    rurl: null,
    mst: 9,
    cp: 1416004,
    mv: 0,
    publishTime: 1176912000000,
  },
}

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {},
})

export default playerSlice.reducer
// export const {} = playerSlice
