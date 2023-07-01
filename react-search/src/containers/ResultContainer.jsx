/* eslint-disable react/prop-types */

import ResultItem from "../components/ResultItem";

const ResultContainer = ({ loading, data }) => {
  if (loading || !data) {
    return null;
  }
  return (
    <div>
      {data.map((article) => {
        return (
          <ResultItem
            key={article.url}
            contents={article.contents}
            datetime={article.datetime}
            title={article.title}
            url={article.url}
          />
        );
      })}
    </div>
  );
};

export default ResultContainer;
