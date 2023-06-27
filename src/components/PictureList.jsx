import { useMemo } from "react";
import { styled } from "styled-components";
import PictureItem from "./PictureItem";
import usePromise from "../hooks/usePromise";
import { useParams } from "react-router-dom";
import Pagination from "./Pagination";

const PictureListBlock = styled.div`
  width: 100%;
  height: 65%;
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

const PictureList = () => {
  let { page } = useParams();
  page = parseInt(page, 10);
  if (isNaN(page) || page < 0) {
    page = 1;
  }
  const [loading, data, error] = usePromise(page); //1page, 45개씩 fetch
  const currentPageGroup = useMemo(() => Math.ceil(page / 5), [page]);

  if (loading || data.length === 0 || error) {
    return (
      <PictureListBlock
        className="loading"
        style={{ minWidth: "1000px", fontSize: "2.5rem" }}>
        Loading... 🐈
      </PictureListBlock>
    );
  }

  return (
    <PictureListBlock>
      {data.map((item) => {
        const { id, url } = item;
        return <PictureItem key={id} id={id} imgURL={url} />;
      })}
      <PaginationListBlock>
        <Pagination currentPageGroup={currentPageGroup} />
      </PaginationListBlock>
    </PictureListBlock>
  );
};

export default PictureList;
