import { useState } from 'react';

function TextInput() {
  const [text, setText] = useState();

  const getText = ({ target }) => {
    setText(target.value);
  }

  return (
    <div>
      <input type='text' value={text} onChange={getText} maxLength='10' />
      <p>Вы ввели: {text ? text : 'Вы ничего не ввели'}</p>
    </div>
  );
}

export default TextInput;