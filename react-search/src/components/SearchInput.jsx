/* eslint-disable react/prop-types */
import { SearchOutlined } from "@material-ui/icons";
import React from "react";

const SearchInput = ({
  text,
  categories,
  onChangeText,
  onChangeCategory,
  onKeyPressHandler,
}) => {
  return (
    <>
      <select onChange={(e) => onChangeCategory(e)}>
        {categories.map((c) => (
          <option key={c.category} value={c.category}>
            {c.name}
          </option>
        ))}
      </select>
      <div className="search">
        <SearchOutlined />
      </div>
      <input
        type="text"
        value={text}
        onChange={(e) => onChangeText(e)}
        placeholder="검색어를 입력하세요."
        onKeyPress={(e) => onKeyPressHandler(e)}
      />
    </>
  );
};

export default React.memo(SearchInput);
