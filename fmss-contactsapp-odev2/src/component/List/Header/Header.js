import React, { useState, useEffect } from 'react';
import '../styles.css';

function Header({ addTask, tasks }) {
  const [isChecked, setIsChecked] = useState(false);
  const [taskName, setTaskName] = useState('');

  useEffect(() => {
    setIsChecked(false);
    setTaskName('');
  }, [tasks]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'taskName') {
      setTaskName(value);
    } else if (name === 'isChecked') {
      setIsChecked(!isChecked);
    }
  };

// event parametresi, kullanıcının form elemanına yaptığı değişikliği temsil eder.
// event.target özelliği, değişikliğin yapıldığı form elemanını temsil eder.
// name ve value özellikleri, form elemanının name ve value özelliklerine karşılık gelir.
// form elemanının değerini ve form elemanının ne olduğunu belirtir.
// if-else koşulları, name özelliğinin değerine göre setTaskName veya setIsChecked fonksiyonlarının çağrılmasını sağlar.


  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (taskName.trim() !== '') {
      addTask([...tasks, { isChecked, taskName }]);
      setIsChecked(false);
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="header">
        <h1>todos</h1>
        <input
          name="taskName"
          className="new-todo"
          placeholder="What needs to be done?"
          value={taskName}
          onChange={handleInputChange}
          autoFocus
        />
      </div>
      <div>
        <button className="btn"></button>
      </div>
    </form>
  );
}

export default Header;
