import { useState } from "react";

function ToDoList() {
  const [inputText, setInputText] = useState('');
  const [arr, setArr] = useState(['To Do 1', 'To Do 2']);

  function clickHandler() {
    if (!inputText.trim()) {
      return;
    }

    setArr([...arr, inputText]);
    setInputText('');
  }

  return (
    <>
      <label htmlFor='input'>Введите текст: </label>
      <input
        onChange={(event) => setInputText(event.target.value)}
        type='text'
        id='input'
        value={inputText}
        maxLength='10'
      />
      <button onClick={clickHandler}>Click to Add</button>
      <ul>
        {arr.map((item) => (
          <li key={arr.indexOf(item)}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;