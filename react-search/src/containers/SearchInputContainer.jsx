/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import usePromise from "../hooks/usePromise";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

const categories = [
  { name: "웹 검색", category: "web" },
  { name: "블로그", category: "blog" },
  { name: "책", category: "book" },
];

const SearchInputContainer = () => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0].category);
  //custom hook으로 선택한 category와 text를 넘겨주고, loading, data, error 변수 디스트럭쳐링
  const size = 3;
  const [loading, data, error] = usePromise(category, text, size);
  const [autoComplete, setAutoComplete] = useState([]);

  useEffect(() => {
    const autoCompleteHandler = debounce(() => {
      console.log("debounced");
      if (data) {
        setAutoComplete(data.map((a) => a.title));
      }
    }, 500);
    autoCompleteHandler();

    return () => {
      autoCompleteHandler.cancel();
    };
  }, [data]);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onChangeCategory = useCallback((e) => {
    setCategory(e.target.value);
  }, []);

  const navigate = useNavigate();

  const onClickHandler = useCallback(() => {
    navigate(`${category}/${text}`);
  }, [category, navigate, text]);

  const onKeyPressHandler = useCallback(
    (e) => {
      if (e.key === "Enter") {
        navigate(`${category}/${text}`);
      }
    },
    [category, navigate, text],
  );

  return (
    <SearchContainerBlock>
      <div className="input">
        <SearchInput
          text={text}
          categories={categories}
          onChangeText={onChangeText}
          onChangeCategory={onChangeCategory}
          onKeyPressHandler={onKeyPressHandler}
        />
      </div>
      {text && (
        <div className="autoComplete">
          {autoComplete.map((keyword, idx) => (
            <div
              className="autoCompletedItem"
              key={idx}
              onClick={onClickHandler}
              dangerouslySetInnerHTML={{ __html: keyword }}></div>
          ))}
        </div>
      )}
      {text && <div className="searchResults">Search results</div>}
    </SearchContainerBlock>
  );
};

export default SearchInputContainer;

const SearchContainerBlock = styled.div`
  margin-top: 40px;
  position: relative;
  width: 600px;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(212, 218, 224, 0.2) 0px 5px 14px;
  input {
    width: 400px;
    height: 40px;
    border: none;
    margin: 20px;
    outline: none;
    font-size: 1.5rem;
  }

  .input {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  select {
    position: absolute;
    top: -140px;
    left: -30px;
    border: none;
    background-color: transparent;
    font-size: 1.1rem;
  }
  .cancel {
    padding: 5px 0px 0px 50px;
  }

  .searchResults {
    text-align: start;
    padding: 18px;
    font-size: 0.8rem;
    border-top: 0.9px solid #e4e3e3;
  }

  .autoCompletedItem {
    padding: 15px;
    width: 100%;
    text-align: start;
    border-bottom: 0.5px solid #e2e2e2;
    cursor: pointer;
  }
`;
