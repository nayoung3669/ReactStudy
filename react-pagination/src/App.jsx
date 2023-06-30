import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/styles/reset.css";
import PictureList from "./components/PictureList";
import { ListProvider } from "./contexts/ListContext";
import Layout from "./layout/Layout";
import GlobalStyle from "./assets/styles/GlobalStyle";

function Nav() {
  return (
    <Routes>
      <Route path="/" element={<PictureList />} />
      <Route path="/:page" element={<PictureList />} />
    </Routes>
  );
}

function App() {
  return (
    <>
      <ListProvider>
        <GlobalStyle />
        <Layout>
          <Nav />
        </Layout>
      </ListProvider>
    </>
  );
}

export default App;
