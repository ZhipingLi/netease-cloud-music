import React, { memo, useContext } from "react"
import type { ReactNode, FC } from "react"
import { Link } from "react-router-dom"
import { flushSync } from "react-dom"

import { useAppDispatch } from "@/store"
import { RankingItemWrapper } from "./style"
import type { Playlist } from "../../service"
import { formatImageUrlBySize } from "@/utils"
import { playSingleSongAction, playSongListAction } from "@/views/player/store"
import { playBarContext } from "@/global/context"

interface IProps {
  children?: ReactNode
  itemData: Playlist
}

const RecommendRankingItem: FC<IProps> = (props) => {
  const { itemData } = props
  const dispatch = useAppDispatch()
  const setIsPlaying = useContext(playBarContext).current?.setIsPlaying

  function handlePlayListBtnClick() {
    const ids = itemData.trackIds.map((item) => item.id)
    dispatch(
      playSongListAction({
        ids,
        callback: () => {
          flushSync(() => {
            setIsPlaying && setIsPlaying(true)
          })
        },
      })
    )
  }

  function handleSingleSongBtnClick(index: number) {
    const id = itemData.trackIds.map((item) => item.id)[index]
    dispatch(
      playSingleSongAction({
        id,
        callback: () => {
          flushSync(() => {
            setIsPlaying && setIsPlaying(true)
          })
        },
      })
    )
  }

  return (
    <RankingItemWrapper>
      <div className="header">
        <div className="image">
          <img src={formatImageUrlBySize(itemData.coverImgUrl, 80)} alt="" />
          <a href="" className="sprite_cover"></a>
        </div>
        <div className="info">
          <div className="name">{itemData.name}</div>
          <div>
            <div
              className="sprite_02 btn play"
              onClick={handlePlayListBtnClick}
            ></div>
            <div className="sprite_02 btn favor"></div>
          </div>
        </div>
      </div>
      <div className="list">
        {itemData.tracks.slice(0, 10).map((item, index) => (
          <div key={item.id} className="item">
            <div className="ranking">{index + 1}</div>
            <div className="info">
              <div className="name">{item.name}</div>
              <div className="operators">
                <button
                  className="btn sprite_02 play"
                  onClick={() => handleSingleSongBtnClick(index)}
                ></button>
                <button className="btn sprite_icon2 add"></button>
                <button className="btn sprite_02 favor"></button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="footer">
        <Link to="/discover/ranking">查看全部 &gt;</Link>
      </div>
    </RankingItemWrapper>
  )
}

export default memo(RecommendRankingItem)
