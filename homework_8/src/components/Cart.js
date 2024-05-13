import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = ({
  imgSrc = "img/product1.svg",
  altText = "",
  prodHeading = "ELLERY X M'O CAPSULE",
  prodPrice = 49.99,
  prodColor = 'Red',
  prodSize = "M",
  prodQuantity = 3
}) => {
  // const [items, setItems] = useState(0);

  // const handleQuantityChange = (id, quantity) => {
  //   const newItems = items.map(item => {
  //     if (item.id === id) {
  //       return { ...item, quantity: quantity };
  //     }
  //     return item;
  //   });
  //   setItems(newItems);
  // };

  // const getTotalPrice = () => {
  //   return items.reduce((total, item) => total + item.price * item.quantity, 0);
  // };

  return (
    <div>
      {/* {items.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>${item.price} x
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
              min="0"
            /> = ${item.price * item.quantity}
          </p>
        </div>
      ))}
      <h2>GRAND TOTAL: ${getTotalPrice()}</h2> */}

      <div className="cart__product">
        <img src={imgSrc} alt={altText}></img>
        <div className="cart__product__content">
          <div className="cart__product__content__top">
            <Link to="/product" className="cart__product__header__text">{prodHeading}</Link>
            <div className="close__button" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="31" height="31"
                fill="#575757">
                <path
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </div>
          </div>
          <div className="cart__product__content__bottom">
            <span className="cart__parametre">
              Price: <span className="cart__pink__value">
                ${prodPrice}
              </span>
            </span>
            <span className="cart__parametre">
              Color: <span className="cart__grey__value">
                {prodColor}
              </span>
            </span>
            <span className="cart__parametre">
              Size: <span className="cart__grey__value">
                {prodSize}
              </span>
            </span>
            <span className="cart__parametre">
              Quantity: <input className="cart_input_quantity" type="number" placeholder={prodQuantity}></input>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
