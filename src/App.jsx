import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import ShowDetails from "./Components/ShowDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="show/:id" element={<ShowDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
