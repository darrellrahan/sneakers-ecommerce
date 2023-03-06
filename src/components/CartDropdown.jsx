import React from "react";
import { useGlobalContext } from "../context";
import productImg from "../assets/images/image-product-1-thumbnail.jpg";

function CartDropdown() {
  const { isCart, setIsCart, transaction, setTransaction } = useGlobalContext();

  if (!isCart) return;

  return (
    <div className="cart-dropdown">
      <div className="top">
        <h4 className="title">Cart</h4>
        <button onClick={() => setIsCart(false)}>
          <svg
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            fill="#C3CAD9"
          >
            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" />
          </svg>
        </button>
      </div>
      <hr />
      {transaction.finalAmount === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="body">
          <div className="d-flex">
            <div className="left">
              <div>
                <img src={productImg} alt="preview" />
              </div>
              <div>
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 x {transaction.finalAmount}{" "}
                  <strong>${(125 * transaction.finalAmount).toFixed(2)}</strong>
                </p>
              </div>
            </div>
            <div className="right">
              <button
                className="delete-btn"
                onClick={() =>
                  setTransaction({ ...transaction, finalAmount: 0 })
                }
              >
                <svg
                  width="14"
                  height="16"
                  fill="#C3CAD9"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                      id="a"
                    />
                  </defs>
                  <use fillRule="nonzero" xlinkHref="#a" />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartDropdown;
