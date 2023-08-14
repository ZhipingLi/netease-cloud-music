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
import { formatImageUrlBySize, getSongPlayUrl } from "@/utils"
import { useAppSelector } from "@/store"

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

  /** 组件内的副作用操作 */
  useEffect(() => {
    audioRef.current!.src = getSongPlayUrl(currentSong.id)
    // audioRef
    //   .current!.play()
    //   .then(() => {
    //     setIsPlaying(true)
    //     console.log("success")
    //   })
    //   .catch((err) => {
    //     setIsPlaying(false)
    //     console.log("fail")
    //     console.log(err)
    //   })

    // setDuration(currentSong.dt)
  }, [currentSong])

  function handlePlayBtnClick() {
    if (isPlaying) {
      console.log("---")
    } else {
      console.log("====")
    }
    isPlaying
      ? audioRef.current!.pause()
      : audioRef.current!.play().catch((err) => {
          setIsPlaying(false)
          console.log(err, "!!!")
        })

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
      <audio ref={audioRef} />
    </PlayerBarWrapper>
  )
}

export default memo(PlayerBar)
