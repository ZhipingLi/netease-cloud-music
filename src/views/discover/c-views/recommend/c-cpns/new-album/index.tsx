import React, { memo, useRef } from "react"
import type { ReactNode, FC, ElementRef } from "react"
import { shallowEqual } from "react-redux"
import { Carousel } from "antd"

import { AlbumWrapper } from "./style"
import { useAppSelector } from "@/store"
import AreaHeaderV1 from "@/components/area-header-v1"
import SoneItemV2 from "@/components/song-item-v2"

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const { newAlbum } = useAppSelector(
    (state) => ({
      newAlbum: state.recommend.newAlbum,
    }),
    shallowEqual
  )

  return (
    <AlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={() => bannerRef.current!.prev()}
        ></button>
        <div className="banner">
          <Carousel ref={bannerRef} dots={false} speed={1500}>
            {[0, 1].map((groupIndex) => {
              return (
                <div key={groupIndex}>
                  <div className="album-list">
                    {newAlbum
                      .slice(groupIndex * 5, (groupIndex + 1) * 5)
                      .map((album) => {
                        return <SoneItemV2 key={album.id} itemData={album} />
                      })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow-right"
          onClick={() => bannerRef.current!.next()}
        ></button>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)
