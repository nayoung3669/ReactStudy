/* eslint-disable react/prop-types */
import { CancelRounded } from "@material-ui/icons";
import { SearchOutlined } from "@material-ui/icons";

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
      <div className="cancel">{text && <CancelRounded fontSize="large" />}</div>
    </>
  );
};

export default SearchInput;
