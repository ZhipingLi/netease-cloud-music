import React, { memo, useEffect, useRef, useState } from "react"
import type { ReactNode, FC } from "react"
import { Link } from "react-router-dom"
import { shallowEqual } from "react-redux"
import { Slider } from "antd"

import {
  BarControlWrapper,
  BarInfoWrapper,
  BarOperatoreWrapper,
  PlayerBarWrapper,
} from "./style"
import { formatImageUrlBySize } from "@/utils"
import { useAppSelector } from "@/store"
import { getSongPlayUrls } from "../service"

interface IProps {
  children?: ReactNode
}

const PlayerBar: FC<IProps> = () => {
  const audioRef = useRef<HTMLAudioElement>(null)

  const [isPlaying, setIsPlaying] = useState(false)

  const { currentSong } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
    }),
    shallowEqual
  )

  useEffect(() => {
    getSongPlayUrls([currentSong.id]).then((res) => {
      audioRef.current!.src = res.data?.[0].url
    })
  }, [currentSong])

  function handlePlayBtnClick() {
    isPlaying
      ? audioRef.current!.pause()
      : audioRef.current!.play().catch(() => setIsPlaying(false))

    setIsPlaying(!isPlaying)
  }

  return (
    <PlayerBarWrapper className="sprite_playerbar">
      <div className="content wrapper-v2">
        <BarControlWrapper $isPlaying={isPlaying}>
          <button className="btn sprite_playerbar prev"></button>
          <button
            className="btn sprite_playerbar play"
            onClick={handlePlayBtnClick}
          ></button>
          <button className="btn sprite_playerbar next"></button>
        </BarControlWrapper>
        <BarInfoWrapper>
          <Link to="/discover/player">
            <img
              className="image"
              src={formatImageUrlBySize(currentSong?.al?.picUrl, 34)}
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
                <span className="duration">04:34</span>
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
      <audio ref={audioRef} />
    </PlayerBarWrapper>
  )
}

export default memo(PlayerBar)
