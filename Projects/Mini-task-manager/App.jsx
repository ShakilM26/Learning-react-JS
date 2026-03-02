import { useState } from "react";
import TaskItem from "./components/TaskItem";

function App(){
  const [tasks, setTasks] = useState(['Practice Props', 'Build Project', 'Read Books']);

  const [input, setInput] = useState('');

  // task add
  function AddTask(){
    if(input.trim() === '') return;
    setTasks(prev => [...prev, input]);
    setInput('');
  }

  // task delete
  function DeleteTask(indexToDelete){
    setTasks(prev => prev.filter((_, index) => index !== indexToDelete));
  }

  return(
    <div>
      <h2>Mini Task Manager</h2>

      <input type="text" value={input} 
      onChange={(e) => setInput(e.target.value)}
      placeholder="Write task" />

      <button onClick={AddTask}>Add Task</button>

      {/* // conditional rendering */}
      {tasks.length === 0 && <p>No Tasks Available</p>}

      {/* // list rendering */}

      <ul>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task}
          onDelete={() => DeleteTask(index)} />
        ))}
      </ul>
    </div>
  );
}

export default App;