/* eslint-disable react/prop-types */
import { useContext } from "react";
import ListContext from "../contexts/ListContext";
import { css, styled } from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

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
  ${({ listview }) =>
    listview &&
    css`
      width: 500px;
      border-bottom: 0.5px solid gray;
      text-align: start;
    `}
`;

const PictureItem = ({ id, imgURL }) => {
  const { listed } = useContext(ListContext).state;
  const [listview, setListview] = useState(listed);

  useEffect(() => {
    setListview(listed);
  }, [listed]);

  console.log(listed);

  return (
    <PictureItemBlock listview={listview}>
      <img src={imgURL} alt="item" />
      <p>name: {id}</p>
    </PictureItemBlock>
  );
};

export default PictureItem;
