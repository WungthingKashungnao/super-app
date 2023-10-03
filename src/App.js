import Register from "./pages/register/Register";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SelectCategory from "./pages/selectCategory/SelectCategory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/selectCategory" element={<SelectCategory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
