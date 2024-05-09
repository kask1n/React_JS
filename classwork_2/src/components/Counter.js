import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  }

  return (
    <>
      <span>{count}</span>
      <button onClick={updateCount}>Click +1</button>
    </>
  );
}

export default Counter;