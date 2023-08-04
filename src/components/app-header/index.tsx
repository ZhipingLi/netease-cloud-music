import React, { memo } from "react"
import { NavLink } from "react-router-dom"
import { SearchOutlined } from "@ant-design/icons"
import { Input } from "antd"
import type { ReactNode, FC } from "react"

import { HeaderWrapper, HeaderLeftWrapper, HeaderRightWrapper } from "./style"
import headerTitles from "@/assets/local-data/header_titles.json"

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  type ItemType = {
    title: string
    type: string
    link: string
  }
  function showItem(item: ItemType) {
    if (item.type === "path") {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      )
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrapper-v1">
        <HeaderLeftWrapper>
          <a className="logo sprite_01" href="/#">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTitles.map((item) => {
              return (
                <div key={item.title} className="item">
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeftWrapper>
        <HeaderRightWrapper>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <span className="center">创作者中心</span>
          <span className="login">登录</span>
        </HeaderRightWrapper>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
