import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addCount, addArray } from "./pathSlice";
import Basic from "./views/Basic/Basic";
import { Fieldset } from "primereact/fieldset";
function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const paths = useSelector((state) => state.path);
  const dispatch = useDispatch();
  async function greet() {
    dispatch({ type: "addCount" });
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    // setGreetMsg(await invoke("greet", { name }));
  }
  //<button onClick={() => dispatch(addArray())}>add</button>

  return (
    <div className="s">
      <Basic />
    </div>
  );
}

export default App;
