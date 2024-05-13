import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../components/Cart';

const CartPage = () => {
  return (
    <>
      <section className="head center">
        <h2 className="head__heading">SHOPPING CART</h2>
        <ul className="breadcrumb">
          <li className="breadcrumb__box-link"><Link to="/" className="breadcrumb__link">HOME</Link></li>
          <li className="breadcrumb__box-link"><Link to="#" className="breadcrumb__link">SHOPPING CART</Link></li>
        </ul>
      </section>
      <section className="cart__box center">
        <div className=" cart__box__left">
          <Cart imgSrc="img/product3.svg" />
          <Cart imgSrc="img/catalog2.svg" />
          <div className="cart__product__buttons">
            <button className="button cart_button" type="reset">
              CLEAR SHOPPING CART
            </button>
            <Link to="/catalog">
              <button className="button cart_button" type="button">
                CONTINUE SHOPPING
              </button>
            </Link>
          </div>
        </div>
        <div className=" cart__box__right">
          <form className="form__box" action="#">
            <h3 className="cart__form__heading">SHIPPING ADRESS</h3>
            <input className="form__input" type="text" placeholder="Bangladesh"></input>
            <input className="form__input" type="text" placeholder="State"></input>
            <input className="form__input" type="text" placeholder="Postcode / Zip"></input>
            <button className="button form__button" type="submit">GET A QUOTE</button>
          </form>
          <div className="checkout__box">
            <div className="summary__box">
              <div className="checkout__box__heading__left">
                <h3 className="cart__subtotal">SUB TOTAL</h3>
                <h2 className="cart__total">GRAND TOTAL</h2>
              </div>
              <div className="checkout__box__heading__right">
                <h3 className="cart__subtotal">$900</h3>
                <h2 className="cart__total cart__pink__value">$900</h2>
              </div>
            </div>
            <div className="cart__box__line"></div>
            <div className="button checkout__button">
              PROCEED TO CHECKOUT
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
