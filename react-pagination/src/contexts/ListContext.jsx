/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const ListContext = createContext({
  state: { listed: false },
  actions: {
    setListed: () => {},
  },
});

const ListProvider = ({ children }) => {
  const [listed, setListed] = useState(false);

  const value = {
    state: { listed: listed },
    actions: { setListed: setListed },
  };
  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
};

const ListConsumer = ListContext.Consumer;

export { ListProvider, ListConsumer };

export default ListContext;
