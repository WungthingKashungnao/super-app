import Register from "./pages/register/Register";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SelectCategory from "./pages/selectCategory/SelectCategory";
import HomePage from "./pages/home/HomePage";
import Entertainment from "./pages/entertainment/Entertainment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/selectCategory" element={<SelectCategory />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/entertainmentPage" element={<Entertainment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
