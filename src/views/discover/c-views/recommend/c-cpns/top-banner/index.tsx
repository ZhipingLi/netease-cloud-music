import React, { memo, useRef, useState } from "react"
import type { ReactNode, FC, ElementRef } from "react"
import { shallowEqual } from "react-redux"
import { Carousel } from "antd"
import classNames from "classnames"

import { useAppSelector } from "@/store"
import {
  BannerControlWrapper,
  BannerRightWrapper,
  BannerWrapper,
  BannerLeftWrapper,
} from "./style"

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  const isFresh = useRef(true)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  const [currentIndex, setCurrentIndex] = useState(0)

  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners,
    }),
    shallowEqual
  )

  const bgImageUrl = banners[currentIndex]
    ? banners[currentIndex].imageUrl + "?imageView&blur=40x20"
    : undefined

  function handleBeforeChange() {
    if (isFresh.current) {
      isFresh.current = false
    } else {
      setCurrentIndex(-1)
    }
  }

  return (
    <BannerWrapper
      style={{ background: `url(${bgImageUrl}) center center / 6000px` }}
    >
      <div className="banner wrapper-v2">
        <BannerLeftWrapper>
          <Carousel
            ref={bannerRef}
            autoplay
            autoplaySpeed={3000}
            dots={false}
            effect="fade"
            beforeChange={handleBeforeChange}
            afterChange={(current: number) => setCurrentIndex(current)}
          >
            {banners.map((item) => {
              return (
                <div key={item.imageUrl} className="banner-item">
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
          <ul className="indicator">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames("item", {
                      active: currentIndex === index,
                    })}
                    onClick={() => bannerRef.current?.goTo(index, false)}
                  ></span>
                </li>
              )
            })}
          </ul>
        </BannerLeftWrapper>
        <BannerRightWrapper>
          <a
            href="https://music.163.com/#/download"
            target="_blank"
            rel="noreferrer"
          />
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </BannerRightWrapper>
        <BannerControlWrapper>
          <button
            className="btn left"
            onClick={() => bannerRef.current?.prev()}
          ></button>
          <button
            className="btn right"
            onClick={() => bannerRef.current?.next()}
          ></button>
        </BannerControlWrapper>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
