/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { styled } from "styled-components";

const ResultItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  overflow-y: hidden;
  cursor: pointer;
  overflow-y: hidden;
`;

const ResultItem = ({ contents, datetime, title, url }) => {
  return (
    <ResultItemBlock onClick={() => window.open(url)}>
      <div className="title" dangerouslySetInnerHTML={{ __html: title }}></div>
      <div
        className="contents"
        dangerouslySetInnerHTML={{ __html: contents }}></div>
    </ResultItemBlock>
  );
};

export default ResultItem;
