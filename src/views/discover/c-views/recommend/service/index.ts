import requestInstance from "@/service"

/**
 * url: "/banner"
 * method: getBanners
 */
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

export interface IBanners {
  banners: IBanner[]
  code: number
}

export function getBanners() {
  return requestInstance.get<IBanners>({
    url: "/banner",
  })
}
