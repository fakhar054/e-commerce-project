"use client";

import "./style.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import CardComponent from "../CardComponent/page";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { TbFilters } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa";

export default function AllProduct() {
  const [showPopup, setShowPopup] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const router = useRouter();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://foundation.alphalive.pro/api/front/products"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  // console.log("data", data);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleNavigation = () => {
    router.push("/shop-product-detail/10812");
  };

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <>
      <div className="results_main mb-3">
        <div className="results ">
          {/* <TbFilters /> */}
          <div className="img_div">
            <img src="/assets/images/common/showing.png" />
            <img src="/assets/images/common/results.png" />
          </div>
          <p>Showing 1-16 of 72 results</p>
        </div>
        <div className="results ">
          <FaAngleDown />
          <p>Shot by latest</p>
        </div>
      </div>
      <div className="all_product_parent_div">
        {data.map((product) => (
          <section id="AllProduct" className="AllProduct pro_item mb-3">
            <div className="img_div">
              <img
                src="/assets/images/products/productImg.png"
                onClick={handleNavigation}
                alt="im"
              />
              {favorite ? (
                <FaHeart className="icon_size" onClick={toggleFavorite} />
              ) : (
                <FaRegHeart className="icon_size" onClick={toggleFavorite} />
              )}

              <h2 className="mt-1">
                {product.title.split(" ").slice(0, 10).join(" ")}
                {product.title.split(" ").length > 10 && "..."}
              </h2>
              <p className="detail">Women Textured Handheld Bag</p>
              <div className="price_div">
                <p className="price">{`$${product.current_price}`}</p>
                <p className="old_price">{`$${product.previous_price}`}</p>
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
        ))}
      </div>
      <div className="pagnation mt-5 mb-5">
        <FaArrowLeft className="icon_prop" />
        <p className="active">1</p> <p>2</p>
        <p>3</p>
        <FaArrowRight className="icon_prop " />
      </div>
      {/* <div className="features_div mb-3">
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
      </div> */}
    </>
  );
}
