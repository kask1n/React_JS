import { useEffect, useState } from 'react';

function ReversedTimer() {
  const [input, setInput] = useState();
  const [count, setCount] = useState();

  useEffect(() => {
    const timer = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, [count]);

  function clickHandler() {
    if (!input.trim()) {
      return;
    }

    setCount(input);
    setInput('');
  }

  return (
    <div>
      <label htmlFor='input'>Введите обратный отсчёт: </label>
      <input
        onChange={(event) => setInput(event.target.value)}
        type='text'
        id='input'
        value={input}
        maxLength='10'
      />
      <button onClick={clickHandler}>ReversedTimer</button>
      <div>{count}</div>
    </div>
  );
}

export default ReversedTimer;