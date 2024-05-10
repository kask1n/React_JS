import './App.css';
import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ListPage from './components/ListPage';
import PageDetails from './components/PageDetails';
import NotFound from './components/NotFound';

function App() {
  const [pages, setPages] = useState([
    { name: 'HomePage', text: 'Главная страница' },
    { name: 'AboutPage', text: 'О нас' }
  ]);

  const router = createBrowserRouter([
    { path: '/', element: <ListPage pages={pages} /> },
    { path: '/detail/:pageId', element: <PageDetails pages={pages} /> },
    { path: '*', element: <NotFound /> }
  ]);

  return (
    <div>
      <header style={{ marginLeft: '15px' }}>
        <h2>Домашняя работа 4.</h2>
        <h3>Задание: Приложение с двумя страницами.<br></br></h3>
        <p>
          <b>Цель</b>: Создать приложение с двумя страницами: "<i>Главная страница</i>" и "<i>О нас</i>".
          На каждой странице должна быть навигационная ссылка для перехода на другую страницу.<br></br>
          <b>Компоненты</b>:
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            <li>Создайте два компонента: HomePage.jsx и AboutPage.jsx;</li>
            <li>В каждом компоненте добавьте простой текст, например, "<i>Главная страница</i>" для HomePage и "<i>О нас</i>" для AboutPage;</li>
            <li>Реализовать переходы.</li>
          </ul>
        </p>
        <h2>Решение:</h2>

        <RouterProvider router={router} />
      </header>
    </div >
  );
}

export default App;