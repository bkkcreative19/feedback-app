import styled from "styled-components";
import { Button } from "../../../shared/components/Button";

export const HeaderStyles = styled.div`
  background: #373f68;
  border-radius: 10px;
  width: 100%;
  padding: 2em;
  display: flex;
  align-items: center;
`;

export const Suggestions = styled.h4`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  margin-left: 1.2em;
  color: #ffffff;
`;

export const SortBy = styled.div`
  margin-left: 4.2em;
`;

export const Span1 = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #f2f4fe;
`;
export const Span2 = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  margin-left: 0.5em;
  color: #f2f4fe;
`;

export const ActionButton = styled(Button)`
  margin-left: auto;
`;
