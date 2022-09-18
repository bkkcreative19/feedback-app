import styled from "styled-components";

export const ItemBackground = styled.div`
  background: ${(props) => props.color};
  border-radius: 10px;
  height: 272px;
  // position: relative;
`;

export const ItemStyles = styled.div`
  color: blue;
  height: inherit;
  // display: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #fff;
  margin-top: 1em;
  // height: 50%;
  padding: 2.5em;
  // position: relative;
  // top: 0.7em;
`;

export const ItemStatus = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;

  color: #647196;
`;

export const ItemTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height */
  margin-top: 0.5em;
  letter-spacing: -0.25px;
  margin-bottom: 0.3em;
  color: #3a4374;
`;

export const ItemDesc = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  /* identical to box height */

  color: #647196;
`;

export const ItemCategory = styled.div`
  background: #f2f4ff;
  border-radius: 10px;
  font-weight: 600;
  font-size: 13px;
  width: fit-content;
  line-height: 19px;
  /* identical to box height */
  padding: 0.7em;
  color: #4661e6;
  margin-top: 1em;
`;

export const ItemBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2em;
`;

export const ItemUpvotes = styled.div`
  background: #f2f4ff;
  border-radius: 10px;
  display: flex;

  align-items: center;
  height: fit-content;
  padding: 1em;
  // width: 40px;
`;

export const UpvotesNum = styled.p`
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 19px;
  letter-spacing: -0.180556px;
  color: #3a4374;
  margin-left: 0.5em;
`;

export const Comment = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  // align-self: end;
`;

export const CommentNumber = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  letter-spacing: -0.222222px;
  margin-left: 0.6em;
  color: #3a4374;
`;
