import { useMemo } from "react";
import { styled } from "styled-components";
import PictureItem from "./PictureItem";
import usePromise from "../hooks/usePromise";
import { useParams } from "react-router-dom";
import Pagination from "./Pagination";

const PictureListBlock = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 580px;
`;

const PaginationListBlock = styled.div`
  display: flex;
  margin-top: 15px;
  padding: 20px;
  justify-content: center;
`;

// const PaginationButtonBlock = styled.button`
//   width: 40px;
//   height: 20px;
//   margin: 3px;
//   background: none;
//   color: #f6f6f6;
// `;

const PostPerPage = 9;
//1~5page
const TotalPagesPerFive = Math.ceil(10000 / PostPerPage / 5);

const PictureList = () => {
  let { page } = useParams();
  page = parseInt(page, 10);
  if (isNaN(page) || page < 0) {
    page = 1;
  }
  console.log("------");
  console.log(page);
  const { loading, resolved, error } = usePromise(page); //1page, 45개씩 fetch
  const currentPageGroup = useMemo(() => Math.ceil(page / 5) + 1, [page]);

  if (loading || resolved.length === 0) {
    return (
      <PictureListBlock className="loading">Loading... 🐈</PictureListBlock>
    );
  }

  console.log(loading, resolved, error);

  return (
    <>
      <PictureListBlock>
        {resolved.map((item) => {
          const { id, url } = item;
          return <PictureItem key={id} id={id} imgURL={url} />;
        })}
        <PaginationListBlock>
          <Pagination
            currentPageGroup={currentPageGroup}
            TotalPagesPerFive={TotalPagesPerFive}
            page={page}
          />
        </PaginationListBlock>
      </PictureListBlock>
    </>
  );
};

export default PictureList;
