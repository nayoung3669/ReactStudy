/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import ResultContainer from "../containers/ResultContainer";
import usePromise from "../hooks/usePromise";
import { styled } from "styled-components";

const ResultPage = () => {
  const { category, text } = useParams();
  const size = 10;
  const [loading, data, error] = usePromise(category, text, size);

  return (
    <ResultPageBlock>
      <h1 className="resultTitle">검색 결과</h1>
      <ResultContainer data={data} />
    </ResultPageBlock>
  );
};

export default ResultPage;

const ResultPageBlock = styled.div`
  text-align: start;
  h1 {
    margin-bottom: 80px;
  }
  .title {
    padding: 10px;
  }

  .contents {
    padding: 10px;
    font-size: 0.8rem;
  }
`;
