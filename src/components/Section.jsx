import React from "react";
import product1Lg from "../assets/images/image-product-1.jpg";
import product1Sm from "../assets/images/image-product-1-thumbnail.jpg";
import product2Sm from "../assets/images/image-product-2-thumbnail.jpg";
import product3Sm from "../assets/images/image-product-3-thumbnail.jpg";
import product4Sm from "../assets/images/image-product-4-thumbnail.jpg";
import incIcon from "../assets/images/icon-plus.svg";
import decIcon from "../assets/images/icon-minus.svg";
import cartIcon from "../assets/images/icon-cart.svg";

function Section() {
  return (
    <section>
      <div className="images">
        <div className="lg-img-wrapper">
          <img src={product1Lg} alt="product 1" />
        </div>
        <div className="sm-img-wrapper">
          <img src={product1Sm} alt="product 1" className="active" />
          <img src={product2Sm} alt="product 1" />
          <img src={product3Sm} alt="product 1" />
          <img src={product4Sm} alt="product 1" />
        </div>
      </div>
      <div className="details">
        <h4 className="brand">SNEAKER BRAND</h4>
        <h1 className="name">Fall Limited Edition Sneakers</h1>
        <p className="desc">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="current-price">
          <h2 className="price">$125.00</h2>
          <h3 className="disc-percentage">50%</h3>
        </div>
        <h4 className="disc-price">$250.00</h4>
        <div className="transaction">
          <div className="amount">
            <button>
              <img src={decIcon} alt="increment" />
            </button>
            <p>0</p>
            <button>
              <img
                src={incIcon}
                alt="decrement"
                style={{ marginTop: "0.25rem" }}
              />
            </button>
          </div>
          <div className="add">
            <button>
              <img src={cartIcon} alt="cart icon" width="15" />
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
