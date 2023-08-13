import React, { memo } from "react"
import type { ReactNode, FC } from "react"

import { HeaderV2Wrapper } from "./style"

interface IProps {
  children?: ReactNode
  title: string
  moreText?: string
  moreLink?: string
}

const AreaHeaderV2: FC<IProps> = (props) => {
  const { title, moreText, moreLink } = props

  return (
    <HeaderV2Wrapper>
      <h3 className="title">{title}</h3>
      {moreText && moreLink && <a href="/discover/artist">{moreText}</a>}
    </HeaderV2Wrapper>
  )
}

export default memo(AreaHeaderV2)
