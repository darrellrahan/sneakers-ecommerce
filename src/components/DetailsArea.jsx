import React from "react";
import cartIcon from "../assets/images/icon-cart.svg";
import { useGlobalContext } from "../context";

function DetailsArea() {
  const { transaction, setTransaction } = useGlobalContext();

  return (
    <div className="details">
      <h4 className="brand">SNEAKER BRAND</h4>
      <h1 className="name">Fall Limited Edition Sneakers</h1>
      <p className="desc">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="prices">
        <div className="current-price">
          <h2 className="price">$125.00</h2>
          <h3 className="disc-percentage">50%</h3>
        </div>
        <h4 className="disc-price">$250.00</h4>
      </div>
      <div className="transaction">
        <div className="amount">
          <div
            style={{
              cursor: transaction.amount === 0 ? "not-allowed" : null,
            }}
          >
            <button
              className="decrement-btn"
              style={{
                pointerEvents: transaction.amount === 0 ? "none" : null,
                opacity: transaction.amount === 0 ? "0.25" : null,
              }}
              onClick={() =>
                transaction.amount > 0 &&
                setTransaction({
                  ...transaction,
                  amount: transaction.amount - 1,
                })
              }
            >
              -
            </button>
          </div>
          <div>
            <p>{transaction.amount}</p>
          </div>
          <div>
            <button
              onClick={() =>
                setTransaction({
                  ...transaction,
                  amount: transaction.amount + 1,
                })
              }
            >
              <svg
                width="12"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#FF7E1B"
              >
                <defs>
                  <path
                    d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                    id="b"
                  />
                </defs>
                <use fillRule="nonzero" xlinkHref="#b" />
              </svg>
            </button>
          </div>
        </div>
        <div
          className="add"
          style={{ cursor: transaction.amount === 0 ? "not-allowed" : null }}
        >
          <button
            onClick={() => {
              setTransaction({
                ...transaction,
                amount: 0,
                finalAmount: transaction.finalAmount + transaction.amount,
              });
            }}
            style={{
              pointerEvents: transaction.amount === 0 ? "none" : null,
              opacity: transaction.amount === 0 ? "0.5" : null,
            }}
          >
            <img src={cartIcon} alt="cart icon" width="15" />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsArea;
