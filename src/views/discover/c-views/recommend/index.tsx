import React, { memo, useEffect } from "react"
import type { ReactNode, FC } from "react"

import {
  fetchBannerDataAction,
  fetchHotRecommendAction,
  fetchNewAlbumAction,
} from "./store"
import { useAppDispatch } from "@/store"
import { RecommendWrapper } from "./style"
import TopBanner from "./c-cpns/top-banner"
import HotRecommed from "./c-cpns/hot-recommed"
import NewAlbum from "./c-cpns/new-album"
import RecommendRanking from "./c-cpns/recommend-ranking"

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchHotRecommendAction())
    dispatch(fetchNewAlbumAction())
  }, [])

  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrapper-v2">
        <div className="left">
          <HotRecommed />
          <NewAlbum />
          <RecommendRanking />
        </div>
        <div className="right">right</div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
