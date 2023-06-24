import { useEffect, useState } from "react";
import { styled } from "styled-components";
import PictureItem from "./PictureItem";
import axios from "axios";

const PictureListBlock = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 600px;
`;

const PaginationListBlock = styled.div`
  display: flex;
  margin-top: 15px;
`;

const PaginationButtonBlock = styled.button`
  width: 40px;
  height: 20px;
  margin: 3px;
  cursor: pointer;
  background: none;
  color: #f6f6f6;
`;

const PictureList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const PostPerPage = 9;

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios({
          url: "https://api.thecatapi.com/v1/images/search?limit=50",
          method: "GET",
          headers: {
            "x-api-key":
              "live_TMHkfzpN281MrIv3tbYggwCuoviA3a5CjNGvVIbY9bPIVbeSbTZ6rY5Ndnc2BbdP",
          },
        });
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    setLoading(false);
    fetchData();
  }, []);

  //보여줄 data slice
  const indexOfLastItem = currentPage * PostPerPage;
  const indexOfFirstItem = indexOfLastItem - PostPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  //전체 페이지 수
  const totalPages = Math.ceil(data.length / PostPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page + 1);
  };

  if (loading || !data) {
    return (
      <PictureListBlock className="loading">Loading... 🐈</PictureListBlock>
    );
  }
  console.log(data);

  return (
    <>
      <PictureListBlock>
        {currentItems.map((item) => {
          const { id, url } = item;
          return <PictureItem key={id} id={id} imgURL={url} />;
        })}
      </PictureListBlock>
      <PaginationListBlock>
        {Array.from({ length: totalPages }).map((page, idx) => (
          <PaginationButtonBlock
            key={idx}
            onClick={() => handlePageChange(idx + 1)}>
            {idx + 1}
          </PaginationButtonBlock>
        ))}
      </PaginationListBlock>
    </>
  );
};

export default PictureList;
