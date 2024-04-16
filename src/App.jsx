import "./App.css";
import Api from "./components/Api";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";

function App() {
  return (
    <>
      <Api />
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
