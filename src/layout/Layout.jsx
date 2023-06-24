/* eslint-disable react/prop-types */

import { styled } from "styled-components";

const LayoutBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  height: 100vh;
  .header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #494949;
    width: 100%;
    margin: 70px 0px 20px 0px;
    p {
      font-size: 2.5rem;
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
  return (
    <LayoutBlock>
      <div className="header">
        <p className="title">RECENT PROJECTS</p>
        <button>List View</button>
      </div>
      {children}
    </LayoutBlock>
  );
};

export default Layout;
