import React, { Fragment, memo } from "react"
import type { ReactNode, FC } from "react"

import { FooterLeftWrapper, FooterRightWrapper, FooterWrapper } from "./style"
import { footerImages, footerLinks } from "@/assets/local-data/page_data"

interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = () => {
  return (
    <FooterWrapper>
      <div className="wrapper-v2 content">
        <FooterLeftWrapper className="left">
          <div className="link">
            {footerLinks.map((item) => {
              return (
                <Fragment key={item.title}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                  <span className="line">|</span>
                </Fragment>
              )
            })}
          </div>
          <div className="copyright">
            <span>网易公司版权所有©1997-2023</span>
            <span>
              杭州乐读科技有限公司运营：
              <a
                href="https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/28066758115/1fc7/27fc/c5c1/158cb31a7117730c58652e2c6625e4c8.jpg"
                rel="noopener noreferrer"
                target="_blank"
              >
                浙网文[2021] 1186-054号
              </a>
            </span>
          </div>
          <div className="report">
            <span>客服热线: 95163298&nbsp;&nbsp;&nbsp;</span>
            <span>
              不良信息举报邮箱:&nbsp;
              <a
                href="mailto:51jubao@service.netease.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                51jubao@service.netease.com
              </a>
            </span>
          </div>
          <div className="info">
            <a
              href="https://beian.miit.gov.cn/#/Integrated/index"
              rel="noopener noreferrer"
              target="_blank"
            >
              粤B2-20090191-18 工业和信息化部备案管理系统网站
            </a>
          </div>
        </FooterLeftWrapper>
        <FooterRightWrapper className="right">
          {footerImages.map((item) => {
            return (
              <li className="item" key={item.link}>
                <a
                  className="link"
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                </a>
                {/* <span className="title">{item.title}</span> */}
                <span className="title"></span>
              </li>
            )
          })}
        </FooterRightWrapper>
      </div>
    </FooterWrapper>
  )
}

export default memo(AppFooter)
