import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TestComponent from "./TestComponent";
import printz from "./funct";
interface BrutoPayload {
  name: string;
  age?: number;
}

interface AppProps {
  name?: string;
}

function App(appProps: AppProps) {
  const [count, setCount] = useState<number>(0);

  const tester: BrutoPayload = {
    name: "ok",
  };

  const increase = (e) => {
    printz();
    setCount((c) => c + 1);
  };

  return (
    <div className="1">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <TestComponent name="konj" />
      <div className="card">
        <button onClick={increase}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
