import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import RouterComponent from "./RouterComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <RouterComponent />
    </div>
  );
}

export default App;
