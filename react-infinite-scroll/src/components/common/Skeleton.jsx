import { keyframes, styled } from "styled-components";
import { ItemBox } from "../ListItem";

const Skeleton = () => {
  return (
    <StyledItemBox>
      <div className="idx"></div>
      <div className="imgCircle"></div>
      <p className="id"></p>
    </StyledItemBox>
  );
};

export default Skeleton;

const blinkAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
`;

const StyledItemBox = styled(ItemBox)`
  border: 1.5px solid #ccc;
  .idx {
    background: #ccc;
  }
  .imgCircle {
    background-color: #ccc;
    animation: ${blinkAnimation} 1.5s linear infinite; // 회전 애니메이션 적용
  }

  .id {
    width: 25rem;
    background-color: #ccc;
    animation: ${blinkAnimation} 1.5s linear infinite; // 회전 애니메이션 적용
  }
`;
