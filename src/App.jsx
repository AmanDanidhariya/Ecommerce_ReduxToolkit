import "./App.css";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilteredProducts from "./components/FilteredProducts/FilteredProducts";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}  ></Route>
        <Route path="/filteredProducts/:type" element={<FilteredProducts/>}></Route>
      </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
