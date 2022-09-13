import styled from "styled-components";

export const FeedbackStyles = styled.div`
  display: flex;
  background: #fff;
  // flex-direction: column;
  border-radius: 10px;
  align-items: center;
  padding: 3em;
  cursor: pointer;
  position: relative;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: start;
    & div {
      // display: inline-flex;
    }
  }
`;

export const Upvotes = styled.div`
  background: #f2f4ff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  padding: 1em;
  width: fit-content;
  align-self: flex-start;
  @media screen and (max-width: 600px) {
    flex-direction: row;
    order: 1;
  }
  // width: 40px;
`;

export const UpvotesImg = styled.img`
  src: url(${(props) => props.src});
`;

export const UpvotesNum = styled.p`
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 19px;
  letter-spacing: -0.180556px;
  color: #3a4374;
`;

export const TextContent = styled.div`
  margin-left: 3em;

  @media screen and (max-width: 600px) {
    margin: 0;
    // display: flex;
  }
`;

export const Title = styled.h4`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 26px;
  /* identical to box height */

  letter-spacing: -0.25px;

  color: #3a4374;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 23px;
  margin-top: 0.5em;
  color: #647196;
`;

export const Comment = styled.div`
  margin-left: auto;
  display: flex;
  align-items; center;


  // @media screen and (max-width: 600px) {
  //  position: absolute;
  //  bottom: 4em;
  // }
`;

export const CommentImage = styled.img`
  src: url(${(props) => props.src});
  object-fit: contain;
  margin-right: 0.8em;
`;

export const CommentNumber = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  letter-spacing: -0.222222px;

  color: #3a4374;
`;

export const Status = styled.p`
  // margin-left: 5.5em;
  background: #f2f4ff;
  border-radius: 10px;
  width: fit-content;
  padding: 0.8em;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  margin-top: 1em;
  color: #4661e6;
  // position: relative;
  // left: 5em;

  @media screen and (max-width: 600px) {
    // left: 0;
  }
`;
