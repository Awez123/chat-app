import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "../src/pages/login/Login";
import Signup from "../src/pages/signup/Signup";
import Home from "../src/pages/home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
    <Home/>
   

    </div>
  );
}

export default App;
