import { useState } from "react";
import usePromise from "../hooks/usePromise";

const SearchInput = () => {
  const [text, setText] = useState("");
  const [loading, data, error] = usePromise("web", "hi");

  console.log(data);
  const onSubmit = (e) => {
    e.preventDefault();
  };

  if (loading || !data) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">검색</button>
      </form>
    </>
  );
};

export default SearchInput;
