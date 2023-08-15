import React, { memo, useEffect, useRef, useState } from "react"
import type { ReactNode, FC } from "react"
import { Link } from "react-router-dom"
import { shallowEqual } from "react-redux"
import { Slider, message } from "antd"

import {
  BarControlWrapper,
  BarInfoWrapper,
  BarOperatoreWrapper,
  PlayerBarWrapper,
} from "./style"
import { formatImageUrlBySize, formatMillisecondsToTime } from "@/utils"
import { useAppDispatch, useAppSelector } from "@/store"
import { getSongPlayUrls } from "../service"
import { changeLyricIndexAction, fetchSongDetailAction } from "../store"

interface IProps {
  children?: ReactNode
}

const PlayerBar: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchSongDetailAction([2024611328]))
  }, [])

  const audioRef = useRef<HTMLAudioElement>(null)
  const isDragging = useRef(false)

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)

  const { currentSong, lyrics, lyricIndex } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      lyrics: state.player.lyrics,
      lyricIndex: state.player.lyricIndex,
    }),
    shallowEqual
  )

  useEffect(() => {
    getSongPlayUrls([currentSong.id]).then((res) => {
      audioRef.current!.src = res.data?.[0].url
    })
  }, [currentSong])

  /** 播放/暂停处理 */
  function handlePlayBtnClick() {
    isPlaying
      ? audioRef.current!.pause()
      : audioRef.current!.play().catch(() => setIsPlaying(false))

    setIsPlaying(!isPlaying)
  }

  /** 播放回调处理 */
  function handleTimeUpdate() {
    // 拖拽时暂停更新当前播放时间和进度条，由拖拽事件控制
    if (isDragging.current) return

    const currentTimeMilliseconds = audioRef.current!.currentTime * 1000
    const duration = currentSong.dt
    const progress = (currentTimeMilliseconds / duration) * 100 // %
    setCurrentTime(currentTimeMilliseconds)
    setProgress(progress)

    /** 歌词匹配 */
    let index = lyrics.findIndex((lyric) => lyric.time > currentTime)
    // 解决最后一句歌词匹配
    if (index === -1) index = lyrics.length
    // 出现新歌词 -> 记录
    if (lyricIndex === index - 1 || index - 1 === -1) return
    dispatch(changeLyricIndexAction(index - 1))
    // 歌词展示
    message.open({
      content: lyrics[index - 1]?.text,
      duration: 0, // 不自动关闭message
      key: "lyric", // key相同时原来的message会被替代
    })
  }

  /** 进度条的点击处理 */
  function handleSliderClick(ratio: number) {
    // 获取点击位置的时间
    const newCurrentTimeMilliseconds = (ratio / 100) * currentSong.dt
    audioRef.current!.currentTime = newCurrentTimeMilliseconds / 1000

    // 拖拽事件结束时会触发点击事件
    isDragging.current = false
  }

  /** 进度条的拖拽处理 */
  function handleSliderDrag(ratio: number) {
    isDragging.current = true
    setProgress(ratio)
    setCurrentTime((ratio / 100) * currentSong.dt)
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
              src={formatImageUrlBySize(currentSong.al.picUrl, 34)}
              alt=""
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong?.name}</span>
              <span className="singer-name">{currentSong?.ar?.[0]?.name}</span>
            </div>
            <div className="progress">
              <Slider
                value={progress}
                step={0.1}
                tooltip={{ formatter: null }}
                onAfterChange={handleSliderClick}
                onChange={handleSliderDrag}
              />
              <div className="time">
                <span className="current">
                  {formatMillisecondsToTime(currentTime)}
                </span>
                <span className="divider"> / </span>
                <span>{formatMillisecondsToTime(currentSong?.dt)}</span>
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
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} />
    </PlayerBarWrapper>
  )
}

export default memo(PlayerBar)
