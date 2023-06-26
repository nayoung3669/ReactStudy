import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/styles/reset.css";
import PictureList from "./components/PictureList";
import { ListProvider } from "./contexts/ListContext";
import Layout from "./layout/Layout";

function Nav() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path=":page" element={<PictureList />} />
      <Route index element={<PictureList />} />
    </Routes>
  );
}

function App() {
  return (
    <>
      <ListProvider>
        <Layout>
          <PictureList />
        </Layout>
      </ListProvider>
      <Nav />
    </>
  );
}

export default App;
