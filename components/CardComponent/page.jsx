"use client";
import React from "react";
import "./card.css";
import { IoMdClose } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";

export default function page() {
  const handlePopup = () => {};
  const handleCheckout = () => {};

  return (
    <div>
      <div className={`pop_up show `}>
        <div className="close_div">
          <p id="total_item">You have 3 items in your cart</p>
          <IoMdClose className="close_icon" onClick={handlePopup} />
        </div>
        <div className="pop_up_parent_div mt-3 pb-2">
          <div className="img_div">
            <img src="/assets/images/products/checkout_pic.png" />
          </div>
          <div className="content_div">
            <p className="prod_title">Girls Pink Moana Printed Dress</p>
            <p className="prod_quantity">1 x $80.00</p>
            <div className="delete_div">
              <p className="sizes">Size: S</p>
              <RiDeleteBin5Fill className="icon_prop" />
            </div>
          </div>
        </div>
        <div className="pop_up_parent_div mt-3 pb-2">
          <div className="img_div">
            <img src="/assets/images/products/checkout_pic.png" />
          </div>
          <div className="content_div">
            <p className="prod_title">Girls Pink Moana Printed Dress</p>
            <p className="prod_quantity">1 x $80.00</p>
            <div className="delete_div">
              <p className="sizes">Size: S</p>
              <RiDeleteBin5Fill className="icon_prop" />
            </div>
          </div>
        </div>
        <div className="total_div mt-1 mb-1">
          <p className="sub_total">Subtotal</p>
          <p className="total_amount">$200.00</p>
        </div>
        <div className="btn_div mt-2">
          <button id="view_cart">View Cart</button>
          <button id="checkout" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
