/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { styled } from "styled-components";

const ResultItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f6f6f6;
  width: 600px;
  height: 100px;
  margin: 18px;
  cursor: pointer;
`;

const ResultItem = ({ contents, datetime, title, url }) => {
  return (
    <ResultItemBlock onClick={() => window.open(url)}>
      <div className="title">{title}</div>
      <div className="contents">{contents}</div>
    </ResultItemBlock>
  );
};

export default ResultItem;
