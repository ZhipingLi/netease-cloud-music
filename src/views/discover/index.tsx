import React, { Suspense, memo } from "react"
import type { ReactNode, FC } from "react"
import { Outlet } from "react-router-dom"

import NavBar from "./c-cpns/nav-bar"

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback="loading">
        <Outlet />
      </Suspense>
    </>
  )
}

export default memo(Discover)
