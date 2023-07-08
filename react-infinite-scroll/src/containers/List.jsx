import { useEffect, useState } from "react";
import { getDogs } from "../api/api";
import Item from "../components/Item";
import { styled } from "styled-components";

const List = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchDogs = async () => {
      const response = await getDogs();
      setData(response);
    };
    fetchDogs();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ListBox>
      {data.map((item) => (
        <Item key={item.id} url={item.url} id={item.id}>
          List
        </Item>
      ))}
    </ListBox>
  );
};

export default List;

const ListBox = styled.div`
  width: 70%;
`;

//여기랑 getDogs() 둘 다 async를 사용하고 있는데 맞는지?
