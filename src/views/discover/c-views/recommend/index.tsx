import React, { memo, useEffect } from "react"
import type { ReactNode, FC } from "react"

import { fetchBannerDataAction } from "./store"
import { useAppDispatch } from "@/store"
import TopBanner from "./c-cpns/top-banner"

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])

  return (
    <>
      <TopBanner />
    </>
  )
}

export default memo(Recommend)
