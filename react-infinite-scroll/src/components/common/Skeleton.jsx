import { keyframes, styled } from "styled-components";
import { ItemBox } from "../ListItem";

const Skeleton = () => {
  return (
    <ItemBox>
      <SkeletonBox>
        <div className="idx"></div>
        <div className="imgCircle"></div>
        {<p className="id"></p>}
      </SkeletonBox>
    </ItemBox>
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

const SkeletonBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-top: 10px;

  .imgCircle {
    margin-right: 200px;
    background-color: #ccc;
    animation: ${blinkAnimation} 1.5s linear infinite; // 회전 애니메이션 적용
  }

  .id {
    background-color: #ccc;
    animation: ${blinkAnimation} 1.5s linear infinite; // 회전 애니메이션 적용
  }
`;
