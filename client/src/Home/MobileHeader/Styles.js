import styled from "styled-components";

export const MobileHeaderContainer = styled.header`
  display: none;

  @media screen and (max-width: 600px) {
    display: flex;
    padding: 1.5em;
    align-items: center;
    justify-content: space-between;
    background: radial-gradient(
      128.88% 128.88% at 103.9% -10.39%,
      #e84d70 0%,
      #a337f6 53.09%,
      #28a7ed 100%
    );
  }
`;

export const TextContent = styled.div``;
export const HeadingTitle = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 29px;
  letter-spacing: -0.25px;
  color: #ffffff;
`;
export const HeadingSubTitle = styled.p`
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 19px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.75;
`;

export const MobileSide = styled.div`
  background: #f7f8fd;
  // height: 100vh;
  // position: absolute;
  // top: 7.74rem;
  // z-index: 1000;
  padding: 2em;
  width: 70%;
  margin-left: auto;
  // right: 0;
`;

export const Scroll = styled.div`
  // position: fixed;
  // top: 0;
  // left: 0;
  // height: 100%;
  // width: 100%;
  // z-index: 1000;
  // background: red;
  // overflow-x: hidden;
  // overflow-y: auto;
  // -webkit-overflow-scrolling: touch;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 7.7rem;
  left: 0;
  height: 100%;
  width: 100%;
  // background: red;
  z-index: 1000;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

export const Clickable = styled.div`
  min-height: 100%;
  background: rgba(9, 30, 66, 0.54);
  display: flex;
`;
