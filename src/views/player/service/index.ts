import requestInstance from "@/service"

/**
 * url: "/song/detail"
 * method: getSongDetail
 */
export function getSongDetail(ids: number[]) {
  return requestInstance.get<SongDetailResult>({
    url: "/song/detail",
    params: {
      ids: ids.join(","),
    },
  })
}

export interface SongDetailResult {
  songs: Song[]
  privileges: Privilege[]
  code: number
}

export interface Song {
  name: string
  id: number
  pst: number
  t: number
  ar: Ar[]
  alia: any[]
  pop: number
  st: number
  rt?: string | null
  fee: number
  v: number
  crbt: any
  cf: string
  al: Al
  dt: number
  h: H
  m: M
  l: L
  sq?: Sq
  hr?: Hr | null
  a: any
  cd: string
  no: number
  rtUrl: any
  ftype: number
  rtUrls: any[]
  djId: number
  copyright: number
  s_id: number
  mark: number
  originCoverType: number
  originSongSimpleData: any
  tagPicList: any
  resourceState: boolean
  version: number
  songJumpInfo: any
  entertainmentTags: any
  awardTags: any
  single: number
  noCopyrightRcmd: any
  rtype: number
  rurl: any
  mst: number
  cp: number
  mv: number
  publishTime: number
}

export interface Ar {
  id: number
  name: string
  tns: any[]
  alias: any[]
}

export interface Al {
  id: number
  name: string
  picUrl: string
  tns: any[]
  pic: number
  pic_str?: string
}

export interface H {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface M {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface L {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface Sq {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface Hr {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface Privilege {
  id: number
  fee: number
  payed: number
  st: number
  pl: number
  dl: number
  sp: number
  cp: number
  subp: number
  cs: boolean
  maxbr: number
  fl: number
  toast: boolean
  flag: number
  preSell: boolean
  playMaxbr: number
  downloadMaxbr: number
  maxBrLevel: string
  playMaxBrLevel: string
  downloadMaxBrLevel: string
  plLevel: string
  dlLevel: string
  flLevel: string
  rscl: any
  freeTrialPrivilege: FreeTrialPrivilege
  chargeInfoList: ChargeInfoList[]
}

export interface FreeTrialPrivilege {
  resConsumable: boolean
  userConsumable: boolean
  listenType: any
}

export interface ChargeInfoList {
  rate: number
  chargeUrl: any
  chargeMessage: any
  chargeType: number
}

/**
 * url: "/song/url/v1"
 * method: getSongPlayUrl
 */
/** 音质等级 */
export enum MusicQualityLevel {
  STANDARD = "standard", // 标准
  HIGHER = "higher", // 较高
  EXHIGH = "exhigh", // 极高
  LOSSLESS = "lossless", // 无损
  HIRES = "hires", // Hi-Res
  JYEFFECT = "jyeffect", // 高清环绕声
  SKY = "sky", // 沉浸环绕声
  JYMASTER = "jymaster", // 超清母带
}

export function getSongPlayUrls(
  ids: number[],
  level: MusicQualityLevel = MusicQualityLevel.STANDARD
) {
  return requestInstance.get<SongPlayUrlResult>({
    url: "/song/url/v1",
    params: {
      id: ids.join(","),
      level,
    },
  })
}

export interface SongPlayUrlResult {
  data: SongPlayUrls[]
  code: number
}

export interface SongPlayUrls {
  id: number
  url: string
  br: number
  size: number
  md5: string
  code: number
  expi: number
  type: string
  gain: number
  peak: number
  fee: number
  uf: any
  payed: number
  flag: number
  canExtend: boolean
  freeTrialInfo: any
  level: string
  encodeType: string
  freeTrialPrivilege: FreeTrialPrivilege2
  freeTimeTrialPrivilege: FreeTimeTrialPrivilege
  urlSource: number
  rightSource: number
  podcastCtrp: any
  effectTypes: any
  time: number
}

export interface FreeTrialPrivilege2 {
  resConsumable: boolean
  userConsumable: boolean
  listenType: any
  cannotListenReason: any
}

export interface FreeTimeTrialPrivilege {
  resConsumable: boolean
  userConsumable: boolean
  type: number
  remainTime: number
}

/**
 * url: "/lyric"
 * method: getSongLyric
 */
export function getSongLyric(id: number) {
  return requestInstance.get<LyricResult>({
    url: "lyric",
    params: {
      id,
    },
  })
}

export interface LyricResult {
  sgc: boolean
  sfy: boolean
  qfy: boolean
  lrc: Lyric
  klyric: Klyric
  tlyric: Tlyric
  romalrc: Romalrc
  code: number
}

export interface Lyric {
  version: number
  lyric: string
}

export interface Klyric {
  version: number
  lyric: string
}

export interface Tlyric {
  version: number
  lyric: string
}

export interface Romalrc {
  version: number
  lyric: string
}
