/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const PaginationBlock = styled.div`
  .active {
    button {
      background-color: white;
      color: black;
    }
  }
  button {
    background-color: black;
    color: white;
    width: 50px;
    height: 40px;
    font-size: 1.1rem;
  }
`;

const Pagination = ({ currentPageGroup }) => {
  const navigate = useNavigate();

  const pageNumbers = useMemo(
    () => [...Array(5)].map((_, i) => (currentPageGroup - 1) * 5 + i + 1),
    [currentPageGroup],
  );

  const moveNextPagesGroup = () => {
    navigate(`/${currentPageGroup * 5 + 1}`);
  };

  const movePreviousPageGroup = () => {
    navigate(`/${(currentPageGroup - 1) * 5}`);
  };

  return (
    <PaginationBlock>
      {currentPageGroup === 1 ? null : (
        <button onClick={movePreviousPageGroup}>{`<`}</button>
      )}
      {pageNumbers.map((_, idx) => {
        return (
          <NavLink
            key={idx}
            className={({ isActive }) => (isActive ? "active" : null)}
            to={`/${(currentPageGroup - 1) * 5 + idx + 1}`}>
            <button>{(currentPageGroup - 1) * 5 + idx + 1}</button>
          </NavLink>
        );
      })}
      <button onClick={moveNextPagesGroup}>{`>`}</button>
    </PaginationBlock>
  );
};

export default Pagination;
