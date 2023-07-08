import { useEffect, useRef, useState } from "react";
import { getDogs } from "../api/api";
import { styled } from "styled-components";
import ListItem from "../components/ListItem";
import { ColorRing } from "react-loader-spinner";

const List = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const obsRef = useRef(null); //observer Element (현재 참조되는)

  useEffect(() => {
    fetchDogs();
    const observer = new IntersectionObserver(obsHandler, {
      threshold: 0,
      rootMargin: "200% 0px",
    }); //element가 root 화면의 75% 교차했을 때 obsHandler 실행
    if (obsRef.current) {
      observer.observe(obsRef.current); //처음엔 null 이라 실행 안되지만 return 문에서 참조한 뒤 실행됨
    }
  }, []);

  useEffect(() => {
    fetchDogs();
  }, [page]);

  //obs element가 화면에 진입했을 때 실행됨
  const obsHandler = (entries) => {
    const target = entries[0]; //boundingClientRect: 관찰 대상의 사각형 정보 (타겟 설정)
    if (target.isIntersecting) {
      console.log("intersected");
      setPage((prev) => prev + 1);
    }
  };

  const fetchDogs = async () => {
    const response = await getDogs();
    if (response) {
      console.log(response);
      setData((prev) => prev.concat(response));
    }
  };

  return (
    <ListBox>
      {data.map((item, idx) => {
        return <ListItem key={idx} idx={idx} url={item.url} id={item.id} />;
      })}
      <div ref={obsRef} className="ref">
        <Progress />
      </div>
    </ListBox>
  );
};

export default List;

const ListBox = styled.div`
  margin: 100px 100px 0px 100px;
  width: 70%;
  .ref {
    padding-top: 300px;
  }
`;

const Progress = () => (
  <ColorRing
    height="120"
    width="100"
    colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
  />
);
