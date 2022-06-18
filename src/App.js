import Login from "./components/authentication/login";
import './App.css'
import React from "react";
import { Route, Routes} from "react-router-dom";
import Signup from "./components/authentication/signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    // <div>
    //   <Login/>
    // </div>
  );
}

export default App;



