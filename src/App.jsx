import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";     
import Signup from "./component/Signup";   
import Portfolio from "./component/Portfolio"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
