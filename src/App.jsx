import "./App.css";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilteredProducts from "./components/FilteredProducts/FilteredProducts";
import SingleProduct from "./components/FilteredProducts/SingleProduct";
import Login from "./components/Login/Login"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts />}
          ></Route>
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
