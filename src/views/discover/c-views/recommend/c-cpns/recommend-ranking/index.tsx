import React, { memo, useEffect } from "react"
import type { ReactNode, FC } from "react"
import { shallowEqual } from "react-redux"

import { useAppDispatch, useAppSelector } from "@/store"
import { fetchRecommendRankingAction } from "../../store"
import { RecommendRankingWrapper } from "./style"
import AreaHeaderV1 from "@/components/area-header-v1"
import RecommendRankingItem from "../recommend-ranking-item"

interface IProps {
  children?: ReactNode
}

const RecommendRanking: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { playlists } = useAppSelector(
    (state) => ({
      playlists: state.recommend.playLists,
    }),
    shallowEqual
  )

  const getRankingIds = () => [19723756, 3779629, 2884035] // ["飙升榜", "新歌榜", "原创榜"]
  useEffect(() => {
    dispatch(fetchRecommendRankingAction(getRankingIds()))
  }, [])

  return (
    <RecommendRankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
      <div className="content">
        {playlists.map((playlist) => (
          <RecommendRankingItem key={playlist.id} itemData={playlist} />
        ))}
      </div>
    </RecommendRankingWrapper>
  )
}

export default memo(RecommendRanking)
