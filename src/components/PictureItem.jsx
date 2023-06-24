/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from "react";
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
  return (
    <PictureItemBlock>
      <img src={imgURL} />
      <p>name: {id}</p>
    </PictureItemBlock>
  );
};

export default React.memo(PictureItem);
