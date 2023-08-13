import React, { memo, useEffect } from "react"
import type { ReactNode, FC } from "react"

import {
  fetchBannerDataAction,
  fetchHotRecommendAction,
  fetchNewAlbumAction,
  fetchRecommendRankingAction,
  fetchSettleSingerAction,
} from "./store"
import { useAppDispatch } from "@/store"
import { RecommendWrapper } from "./style"
import TopBanner from "./c-cpns/top-banner"
import HotRecommed from "./c-cpns/hot-recommed"
import NewAlbum from "./c-cpns/new-album"
import RecommendRanking from "./c-cpns/recommend-ranking"
import UserLogin from "./c-cpns/user-login"
import SettleSinger from "./c-cpns/settle-singer"
import HotAnchor from "./c-cpns/hot-anchor"

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const getRankingIds = () => [19723756, 3779629, 2884035] // ["飙升榜", "新歌榜", "原创榜"]
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchHotRecommendAction())
    dispatch(fetchNewAlbumAction())
    dispatch(fetchRecommendRankingAction(getRankingIds()))
    dispatch(fetchSettleSingerAction())
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
        <div className="right">
          <UserLogin />
          <SettleSinger />
          <HotAnchor />
        </div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
