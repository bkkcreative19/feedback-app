import styled from "styled-components";

export const Heading = styled.div`
  background: radial-gradient(
    128.88% 128.88% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );
  display: flex;
  flex-direction: column;

  border-radius: 10px;
  padding: 4em 2em;
`;

export const HeadingTitle = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  line-height: 29px;
  letter-spacing: -0.25px;
  color: #ffffff;
`;

export const HeadingSubTitle = styled.p`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 22px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.75;
`;
