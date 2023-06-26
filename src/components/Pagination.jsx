import { useMemo } from "react";
import { Link } from "react-router-dom";

const Pagination = ({ currentPageGroup, TotalPagesPerFive, page }) => {
  const pageNumbers = useMemo(() => {
    [...Array.from({ length: 5 })].map((_, i) => currentPageGroup * 5 - i - 1);
  }, [currentPageGroup]);

  console.log(pageNumbers);

  return (
    <div>
      {pageNumbers.map((page, idx) => {
        <button key={page} onClick={<Link to="idx"></Link>}></button>;
      })}
    </div>
  );
};

export default Pagination;
