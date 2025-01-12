import { useState } from "react";
import PlantCard from "./components/PlantCard";
import DashBoard from "./components/DashBoard";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Welcome to Plantify!</h1>
      <DashBoard />
    </>
  );
}

export default App;
