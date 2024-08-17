import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/login";
import Register from "./Pages/register";
import Home from "./Pages/home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
    </Routes>
    </BrowserRouter> 
  );
}

export default App;
