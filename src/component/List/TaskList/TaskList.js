import React, { useEffect, useState } from 'react'

function TaskList({ tasks, deleteSelected }) {
  const [newTaskList, setNewTaskList] = useState(tasks);

  useEffect(() => {
    setNewTaskList(tasks);
  }, [tasks]);

  const handleCheck = (index) => {
    setNewTaskList((prevState) => {
      const newTasks = [...prevState];
      newTasks[index].isChecked = !newTasks[index].isChecked;
      return newTasks;
    });
  };

// prevState parametresi, önceki görev listesi durumunu temsil eder.
// 12. satırda bulunan kod önceki görev listesinin kopyasını oluşturur.
// 13. satır onay durumunu tersine çevirir.

  const deleteTask = (index) => {
    deleteSelected(index);
  };

  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {newTaskList.map((task, index) => (
            <li key={index} className={task.isChecked ? "completed" : ""}>
              <div className="view">
                <input
                  id={index}
                  checked={task.isChecked}
                  className="toggle"
                  type="checkbox"
                  onChange={() => handleCheck(index)}
                />
                <label htmlFor={index}>{task.taskName}</label>
                <button className="destroy" onClick={() => deleteTask(index)}></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default TaskList;
