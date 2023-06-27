/* eslint-disable react/prop-types */
import { useContext } from "react";
import ListContext from "../contexts/ListContext";
import { css, styled } from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

const PictureItemBlock = styled.div`
  position: relative;
  color: #f6f6f6;
  width: 220px;
  height: 200px;
  margin: 10px;
  cursor: pointer;
  border: 0.4px solid #6f6c6c;
  border-radius: 10px;

  img {
    position: absolute;
    top: 5%;
    left: 5%;
    width: 200px;
    height: 170px;
    margin-bottom: 5px;
    border-radius: 4px;
    display: inline-block;
  }
  p {
    position: absolute;
    top: 80%;
    left: 70%;
    margin: none;
  }
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
  }
  ${({ listview }) =>
    listview &&
    css`
      width: 500px;
      border-bottom: 0.5px solid gray;
      text-align: start;
    `}
`;

const PictureItem = ({ id, imgURL }) => {
  const [imgLoading, setImgLoading] = useState(true);
  const { listed } = useContext(ListContext).state;
  const [listview, setListview] = useState(listed);

  useEffect(() => {
    setListview(listed);
  }, [listed]);

  return (
    <PictureItemBlock listview={listview}>
      {imgLoading && <div className="loading">Loading...</div>}
      {<img src={imgURL} alt="item" onLoad={() => setImgLoading(false)} />}
      <p>Name: {id}</p>
    </PictureItemBlock>
  );
};

export default PictureItem;
