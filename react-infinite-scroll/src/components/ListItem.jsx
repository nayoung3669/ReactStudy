import { styled } from "styled-components";

/* eslint-disable react/prop-types */
const ListItem = ({ id, idx, url }) => {
  return (
    <ItemBox url={url}>
      <div className="idx">{idx + 1}</div>
      <div className="imgCircle"></div>
      {<p className="id">{id}</p>}
    </ItemBox>
  );
};

export default ListItem;

const ItemBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1.5px solid black;
  padding: 20px 40px;
  margin-bottom: 30px;
  position: relative;

  .imgCircle {
    width: 70px;
    height: 70px;
    margin-left: 40px;
    border-radius: 50%;
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-position: center center;
  }

  .idx {
    width: 28px;
    height: 28px;
    position: absolute;
    top: 0;
    left: 0;
    background: black;
    color: white;
    padding-top: 2px;
    font-size: 0.9rem;
    font-weight: bold;
  }

  .id {
    padding-right: 80px;
  }
`;
