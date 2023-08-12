import React, { memo } from "react"
import type { ReactNode, FC } from "react"

import { SoneItemV2Wrapper } from "./style"
import type { IAlbum } from "@/views/discover/c-views/recommend/service"
import { formatImageUrlBySize } from "@/utils"

interface IProps {
  children?: ReactNode
  itemData: IAlbum
}

const SoneItemV2: FC<IProps> = (props) => {
  const { itemData } = props

  return (
    <SoneItemV2Wrapper>
      <div className="top">
        <img src={formatImageUrlBySize(itemData.picUrl, 100)} alt="" />
        <a href="" className="cover sprite_cover"></a>
      </div>
      <div className="bottom">
        <div className="name">{itemData.name}</div>
        <div className="artist">{itemData.artist.name}</div>
      </div>
    </SoneItemV2Wrapper>
  )
}

export default memo(SoneItemV2)
