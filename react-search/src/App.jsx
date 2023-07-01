import { Route, Routes } from "react-router-dom";
import "./App.css";
import SearchPage from "./pages/SearchPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path=":category/:text" element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
