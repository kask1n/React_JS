import { useState } from 'react';

function CommentsList() {
  const [inputText, setInputText] = useState('');
  const [comments, setComments] = useState([
    { id: 1, text: 'Это первый комментарий' },
    { id: 2, text: 'Это второй комментарий' },
    { id: 3, text: 'Это третий комментарий' }
  ]);

  function clickHandler() {
    if (!inputText.trim()) {
      return;
    }

    const newComment = {
      id: comments.length + 1,
      text: inputText
    }

    setComments([...comments, newComment]);
    setInputText('');
  }

  function deleteComment(id) {
    setComments(comments.filter(comment => comment.id !== id));
  }

  return (
    <>
      <label htmlFor='input'>Введите комментарий: </label>
      <input
        onChange={(event) => setInputText(event.target.value)}
        type='text'
        id='input'
        value={inputText}
        maxLength='255'
      />
      <button onClick={clickHandler}>Сохранить</button>

      <h3>Список сохранённых комментариев:</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.text}
            <button style={{ marginLeft: '10px' }} onClick={() => deleteComment(comment.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CommentsList;