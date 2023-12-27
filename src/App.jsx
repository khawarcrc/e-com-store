import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
