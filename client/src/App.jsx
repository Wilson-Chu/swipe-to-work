import { useState } from "react";
import DataList from "./components/DataList";
import Status from "./components/Status";
import useApplicationData from "./hooks/useApplicationData";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");
  const { status, error, data, addItem, deleteItem, fetchItems } =
    useApplicationData();

  const addFriend = function () {
    addItem(text);
  };

  return (
    <div className="App">
      <h1>Swipe to Work</h1>

      {/* <Status status={status} error={error} />

      <button onClick={fetchItems}>Reload</button>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addFriend}>Add</button>

      <DataList friends={data} deleteItem={deleteItem} /> */}
      <div>
        <div>picture here...</div>
        <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

Section 1.10.32 of "de Finibus Bonorum et Malorum", wr</div>
      </div>
    </div>
  );
}
