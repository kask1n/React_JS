import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';

const Home = () => {
  return (
    <>
      <section className="promo">
        <div className="promo__img">
          <img src="img/promo.svg" alt="promo"></img>
        </div>
        <div className="promo__content">
          <div className="promo__info">
            <h1 className="promo__title">THE BRAND</h1>
            <h2 className="promo__heading">OF LUXERIOUS <span className="text__pink">FASHION</span></h2>
          </div>
        </div>
      </section>
      <section className="sale center">
        <div className="sale__item">
          <img src="img/si1.svg" alt="sale"></img>
          <div className="sale__content">
            <p className="sale__text">30% OFF</p>
            <h3 className="sale__heading">FOR WOMEN</h3>
          </div>
        </div>
        <div className="sale__item">
          <img src="img/si2.svg" alt="sale"></img>
          <div className="sale__content">
            <p className="sale__text">HOT DEAL</p>
            <h3 className="sale__heading">FOR MEN</h3>
          </div>
        </div>
        <div className="sale__item">
          <img src="img/si3.svg" alt="sale"></img>
          <div className="sale__content">
            <p className="sale__text">NEW ARRIVALS</p>
            <h3 className="sale__heading">FOR KIDS</h3>
          </div>
        </div>
        <div className="sale__item sale__item_big">
          <img src="img/sibig.svg" alt="sale"></img>
          <div className="sale__content">
            <p className="sale__text">LUXURIOUS & TRENDY</p>
            <h3 className="sale__heading">ACCESSORIES</h3>
          </div>
        </div>
      </section>
      <section className="product-box center">
        <h2 className="product-box__heading">Fetured Items</h2>
        <p className="product-box__text">Shop for items based on what we featured in this week</p>
        <div className="product-box__content">
          <Product imgSrc="img/product1.svg" />
          <Product imgSrc="img/product2.svg" />
          <Product imgSrc="img/product3.svg" />
          <Product imgSrc="img/product4.svg" />
          <Product imgSrc="img/product5.svg" />
          <Product imgSrc="img/product6.svg" />
        </div>
        <section className="all-products-button">
          <Link to="/catalog">
            <div className="button">Browse All Products</div>
          </Link>
        </section>
      </section>
      <section className="advantages center">
        <article className="advantages__item">
          <img className="advantages__img" src="img/advantages.svg" alt=""></img>
          <h3 className="advantages__heading">Free Delivery</h3>
          <p className="advantages__text">
            Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
          </p>
        </article>
        <article className="advantages__item">
          <img className="advantages__img" src="img/percent.svg" alt=""></img>
          <h3 className="advantages__heading">Free Delivery</h3>
          <p className="advantages__text">
            Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
          </p>
        </article>
        <article className="advantages__item">
          <img className="advantages__img" src="img/crown.svg" alt=""></img>
          <h3 className="advantages__heading">Free Delivery</h3>
          <p className="advantages__text">
            Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
          </p>
        </article>
      </section>
    </>
  );
};

export default Home;
