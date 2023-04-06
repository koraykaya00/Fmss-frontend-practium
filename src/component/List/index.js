import { useState } from 'react'
import Header from './Header/Header'
import TaskList from "./TaskList/TaskList"
import Footer from "./Footer/Footer"

function List() {
  const [tasks, setTasks] = useState([
    { isChecked: true, taskName: 'Learn JavaScript' },
    { isChecked: false, taskName: 'Learn React' },
    { isChecked: false, taskName: 'Have a life!' }
  ]);

  const [filterText, setFilterText] = useState('All');

  const filteredTasks = tasks.filter((task) => {
    if (filterText === 'Active') return !task.isChecked;
    if (filterText === 'Completed') return task.isChecked;
    return true;
  });

  const deleteCompleted = () => {
    const completedTasks = tasks.filter((task) => !task.isChecked)
    setTasks(completedTasks);
  };

  const clickedBtn = (filterBtn) => setFilterText(filterBtn);

  const deleteSelected = (index) => setTasks(tasks.filter((_, i) => i !== index));

  return (
    <div>
      <section className="todoapp">
        <Header addTask={setTasks} tasks={tasks} />
        <TaskList tasks={filteredTasks} deleteSelected={deleteSelected} />
        <Footer tasks={tasks} filteredTasks={clickedBtn} filter={filteredTasks}  clearCompleted={deleteCompleted} />
      </section>
    </div>
  );
}

export default List;
