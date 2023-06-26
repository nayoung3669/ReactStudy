/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import usePromise from "../hooks/usePromise";

const PageButton = styled.button`
  background-color: black;
  color: #f6f6f6;
`;

const Pagination = ({ currentPageGroup, TotalPagesPerFive, page }) => {
  const navigate = useNavigate();

  const pageNumbers = useMemo(
    () => [...Array(5)].map((_, i) => (currentPageGroup - 1) * 5 + i + 1),
    [currentPageGroup],
  );

  const movePage = (pageNumber) => {
    navigate(`/${(currentPageGroup - 1) * 5 + pageNumber}`);
  };

  const moveNextPagesGroup = () => {
    const startPageIndex = (currentPageGroup - 1) * 5 + 1;
    const lastPageIndex = currentPageGroup * 5;
    =usePromise(startPageIndex, lastPageIndex)
    navigate(`/${currentPageGroup * 5 + 1}`);
  };

  const movePreviousPageGroup = () => {
    navigate(`/${(currentPageGroup - 1) * 5}`);
  };

  console.log(currentPageGroup);

  return (
    <>
      {currentPageGroup === 1 ? null : (
        <PageButton onClick={movePreviousPageGroup}>{`<`}</PageButton>
      )}
      {pageNumbers.map((_, idx) => {
        return (
          <PageButton key={idx} onClick={() => movePage(idx + 1)}>
            {(currentPageGroup - 1) * 5 + idx + 1}
          </PageButton>
        );
      })}
      <PageButton onClick={moveNextPagesGroup}>{`>`}</PageButton>
    </>
  );
};

export default Pagination;
