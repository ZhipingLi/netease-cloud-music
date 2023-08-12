import React, { memo } from "react"
import type { ReactNode, FC } from "react"

import { SongItemV1Wrapper } from "./style"
import { IHotRecommend } from "@/views/discover/c-views/recommend/service"
import { formatCount, formatImageUrlBySize } from "@/utils/index"

interface IProps {
  children?: ReactNode
  itemData: IHotRecommend
}

const SongItemV1: FC<IProps> = (props) => {
  const { itemData } = props

  return (
    <SongItemV1Wrapper>
      <div className="top">
        <img src={formatImageUrlBySize(itemData.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              <span className="count">{formatCount(itemData.playCount)}</span>
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="bottom">{itemData.name}</div>
    </SongItemV1Wrapper>
  )
}

export default memo(SongItemV1)
