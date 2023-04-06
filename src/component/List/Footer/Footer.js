import React, { useState, useEffect } from 'react';

function Footer({ filteredTasks, clearCompleted, filter }) {
  const buttons = [
    { name: 'All', selected: false },
    { name: 'Active', selected: false },
    { name: 'Completed', selected: false }
  ];

  const [buttonList, setButtonList] = useState(buttons);

  useEffect(() => {
    const newButtonList = buttonList.map((btn) => ({
      ...btn,
      selected: btn.name === filter
    }));
    setButtonList(newButtonList);
  }, [filter]);

  const handleCheck = (name) => {
    filteredTasks(name);
  };

// hook'ları kullanarak bir buton listesi üzerinde filtreleme yapılmaktadır.
// useEffect, bileşenin monte edilmesi ve filter prop'unun değişmesi durumunda çalışacak.
// buttonList değişkeni, butonların listesini ve her bir butonun seçildiği durumu içerir.
// Bu durum, her bir butonun seçili olup olmadığını takip etmek için kullanılır.
// Her bir buton nesnesine selected özelliği eklenir. 
// selected özelliği, filtreleme için seçilen butonun adını filter ile karşılaştırarak belirlenir.


  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{filter.length} </strong>
          items left
        </span>
        <ul className="filters">
          {buttonList.map((button, index) => (
            <li key={index}>
              <a
                href="#/"
                className={button.selected ? 'selected' : ''}
                onClick={() => handleCheck(button.name)} //seçilen butonun adını alır ve filter durumunu günceller. 
                                                        //Bu durum, bileşenin durumunu güncelleyen useState hook'u 
                                                        //kullanılarak tanımlanmıştır.
              >
                {button.name}
              </a>
            </li>
          ))}
        </ul>
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>
    </div>
  );
}

export default Footer;
