/* eslint-disable react/prop-types */

const SearchInput = ({ text, onChange, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={(e) => onChange(e)} />
        <button type="submit">검색</button>
      </form>
    </>
  );
};

export default SearchInput;
