import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dictionary from './components/Dictionary';
import Header from "./components/Header";
import "./index.css";
import Customers from "./pages/Customers";
import Employees from "./pages/Employees";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path='/employees' element={<Employees />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/dictionary' element={<Dictionary />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
