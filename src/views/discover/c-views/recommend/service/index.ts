import requestInstance from "@/service"

/**
 * url: "/banner"
 * method: getBanners
 */
export function getBanners() {
  return requestInstance.get<IBanners>({
    url: "/banner",
  })
}

export interface IBanners {
  banners: IBanner[]
  code: number
}

export interface IBanner {
  imageUrl: string
  targetId: number
  adid: any
  targetType: number
  titleColor: string
  typeTitle: string
  url: any
  exclusive: boolean
  monitorImpress: any
  monitorClick: any
  monitorType: any
  monitorImpressList: any
  monitorClickList: any
  monitorBlackList: any
  extMonitor: any
  extMonitorInfo: any
  adSource: any
  adLocation: any
  adDispatchJson: any
  encodeId: string
  program: any
  event: any
  video: any
  song: any
  scm: string
  bannerBizType: string
}

/**
 * url: "personalized"
 * method: getHotRecommend
 */
export function getHotRecommend(limit = 30) {
  return requestInstance.get<IHotRecommends>({
    url: "/personalized",
    params: {
      limit,
    },
  })
}

export interface IHotRecommends {
  hasTaste: boolean
  code: number
  category: number
  result: IHotRecommend[]
}

export interface IHotRecommend {
  id: number
  type: number
  name: string
  copywriter: string
  picUrl: string
  canDislike: boolean
  trackNumberUpdateTime: number
  playCount: number
  trackCount: number
  highQuality: boolean
  alg: string
}

/**
 * url: "/album/newest"
 * method: getNewAlbum
 */
export function getNewAlbum() {
  return requestInstance.get<IAlbums>({
    url: "/album/newest",
  })
}

export interface IAlbums {
  code: number
  albums: IAlbum[]
}

export interface IAlbum {
  name: string
  id: number
  type: string
  size: number
  picId: number
  blurPicUrl: string
  companyId: number
  pic: number
  picUrl: string
  publishTime: number
  description: string
  tags: string
  company: string
  briefDesc: string
  artist: IArtist
  songs: any
  alias: any[]
  status: number
  copyrightId: number
  commentThreadId: string
  artists: IArtist2[]
  paid: boolean
  onSale: boolean
  picId_str: string
}

export interface IArtist {
  name: string
  id: number
  picId: number
  img1v1Id: number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  albumSize: number
  alias: string[]
  trans: string
  musicSize: number
  topicPerson: number
  picId_str?: string
  transNames?: string[]
  img1v1Id_str: string
}

export interface IArtist2 {
  name: string
  id: number
  picId: number
  img1v1Id: number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  albumSize: number
  alias: any[]
  trans: string
  musicSize: number
  topicPerson: number
  img1v1Id_str: string
}

/**
 * url: "/playlist/detail"
 * method: getPlayListDetail
 */
export function getPlayListDetail(id: number) {
  return requestInstance.get<IPlayLlist>({
    url: "/playlist/detail",
    params: {
      id,
    },
  })
}

export interface IPlayLlist {
  code: number
  relatedVideos: any
  playlist: Playlist
  urls: any
  privileges: Privilege[]
  sharedPrivilege: any
  resEntrance: any
  fromUsers: any
  fromUserCount: number
  songFromUsers: any
  trialMode: number
}

export interface Playlist {
  id: number
  name: string
  coverImgId: number
  coverImgUrl: string
  coverImgId_str: string
  adType: number
  userId: number
  createTime: number
  status: number
  opRecommend: boolean
  highQuality: boolean
  newImported: boolean
  updateTime: number
  trackCount: number
  specialType: number
  privacy: number
  trackUpdateTime: number
  commentThreadId: string
  playCount: number
  trackNumberUpdateTime: number
  subscribedCount: number
  cloudTrackCount: number
  ordered: boolean
  description: string
  tags: any[]
  updateFrequency: any
  backgroundCoverId: number
  backgroundCoverUrl: any
  titleImage: number
  titleImageUrl: any
  englishTitle: any
  officialPlaylistType: any
  copied: boolean
  relateResType: any
  subscribers: Subscriber[]
  subscribed: boolean
  creator: Creator
  tracks: Track[]
  videoIds: any
  videos: any
  trackIds: TrackId[]
  bannedTrackIds: any
  mvResourceInfos: any
  shareCount: number
  commentCount: number
  remixVideo: any
  sharedUsers: any
  historySharedUsers: any
  gradeStatus: string
  score: any
  algTags: any
  ToplistType: string
}

export interface Subscriber {
  defaultAvatar: boolean
  province: number
  authStatus: number
  followed: boolean
  avatarUrl: string
  accountStatus: number
  gender: number
  city: number
  birthday: number
  userId: number
  userType: number
  nickname: string
  signature: string
  description: string
  detailDescription: string
  avatarImgId: number
  backgroundImgId: number
  backgroundUrl: string
  authority: number
  mutual: boolean
  expertTags: any
  experts: any
  djStatus: number
  vipType: number
  remarkName: any
  authenticationTypes: number
  avatarDetail: any
  avatarImgIdStr: string
  backgroundImgIdStr: string
  anchor: boolean
  avatarImgId_str: string
}

export interface Creator {
  defaultAvatar: boolean
  province: number
  authStatus: number
  followed: boolean
  avatarUrl: string
  accountStatus: number
  gender: number
  city: number
  birthday: number
  userId: number
  userType: number
  nickname: string
  signature: string
  description: string
  detailDescription: string
  avatarImgId: number
  backgroundImgId: number
  backgroundUrl: string
  authority: number
  mutual: boolean
  expertTags: any
  experts: any
  djStatus: number
  vipType: number
  remarkName: any
  authenticationTypes: number
  avatarDetail: AvatarDetail
  avatarImgIdStr: string
  backgroundImgIdStr: string
  anchor: boolean
  avatarImgId_str: string
}

export interface AvatarDetail {
  userType: number
  identityLevel: number
  identityIconUrl: string
}

export interface Track {
  name: string
  id: number
  pst: number
  t: number
  ar: Ar[]
  alia: string[]
  pop: number
  st: number
  rt?: string
  fee: number
  v: number
  crbt: any
  cf: string
  al: Al
  dt: number
  h?: H
  m: M
  l?: L
  sq?: Sq
  hr?: Hr
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
  originSongSimpleData?: OriginSongSimpleData
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
  tns?: string[]
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
  tns: string[]
  pic_str?: string
  pic: number
}

export interface H {
  br: number
  fid: number
  size: number
  vd: number
}

export interface M {
  br: number
  fid: number
  size: number
  vd: number
}

export interface L {
  br: number
  fid: number
  size: number
  vd: number
}

export interface Sq {
  br: number
  fid: number
  size: number
  vd: number
}

export interface Hr {
  br: number
  fid: number
  size: number
  vd: number
}

export interface OriginSongSimpleData {
  songId: number
  name: string
  artists: Artist[]
  albumMeta: AlbumMeta
}

export interface Artist {
  id: number
  name: string
}

export interface AlbumMeta {
  id: number
  name: string
}

export interface TrackId {
  id: number
  v: number
  t: number
  at: number
  alg: any
  uid: number
  rcmdReason: string
  sc: any
  f: any
  sr: any
  lr?: number
  ratio: number
}

export interface Privilege {
  id: number
  fee: number
  payed: number
  realPayed: number
  st: number
  pl: number
  dl: number
  sp: number
  cp: number
  subp: number
  cs: boolean
  maxbr: number
  fl: number
  pc: any
  toast: boolean
  flag: number
  paidBigBang: boolean
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
  rightSource: number
  chargeInfoList: ChargeInfoList[]
}

export interface FreeTrialPrivilege {
  resConsumable: boolean
  userConsumable: boolean
  listenType: any
  cannotListenReason?: number
}

export interface ChargeInfoList {
  rate: number
  chargeUrl: any
  chargeMessage: any
  chargeType: number
}

/**
 * url: "/artist/list"
 * method: getSettleSingers
 */
export function getSettleSingers(limit = 30) {
  return requestInstance.get<Singers>({
    url: "/artist/list",
    params: {
      limit,
    },
  })
}

export interface Singers {
  artists: Singer[]
  more: boolean
  code: number
}

export interface Singer {
  albumSize: number
  alias: string[]
  briefDesc: string
  fansCount: number
  followed: boolean
  id: number
  img1v1Id: number
  img1v1Id_str: string
  img1v1Url: string
  musicSize: number
  name: string
  picId: number
  picId_str?: string
  picUrl: string
  topicPerson: number
  trans: string
  accountId?: number
  transNames?: string[]
}
