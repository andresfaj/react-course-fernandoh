import React from "react";
import ReactDOM from "react-dom/client";
import { CallbackHook } from "./06-memos/CallbackHook";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { MemoHook } from "./06-memos/MemoHook";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import { Memorize } from "./06-memos/Memorize";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { HooksApp } from "./HooksApp";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}
    {/* <Memorize /> */}
    {/* <MemoHook /> */}
    <CallbackHook />
  </React.StrictMode>
);
