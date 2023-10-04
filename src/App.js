import Register from "./pages/register/Register";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SelectCategory from "./pages/selectCategory/SelectCategory";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/selectCategory" element={<SelectCategory />} />
          <Route path="/homePage" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
