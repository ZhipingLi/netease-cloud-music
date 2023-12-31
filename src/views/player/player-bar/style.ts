import { styled } from "styled-components"

import { PlayMode } from "../store"

export const PlayerBarWrapper = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
  }
`

interface IBarControlWrapperProps {
  $isPlaying: boolean
}

export const BarControlWrapper = styled.div<IBarControlWrapperProps>`
  display: flex;
  align-items: center;

  .btn {
    cursor: pointer;
  }

  .prev,
  .next {
    width: 28px;
    height: 28px;
  }

  .prev {
    background-position: 0 -130px;

    &:hover {
      background-position: -30px -130px;
    }
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0
      ${(props) => (props.$isPlaying ? "-165px" : "-204px")};
  }

  .next {
    background-position: -80px -130px;

    &:hover {
      background-position: -110px -130px;
    }
  }
`

export const BarInfoWrapper = styled.div`
  display: flex;
  width: 642px;
  align-items: center;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      color: #e1e1e1;
      position: relative;
      top: 8px;
      left: 8px;

      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        position: relative;
        top: -3px;
        width: 493px;
        margin-right: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -4.5px;
          background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;

          &::before,
          &::after {
            display: none;
          }
        }
      }

      .time {
        .current {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`

interface BarOperatoreWrapperProps {
  $playMode: number
}

export const BarOperatoreWrapper = styled.div<BarOperatoreWrapperProps>`
  display: flex;
  align-items: center;
  position: relative;
  top: 3px;

  .btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .left {
    display: flex;
    align-items: center;
  }

  .pip {
    background: url(${require("@/assets/img/pip_icon.png")});

    &:hover {
      background-position-y: -25px;
    }
  }

  .favor {
    background-position: -88px -163px;

    &:hover {
      background-position: -88px -189px;
    }
  }

  .share {
    background-position: -114px -163px;

    &:hover {
      background-position: -114px -189px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;

    .volume {
      background-position: -2px -248px;

      &:hover {
        background-position: -31px -248px;
      }
    }

    .loop {
      background-position: ${(props) => {
        switch (props.$playMode) {
          case PlayMode.INORDER:
            return "-3px -344px"
          case PlayMode.SHUFFLE:
            return "-66px -248px"
          case PlayMode.CYCLE:
            return "-66px -344px"
          default:
            // eslint-disable-next-line no-case-declarations, @typescript-eslint/no-unused-vars
            let check: never
        }
      }};

      &:hover {
        background-position: ${(props) => {
          switch (props.$playMode) {
            case PlayMode.INORDER:
              return "-33px -344px"
            case PlayMode.SHUFFLE:
              return "-93px -248px"
            case PlayMode.CYCLE:
              return "-93px -344px"
            default:
              // eslint-disable-next-line no-case-declarations, @typescript-eslint/no-unused-vars
              let check: never
          }
        }};
      }
    }

    .playlist {
      line-height: 26px;
      padding-left: 23px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;

      &:hover {
        background-position: -42px -98px;
      }
    }
  }
`
