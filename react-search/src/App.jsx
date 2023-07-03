import { Route, Routes } from "react-router-dom";
import "./App.css";
import SearchPage from "./pages/SearchPage";
import ResultPage from "./pages/ResultPage";
import GlobalStyle from "./utils/GlobalStyle";

function Nav() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path=":category/:text" element={<ResultPage />} />
    </Routes>
  );
}

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
    </div>
  );
}

export default App;
