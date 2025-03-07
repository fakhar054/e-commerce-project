"use client";

import "./style.css";
import { FaRegHeart } from "react-icons/fa";
// import { useRouter } from "next/navigation";
import CardComponent from "../CardComponent/page";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { TbFilters } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa";

export default function AllProduct() {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleNavigation = () => {
    router.push("/shop-product-detail/10812");
  };
  return (
    <>
      <div className="results_main mb-3">
        <div className="results ">
          <TbFilters />
          <p>Showing 1-16 of 72 results</p>
        </div>
        <div className="results ">
          <FaAngleDown />

          <p>Shot by latest</p>
        </div>
      </div>
      <div className="all_product_parent_div">
        <section id="AllProduct" className="AllProduct pro_item mb-3 ">
          <div className="img_div">
            <img
              src="/assets/images/products/productImg.png"
              alt=""
              onClick={handleNavigation}
            />
            <FaRegHeart className="icon_size" />
            <h2 className="mt-1">Allen Solly</h2>
            <p className="detail">Women Textured Handheld Bag</p>
            <div className="price_div">
              <p className="price">$80.00</p>
              <p className="old_price">$100.00</p>
            </div>
            <div className="btn_div" onClick={togglePopup}>
              <button className="cart mt-1">Add to cart</button>
              {showPopup && (
                <div className="pop_up_prop">
                  <CardComponent />
                </div>
              )}
            </div>
          </div>
        </section>
        <section id="AllProduct" className="AllProduct pro_item mb-3">
          <div className="img_div " onClick={handleNavigation}>
            <img src="/assets/images/products/productImg.png" alt="" />
            <FaRegHeart className="icon_size" />
            <h2 className="mt-1">Allen Solly</h2>
            <p className="detail">Women Textured Handheld Bag</p>
            <div className="price_div">
              <p className="price">$80.00</p>
              <p className="old_price">$100.00</p>
            </div>
            <div className="btn_div">
              <button className="cart mt-1">Add to cart</button>
            </div>
          </div>
        </section>
        <section id="AllProduct" className="AllProduct pro_item mb-3">
          <div className="img_div" onClick={handleNavigation}>
            <img src="/assets/images/products/productImg.png" alt="" />
            <FaRegHeart className="icon_size" />
            <h2 className="mt-1">Allen Solly</h2>
            <p className="detail">Women Textured Handheld Bag</p>
            <div className="price_div">
              <p className="price">$80.00</p>
              <p className="old_price">$100.00</p>
            </div>
            <div className="btn_div">
              <button className="cart mt-1">Add to cart</button>
            </div>
          </div>
        </section>
        <section id="AllProduct" className="AllProduct pro_item mb-3">
          <div className="img_div">
            <img src="/assets/images/products/productImg.png" alt="" />
            <FaRegHeart className="icon_size" />
            <h2 className="mt-1">Allen Solly</h2>
            <p className="detail">Women Textured Handheld Bag</p>
            <div className="price_div">
              <p className="price">$80.00</p>
              <p className="old_price">$100.00</p>
            </div>
            <div className="btn_div">
              <button className="cart mt-1">Add to cart</button>
            </div>
          </div>
        </section>
        <section id="AllProduct" className="AllProduct pro_item mb-3">
          <div className="img_div">
            <img src="/assets/images/products/productImg.png" alt="" />
            <FaRegHeart className="icon_size" />
            <h2 className="mt-1">Allen Solly</h2>
            <p className="detail">Women Textured Handheld Bag</p>
            <div className="price_div">
              <p className="price">$80.00</p>
              <p className="old_price">$100.00</p>
            </div>
            <div className="btn_div">
              <button className="cart mt-1">Add to cart</button>
            </div>
          </div>
        </section>

        <section id="AllProduct" className="AllProduct pro_item mb-3">
          <div className="img_div">
            <img src="/assets/images/products/productImg.png" alt="" />
            <FaRegHeart className="icon_size" />
            <h2 className="mt-1">Allen Solly</h2>
            <p className="detail">Women Textured Handheld Bag</p>
            <div className="price_div">
              <p className="price">$80.00</p>
              <p className="old_price">$100.00</p>
            </div>
            <div className="btn_div">
              <button className="cart mt-1">Add to cart</button>
            </div>
          </div>
        </section>
      </div>
      <div className="pagnation mt-5 mb-5">
        <FaArrowLeft className="icon_prop" />
        <p className="active">1</p> <p>2</p>
        <p>3</p>
        <FaArrowRight className="icon_prop " />
      </div>
      <div className="features_div">
        <div className="features">
          <div className="feature">
            <img src="/assets/images/common/vehical.png" alt="Free Shipping" />
            <h4>Free Shipping</h4>
            <p>Free shipping for order above $150</p>
          </div>
          <div className="feature">
            <img src="/assets/images/common/money.png" alt="Money Guarantee" />
            <h4>Money Guarantee</h4>
            <p>Within 30 days for an exchange</p>
          </div>
          <div className="feature">
            <img src="/assets/images/common/face.png" alt="Online Support" />
            <h4>Online Support</h4>
            <p>24 hours a day</p>
          </div>
          <div className="feature">
            <img
              src="/assets/images/common/payment.png"
              alt="Flexible Payment"
            />
            <h4>Flexible Payment</h4>
            <p>Pay with multiple credit cards</p>
          </div>
        </div>
      </div>
    </>
  );
}
