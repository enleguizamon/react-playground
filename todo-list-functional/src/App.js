import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleinputValue(inputValue) {
    setTasks([
      ...tasks,
      {
        value: inputValue,
        isCompleted: false,
      },
    ]);
  }

  function handleCallback(name) {
    const modifiedTasks = tasks.map((task) => {
      if (task.value == name) {
        return {
          value: task.value,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(modifiedTasks);
  }

  return (
    <div className="App">
      <AddTask handleCallback={handleinputValue} />
      <Tasks tasks={tasks} handleCallback={handleCallback} />
    </div>
  );
}

export default App;
