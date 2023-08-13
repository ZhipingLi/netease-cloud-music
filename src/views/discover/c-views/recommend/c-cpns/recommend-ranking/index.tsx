import React, { memo } from "react"
import type { ReactNode, FC } from "react"
import { shallowEqual } from "react-redux"

import { useAppSelector } from "@/store"
import { RecommendRankingWrapper } from "./style"
import AreaHeaderV1 from "@/components/area-header-v1"
import RecommendRankingItem from "../recommend-ranking-item"

interface IProps {
  children?: ReactNode
}

const RecommendRanking: FC<IProps> = () => {
  const { playlists } = useAppSelector(
    (state) => ({
      playlists: state.recommend.playLists,
    }),
    shallowEqual
  )

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
