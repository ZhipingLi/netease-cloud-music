import React, { memo } from "react"
import type { ReactNode, FC } from "react"

import { HotAnchorWrapper } from "./style"
import AreaHeaderV2 from "@/components/area-header-v2"
import { hotAnchors } from "@/assets/local-data/page_data"
import { formatImageUrlBySize } from "@/utils"

interface IProps {
  children?: ReactNode
}

const HotAnchor: FC<IProps> = () => {
  return (
    <HotAnchorWrapper>
      <AreaHeaderV2 title="热门主播" />
      <div className="anchors">
        {hotAnchors.map((anchor) => {
          return (
            <div key={anchor.url} className="anchor">
              <a
                className="image"
                href={`https://music.163.com/#${anchor.url}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={formatImageUrlBySize(anchor.picUrl, 40)} alt="" />
              </a>
              <div className="info">
                <div className="name">
                  <a
                    href={`https://music.163.com/#${anchor.url}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {anchor.name}
                  </a>
                </div>
                <div className="verification">{anchor.verification}</div>
              </div>
            </div>
          )
        })}
      </div>
    </HotAnchorWrapper>
  )
}

export default memo(HotAnchor)
