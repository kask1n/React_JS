import './App.css';
import CommentsList from './components/CommentsList';

function App() {
  return (
    <div>
      <header style={{ marginLeft: '15px' }}>
        <h2>Домашняя работа 2.</h2>
        <p>
          <b>Задание</b>: Список комментариев с удалением.<br></br>
          <b>Цель</b>: Комбинирование useState, рендеринга списков и обработки событий для создания интерактивного интерфейса.<br></br>
          <b>Задача</b>: Создать компонент CommentsList, который отображает список комментариев. Каждый комментарий должен иметь кнопку для его удаления. При нажатии на кнопку комментарий должен удаляться из списка.
        </p>
        <h2>Решение:</h2>
        <CommentsList />
      </header>
    </div>
  );
}

export default App;
