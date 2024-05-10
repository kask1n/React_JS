import './App.css';
import Content from './components/Content';
import { useContext, createContext, useState } from 'react';

export const UserContext = createContext('World');
export const ThemeContext = createContext(false); // Светлая тема по умолчанию

function App() {
  const userName = useContext(UserContext);
  const [theme, setTheme] = useState(false);

  function toggleTheme() {
    setTheme(prevTheme => !prevTheme);
  }

  return (
    <div>
      <header style={{ marginLeft: '15px' }}>
        <h2>Домашняя работа 5.</h2>
        <h3>Задание: Приложение для переключения темы сайта.<br></br></h3>
        <p><b>Цель</b>: Создать приложение, позволяющее пользователю переключаться между светлой и темной темой сайта.</p>

        <h3>Функционал:</h3>
        <ul style={{ margin: 0, paddingLeft: 20, listStyleType: 'circle' }}>
          <li><b>Action types</b>: TOGGLE_THEME;</li>
          <li><b>Actions</b>: Создайте действие для переключения темы;</li>
          <li><b>Reducer</b>: Реализуйте редьюсер, который обрабатывает это действие и изменяет тему в состоянии приложения;</li>
          <li><b>Component</b>: Создайте компонент, который отображает переключатель для изменения темы сайта.</li>
        </ul>

        <h3>Описание:</h3>
        <ul style={{ margin: 0, paddingLeft: 20, listStyleType: 'circle' }}>
          <li><b>Состояние</b>: Для хранения текущей темы можно использовать логическую переменную (true для темной темы и false для светлой) или строку ("dark" или "light");</li>
          <li><b>Интерфейс</b>: Ваш интерфейс может состоять из переключателя, который изменяет тему с светлой на темную и обратно.</li>
        </ul>

        <h2>Решение:</h2>
        <ThemeContext.Provider value={theme}>
          <UserContext.Provider value={userName}>
            <Content />
            <div>
              <button onClick={toggleTheme}>Изменить тему</button>
            </div>
          </UserContext.Provider>
        </ThemeContext.Provider>
      </header>
    </div >
  );
}

export default App;