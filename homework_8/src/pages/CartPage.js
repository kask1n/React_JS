import React from 'react';
import { Link } from 'react-router-dom';

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
          <div className="cart__product">
            <img src="img/product3.svg" alt=""></img>
            <div className="cart__product__content">
              <div className="cart__product__content__top">
                <Link to="/product" className="cart__product__header__text">MANGO PEOPLE <br></br>T-SHIRT</Link>
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
                    $300
                  </span>
                </span>
                <span className="cart__parametre">
                  Color: <span className="cart__grey__value">
                    Red
                  </span>
                </span>
                <span className="cart__parametre">
                  Size: <span className="cart__grey__value">
                    XL
                  </span>
                </span>
                <span className="cart__parametre">
                  Quantity: <input className="cart_input_quantity" type="number" placeholder="2"></input>
                </span>
              </div>
            </div>
          </div>
          <div className="cart__product">
            <img src="img/catalog2.svg" alt=""></img>
            <div className="cart__product__content">
              <div className="cart__product__content__top">
                <Link to="/product" className="cart__product__header__text">MANGO PEOPLE <br></br>T-SHIRT</Link>
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
                    $300
                  </span>
                </span>
                <span className="cart__parametre">
                  Color: <span className="cart__grey__value">
                    Red
                  </span>
                </span>
                <span className="cart__parametre">
                  Size: <span className="cart__grey__value">
                    XL
                  </span>
                </span>
                <span className="cart__parametre">
                  Quantity: <input className="cart_input_quantity" type="number" placeholder="2"></input>
                </span>
              </div>
            </div>
          </div>
          <div className="cart__product__buttons">
            <button className="button cart_button" type="reset">
              CLEAR SHOPPING CART
            </button>
            <button className="button cart_button" type="button">
              CONTINUE SHOPPING
            </button>
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
