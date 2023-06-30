/* eslint-disable react/prop-types */
import { useContext } from "react";
import { styled } from "styled-components";
import ListContext from "../contexts/ListContext";

const LayoutBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  height: 100vh;
  .header {
    min-width: 500px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: 1px solid #494949;
    width: 100%;
    margin: 70px 0px 20px 30px;
    p {
      letter-spacing: -2px;
      font-size: 3.3rem;
      margin: 0px;
    }
    button {
      height: 30px;
      width: 88px;
      margin: 12px 60px 20px 0px;
      font-size: 0.8rem;
      border-radius: 20px;
      cursor: pointer;
    }
  }
`;

const Layout = ({ children }) => {
  const { state, actions } = useContext(ListContext);

  const onClick = () => {
    actions.setListed(!state.listed);
  };

  return (
    <LayoutBlock>
      <div className="header">
        <p className="title">RECENT PROJECTS 🐈</p>
        <button onClick={onClick}>
          {state.listed ? "GRID VIEW" : "LIST VIEW"}
        </button>
      </div>
      {children}
    </LayoutBlock>
  );
};

export default Layout;
