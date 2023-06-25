import "./App.css";
import "./assets/styles/reset.css";
import PictureList from "./components/PictureList";
import { ListProvider } from "./contexts/ListContext";
import Layout from "./layout/Layout";

function App() {
  return (
    <ListProvider>
      <Layout>
        <PictureList />
      </Layout>
    </ListProvider>
  );
}

export default App;
