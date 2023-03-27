import Employees from "./components/Employees";
import Header from "./components/Header";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Employees />} />
        </Routes>
      </BrowserRouter>
    </Header>
  );
}

export default App;
