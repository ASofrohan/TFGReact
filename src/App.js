import './App.css';
import AddFarm from "./pages/AddFarm";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import React, { useLayoutEffect } from "react"


function App() {

  const location = useLocation();

  useLayoutEffect (() =>{
    console.log(location)
  }, [location])

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/anadir-granja" element={<AddFarm/>}/>
      </Routes>
    </div>
  );
}

export default App;
