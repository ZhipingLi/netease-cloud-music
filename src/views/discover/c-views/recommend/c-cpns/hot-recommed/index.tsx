import React, { memo } from "react"
import type { ReactNode, FC } from "react"
import { shallowEqual } from "react-redux"

import { HotRecommendWrapper } from "./style"
import AreaHeaderV1 from "@/components/area-header-v1"
import { useAppSelector } from "@/store"
import SongItemV1 from "@/components/song-item-v1"

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const { hotRecommend } = useAppSelector(
    (state) => ({
      hotRecommend: state.recommend.hotRecommend,
    }),
    shallowEqual
  )

  return (
    <HotRecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
        moreLink="/discover/songs"
      />
      <div className="recommend-list">
        {hotRecommend.map((item) => {
          return <SongItemV1 key={item.id} itemData={item} />
        })}
      </div>
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
