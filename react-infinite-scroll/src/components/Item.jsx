/* eslint-disable react/prop-types */
const Item = ({ id, url }) => {
  return (
    <div>
      {<p>{id}</p>}
      <img src={url} />
    </div>
  );
};

export default Item;
