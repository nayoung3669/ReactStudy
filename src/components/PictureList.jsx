import { useEffect, useState } from "react";
import { styled } from "styled-components";
import PictureItem from "./PictureItem";
import axios from "axios";

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

const PaginationButtonBlock = styled.button`
  width: 40px;
  height: 20px;
  margin: 3px;
  background: none;
  color: #f6f6f6;
`;

const PictureList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
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

  if (loading || data.length === 0) {
    return (
      <PictureListBlock className="loading">Loading... 🐈</PictureListBlock>
    );
  }

  return (
    <>
      <PictureListBlock>
        {currentItems.map((item) => {
          const { id, url } = item;
          return <PictureItem key={id} id={id} imgURL={url} />;
        })}
        <PaginationListBlock>
          {Array.from({ length: totalPages }).map((_, idx) => (
            <PaginationButtonBlock
              key={idx}
              onClick={() => handlePageChange(idx + 1)}>
              {idx + 1}
            </PaginationButtonBlock>
          ))}
        </PaginationListBlock>
      </PictureListBlock>
    </>
  );
};

export default PictureList;
