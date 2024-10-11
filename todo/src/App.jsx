import { useState } from "react";
import "./App.css";
import WorkTile from "./Components/WorkTile/WorkTile";

function App() {
  const [title, setTitle] = useState(" ");
  const [task, setTask] = useState([]);

  const handleSave = () => {
    console.log("called");
    setTask([...task, title]);
    setTitle("");
  };

  console.log("task", task);

  const handleInputChange = (e) => {
    setTitle( e.target.value);
  };

  return (
    <div className="App">
      <input type="text" value={title} onChange={(e) => handleInputChange(e)} />
      <input type="submit" text="Submit" onClick={handleSave} />
      {task.map((item,index) => {
        return (
          <WorkTile
            title={item}
            task={task}
            key={index}
            setTask={setTask}
          />
        );
      })}
    </div>
  );
}

export default App;
