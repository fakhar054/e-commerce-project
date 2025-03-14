"use client";
import { useRouter, useParams } from "next/navigation";
import FeaturedProducts from "./FeaturedProducts";
import "./shopDetails1.css";
import Reviews from "./Reviews";
import Link from "next/link";
import ReviewForm from "./ReviewForm";
import ProductSlide from "./ProductSlide";
import { useState, useEffect } from "react";
import { useContextElement } from "@/context/Context";
import { FiPlus } from "react-icons/fi";

import { CiHeart } from "react-icons/ci";
import { LuMinus } from "react-icons/lu";

import { LiaStarSolid } from "react-icons/lia";
import { CiStar } from "react-icons/ci";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import ReviewSection from "../ReviewSection/ReviewSection";
import Specifications from "../Specifications/Specifications";

export default function ShopDetails1({ product }) {
  console.log("product Review Shop details", product);

  const [data, setData] = useState();
  const router = useRouter();

  const { id } = useParams();

  //fetching product details
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://foundation.alphalive.pro/api/front/product/${id}/details`
        );
        const result = await res.json();
        console.log("The result of details api", result);
        // console.log("The result of data ", result.data);

        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const [bodyColor, setBodyColor] = useState(false);

  const togglePopup = () => {
    setIsVisible(!isVisible);
    setBodyColor(true);
  };

  const handleDecrease = (productId) => {
    const product = cartProducts.find((elm) => elm.id === productId);
    if (product.quantity > 1) {
      setQuantity(productId, product.quantity - 1);
    }
  };

  const handleIncrease = (productId) => {
    const product = cartProducts.find((elm) => elm.id === productId);
    if (product.quantity < 99) {
      setQuantity(productId, product.quantity + 1);
    }
  };

  const handleInputChange = (productId, value) => {
    const numericValue = Math.min(99, Math.max(1, value));
    setQuantity(productId, numericValue);
  };

  const [activeTab, setActiveTab] = useState("description");
  const {
    cartProducts,
    setCartProducts,

    isAddedToCartProducts,
    addProductToCart,
  } = useContextElement();
  const setQuantity = (id, quantity) => {
    if (quantity >= 1) {
      const item = cartProducts.filter((elm) => elm.id == id)[0];
      const items = [...cartProducts];
      const itemIndex = items.indexOf(item);
      item.quantity = quantity;
      items[itemIndex] = item;
      setCartProducts(items);
    }
  };
  const handlePopup = () => {
    setIsVisible(false);
    setBodyColor(false);
  };

  const handleCheckout = () => {
    router.push("/shop-cart");
  };
  return (
    <article className="product type-product single product-single py-2 lg:py-6 xl:py-8">
      <div
        className={`container single_product ${
          bodyColor ? "bg_color_gray" : ""
        }`}
      >
        <header className="product-header panel">
          <div className="row child-cols-12 lg:child-cols-6 gy-4 gx-4 md:gx-6 xl:gx-8">
            <div>
              <ProductSlide data={data} />
            </div>
            <div>
              <div
                className="product-details sticky-element panel vstack gap-1 xl:gap-2 "
                data-uc-sticky="bottom: true; offset: 40;"
              >
                <div className="flex_div ">
                  <h1 className="pro_details">{data?.title}</h1>
                  <p id="stock">In Stock</p>
                </div>
                <p id="prod_name">{data?.title}</p>

                <div className="product-rating hstack gap-1">
                  <ul
                    className="nav-x gap-0 text-gray-100 dark:text-gray-700"
                    title="Average 4 out of 5"
                  >
                    {/* Debugging: Show rating value */}
                    {[...Array(Number(data?.reviews?.[0]?.rating) || 0)].map(
                      (_, i) => (
                        <li key={i}>
                          <i className="  unicon-star-filled yellow_star" />
                        </li>
                      )
                    )}
                  </ul>

                  <span className="hstack gap-narrow fs-7 opacity-60 reviews">
                    {Number(data?.rating)}
                    <span className="d-none sm:d-inline-block reviews">
                      (100 Reviews)
                    </span>
                  </span>
                </div>

                <div className="hstack justify-between items-center gap-2">
                  <div className="product-price hstack gap-1 fs-5 xl:fs-4">
                    <span className="price">${data?.current_price}</span>

                    <span className="price-old text-line-through opacity-40">
                      ${data?.previous_price}
                    </span>
                  </div>
                </div>
                <p className="product-desc fs-6 xl:fs-5 my-2 pro_details_para1">
                  Moana Printed Pink Dress is soft, breathable, and perfect for
                  young adventurers. Featuring a vibrant Moana design, short
                  sleeves, and a flared skirt, it offers comfort and easy
                  movement. Ideal for casual wear, parties, and Disney-themed
                  events
                </p>

                <p id="color_word">Color</p>

                <div className="box-container">
                  <div className="box box-red"></div>
                  <div className="box box-blue"></div>
                  <div className="box box-yellow"></div>
                  <div className="box box-black"></div>
                  <div className="box box-green"></div>
                </div>
                <p id="color_word" className="mt-2">
                  Size
                </p>
                <div className="box-container">
                  <div className="box size">S</div>
                  <div className="box size">M</div>
                  <div className="box size">L</div>
                  <div className="box size">XL</div>
                  <div className="box size">XXL</div>
                </div>

                <div className="product-actions hstack gap-1 xl:mt-2">
                  {isAddedToCartProducts(product.id) ? (
                    <div className="quantity_box_div">
                      <LuMinus
                        className="quantity_icon"
                        onClick={() => handleDecrease(product.id)}
                      />

                      <input
                        type="number"
                        className="quantity_input"
                        step={1}
                        min={1}
                        max={99}
                        name="quantity"
                        value={
                          cartProducts.filter((elm) => elm.id == product.id)[0]
                            .quantity / 1
                        }
                        // onChange={(e) =>
                        //   setQuantity(product.id, e.target.value / 1)
                        onChange={(e) =>
                          handleInputChange(product.id, e.target.value / 1)
                        }
                        title="Qty"
                      />
                      <FiPlus
                        className="quantity_icon"
                        onClick={() => handleIncrease(product.id)}
                      />
                    </div>
                  ) : (
                    <input
                      type="number"
                      className=" form-control form-control-sm lg:form-control-md w-100px dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                      step={1}
                      min={1}
                      max={99}
                      name="quantity"
                      defaultValue={1}
                      title="Qty"
                      autoComplete="off"
                    />
                  )}
                  {isAddedToCartProducts(product.id) ? (
                    <div className="add_to_cart_div" onClick={togglePopup}>
                      <a
                        // href={"/shop-cart"}
                        className="text_decoration"
                      >
                        Add To Cartttttt
                        {/* View Cart */}
                      </a>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-sm lg:btn-md btn-primary text-white md:max-w-150px flex-1"
                      onClick={() => addProductToCart(product.id)}
                    >
                      Add To Cart
                    </button>
                  )}
                  <CiHeart className="heart_icon" />
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="product-tabs panel mt-8"></div>
        <div className={`pop_up ${isVisible ? "show" : " "}`}>
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
        <div className="first_tab mt-3 mb-3">
          <p className="tab_heading">Description</p>
          <p className="details_p">{data?.details}</p>
        </div>

        <Specifications />

        <ReviewSection product_review={product} />
        <div className="add_review_form mt-2">
          <ReviewForm />
        </div>
        {/* Products Related */}
        <FeaturedProducts />
      </div>
    </article>
  );
}
