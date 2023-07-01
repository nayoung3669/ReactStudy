/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import usePromise from "../hooks/usePromise";
import ResultContainer from "./ResultContainer";

const SearchContainer = () => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("web");
  //custom hook으로 선택한 category와 text를 넘겨주고, loading, data, error 변수 디스트럭쳐링
  const [loading, data, error] = usePromise("web", text);

  console.log(data);
  console.log("렌더링");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <SearchInput text={text} onChange={onChange} onSubmit={onSubmit} />
      <ResultContainer loading={loading} data={data} />
    </div>
  );
};

export default SearchContainer;

const categories = [
  { name: "웹 검색", category: "web" },
  { name: "블로그", category: "blog" },
  { name: "책", category: "book" },
];
