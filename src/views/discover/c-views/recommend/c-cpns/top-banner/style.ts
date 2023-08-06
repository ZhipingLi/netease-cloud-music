import { styled } from "styled-components"

export const BannerWrapper = styled.div`
  .banner {
    height: 285px;
    display: flex;
    position: relative;
  }
`

export const BannerLeftWrapper = styled.div`
  position: relative;
  width: 730px;

  .banner-item {
    overflow: hidden;
    .image {
      height: 285px;
      width: 100%;
    }
  }

  .indicator {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    > li {
      margin: 0 2px;

      .item {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(${require("@/assets/img/banner_sprite.png")}) 3px -343px;
        cursor: pointer;

        &:hover,
        &.active {
          background-position: -16px -343px;
        }
      }
    }
  }
`

export const BannerRightWrapper = styled.div`
  width: 254px;
  height: 285px;
  background: url(${require("@/assets/img/download.png")});

  a {
    display: block;
    height: 56px;
    width: 215px;
    margin: 186px 0 0 19px;

    &:hover {
      background: url(${require("@/assets/img/download.png")});
      background-position: -0 -290px;
      cursor: pointer;
    }
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center;
    color: #8d8d8d;
    margin-top: 10px;
  }
`

export const BannerControlWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`
