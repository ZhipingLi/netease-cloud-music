import React, { memo } from "react"
import type { ReactNode, FC } from "react"
import { Link } from "react-router-dom"
import { Slider } from "antd"

import {
  BarControlWrapper,
  BarInfoWrapper,
  BarOperatoreWrapper,
  PlayerBarWrapper,
} from "./style"
import { formatImageUrlBySize } from "@/utils"

interface IProps {
  children?: ReactNode
}

const PlayerBar: FC<IProps> = () => {
  return (
    <PlayerBarWrapper className="sprite_playerbar">
      <div className="content wrapper-v2">
        <BarControlWrapper>
          <button className="btn sprite_playerbar prev"></button>
          <button className="btn sprite_playerbar play"></button>
          <button className="btn sprite_playerbar next"></button>
        </BarControlWrapper>
        <BarInfoWrapper>
          <Link to="/discover/player">
            <img
              className="image"
              src={formatImageUrlBySize(
                "https://p2.music.126.net/i2P1ox4pWG9VLeoRFeUxfQ==/76965813961922.jpg",
                34
              )}
              alt=""
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">日落大道</span>
              <span className="singer-name">梁博</span>
            </div>
            <div className="progress">
              <Slider />
              <div className="time">
                <span className="current">00:52</span>
                <span className="divider"> / </span>
                <span className="total">04:34</span>
              </div>
            </div>
          </div>
        </BarInfoWrapper>
        <BarOperatoreWrapper>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playerbar favor"></button>
            <button className="btn sprite_playerbar share"></button>
          </div>
          <div className="right sprite_playerbar">
            <button className="btn sprite_playerbar volume"></button>
            <button className="btn sprite_playerbar loop"></button>
            <button className="btn sprite_playerbar playlist"></button>
          </div>
        </BarOperatoreWrapper>
      </div>
    </PlayerBarWrapper>
  )
}

export default memo(PlayerBar)
