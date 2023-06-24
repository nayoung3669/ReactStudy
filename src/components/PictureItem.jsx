/* eslint-disable react/prop-types */
import { useContext } from "react";
import ListContext from "../contexts/ListContext";
import { styled } from "styled-components";

const PictureItemBlock = styled.div`
  color: #f6f6f6;
  width: 220px;
  height: 200px;
  margin: 10px;
  cursor: pointer;
  img {
    width: 200px;
    height: 170px;
    margin-bottom: 5px;
    border-radius: 4px;
  }
  p {
    margin: none;
  }
`;

const PictureItem = ({ id, imgURL }) => {
  const listed = useContext(ListContext).state;

  console.log(listed);

  return (
    <PictureItemBlock listed={listed}>
      <img src={imgURL} alt="item" />
      <p>name: {id}</p>
    </PictureItemBlock>
  );
};

export default PictureItem;
