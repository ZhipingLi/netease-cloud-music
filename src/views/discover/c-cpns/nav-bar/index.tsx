import React, { memo } from "react"
import { NavLink } from "react-router-dom"
import type { ReactNode, FC } from "react"

import { NavWrapper } from "./style"
import { discoverMenu } from "@/assets/local-data/page_data"

interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = () => {
  return (
    <NavWrapper>
      <div className="nav wrapper-v1">
        {discoverMenu.map((item) => {
          return (
            <div key={item.link} className="item">
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          )
        })}
      </div>
    </NavWrapper>
  )
}

export default memo(NavBar)
