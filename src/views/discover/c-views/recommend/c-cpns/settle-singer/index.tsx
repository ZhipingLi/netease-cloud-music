import React, { memo } from "react"
import type { ReactNode, FC } from "react"
import { shallowEqual } from "react-redux"
import { Link } from "react-router-dom"

import { SettleSingerWrapper } from "./style"
import AreaHeaderV2 from "@/components/area-header-v2"
import { useAppSelector } from "@/store"
import { formatImageUrlBySize } from "@/utils"

interface IProps {
  children?: ReactNode
}

const SettleSinger: FC<IProps> = () => {
  const { settleSingers } = useAppSelector(
    (state) => ({
      settleSingers: state.recommend.settleSingers,
    }),
    shallowEqual
  )

  return (
    <SettleSingerWrapper>
      <AreaHeaderV2
        title="入驻歌手"
        moreText="查看全部 &gt;"
        moreLink="/discover/artist"
      />
      <div className="artists">
        {settleSingers.map((singer) => {
          return (
            <Link key={singer.id} className="singer" to="/discover/artist">
              <img src={formatImageUrlBySize(singer.picUrl, 62)} alt="" />
              <div className="info">
                <div className="name">{singer.name}</div>
                <div className="alias">{singer.alias.join(" ")}</div>
              </div>
            </Link>
          )
        })}
      </div>
      <div className="apply-for">
        <a
          href="https://music.163.com/st/musician"
          target="_blank"
          rel="noreferrer"
        >
          申请成为网易音乐人
        </a>
      </div>
    </SettleSingerWrapper>
  )
}

export default memo(SettleSinger)
