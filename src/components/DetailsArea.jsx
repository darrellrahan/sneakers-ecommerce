import React from "react";
import incIcon from "../assets/images/icon-plus.svg";
import decIcon from "../assets/images/icon-minus.svg";
import cartIcon from "../assets/images/icon-cart.svg";

function DetailsArea() {
  return (
    <div className="details">
      <h4 className="brand">SNEAKER BRAND</h4>
      <h1 className="name">Fall Limited Edition Sneakers</h1>
      <p className="desc">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
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
  );
}

export default DetailsArea;
