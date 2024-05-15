import ProductList from './components/ProductList';
import { store } from './components/store';
import { Provider } from 'react-redux';
import React from 'react';
import './App.css';

import AddProduct from './components/AddProduct';
// import EditProductForm from './components/EditProductForm';

function App() {
  return (
    <div>
      <header style={{ marginLeft: '15px' }}>
        <h2>Домашняя работа 6.</h2>
        <h3>Задание: Приложение для управления каталогом продуктов.<br></br></h3>
        <p><b>Цель</b>: Разработать приложение для управления каталогом продуктов, позволяющее добавлять, удалять, отображать и редактировать продукты.</p>

        <h3>Настройка Redux Store:</h3>
        <ul style={{ margin: 0, paddingLeft: 20, listStyleType: 'circle' }}>
          <li>Используйте configureStore из @reduxjs/toolkit для создания хранилища;</li>
          <li>Определите начальное состояние и создайте слайс с использованием createSlice для продуктов. Каждый продукт должен иметь id, name, description, price, и available;</li>
          <li>В слайсе определите редьюсеры и действия для добавления нового продукта, удаления продукта по ID, обновления продукта и изменения его доступности.</li>
        </ul>

        <h3>Компоненты React:</h3>
        <ul style={{ margin: 0, paddingLeft: 20, listStyleType: 'circle' }}>
          <li><b>Добавление продукта</b>: Создайте форму, позволяющую пользователям вводить данные нового продукта (имя, описание, цена, доступность) и добавлять его в каталог;</li>
          <li><b>Отображение продуктов</b>: Разработайте компонент, который отображает список всех продуктов с их атрибутами, а также кнопки для удаления продукта из каталога и переключения его доступности;</li>
          <li><b>Редактирование продукта</b>: Опционально, предоставьте возможность редактирования существующих продуктов, чтобы можно было изменять их имя, описание, цену и доступность.</li>
        </ul>

        <h2>Решение:</h2>

        <div className="App">
          <Provider store={store}>
            <AddProduct />
            {/* <EditProductForm /> */}
            <ProductList />
          </Provider>
        </div>
      </header>
    </div >
  );
}

export default App;