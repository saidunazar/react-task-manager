import { useState } from "react";
import "./App.css";

function App() {
  const [test, getTest] = useState("");
  let name = "Saidu Nazar";
  return <div className="App">TASK MANAGER APPLICATION for {name}</div>;
}

export default App;
