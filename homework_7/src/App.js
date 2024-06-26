import './App.css';
import { store } from './components/store';
import { Provider } from 'react-redux';
import ToDos from './components/ToDos';

function App() {
  return (
    <div>
      <header style={{ marginLeft: '15px' }}>
        <h2>Домашняя работа 7.</h2>
        <h3>Задание: Имитация асинхронной загрузки и отображения списка задач из локального хранилища.<br></br></h3>

        <ol>
          <li><p><b>Инициализация проекта и установка зависимостей</b>: Инициализировать новый проект React. Установить @reduxjs/toolkit и react-redux;</p></li>
          <li><p><b>Создание локальных данных</b>: Определить массив объектов, представляющих задачи, в файле, например, src/data/tasks.js. Каждая задача может содержать поля, такие как id, title и completed;</p></li>
          <li><p><b>Настройка Redux store</b>: Создать Redux store с использованием configureStore из @reduxjs/toolkit. Использовать Redux Thunk middleware, уже включённый в @reduxjs/toolkit;</p></li>
          <li><p><b>Создание асинхронного действия с использованием Thunk</b>: Использовать createAsyncThunk для создания асинхронного действия, которое "загружает" данные задач из локального файла. Хотя данные и локальные, имитировать асинхронное поведение, например, с использованием setTimeout;</p></li>
          <li><p><b>Работа с компонентом</b>: Использовать хуки useDispatch и useSelector в компоненте для диспетчеризации асинхронного действия и выборки списка задач из состояния. Вывести список задач.</p></li>
        </ol>

        <h2>Решение:</h2>

        <Provider store={store}>
          <ToDos />
        </Provider>
      </header>
    </div >
  );
}

export default App;
