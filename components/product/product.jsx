"use client";

import "./style.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import CardComponent from "../CardComponent/page";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { TbFilters } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa";
import useAllProducts from "../../app/all-products/All_ProductResponse_Api";

export default function AllProduct() {
  const { products, loading, error } = useAllProducts();
  const [showPopup, setShowPopup] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const router = useRouter();

  const togglePopup = () => setShowPopup(!showPopup);
  const toggleFavorite = () => setFavorite(!favorite);

  const handleNavigation = () => {
    router.push("/shop-product-detail/10812");
  };

  // Pagination functions
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  // Get current page's products
  const displayedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="results_main mb-3">
        <div className="results ">
          <div className="img_div">
            <img src="/assets/images/common/showing.png" />
            <img src="/assets/images/common/results.png" />
          </div>
          <p>{`Showing ${itemsPerPage * (currentPage - 1) + 1} - ${
            itemsPerPage * currentPage > products.length
              ? products.length
              : itemsPerPage * currentPage
          } of ${products.length} results`}</p>
        </div>
        <div className="results ">
          <FaAngleDown />
          <p>Sort by latest</p>
        </div>
      </div>

      <div className="all_product_parent_div">
        {displayedProducts.slice(0, 6).map((Single_Product, index) => (
          <section
            key={index}
            id="AllProduct"
            className="AllProduct pro_item mb-3"
          >
            <div className="img_div">
              <img
                src={
                  Single_Product?.thumbnail
                    ? Single_Product.thumbnail
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zwhySGCEBxRRFYIcQgvOLOpRGqrT3d7Qng&s"
                }
                onClick={handleNavigation}
                alt="product"
              />
              {favorite ? (
                <FaHeart className="icon_size" onClick={toggleFavorite} />
              ) : (
                <FaRegHeart className="icon_size" onClick={toggleFavorite} />
              )}

              <h2 className="mt-1">
                {Single_Product.title.split(" ").slice(0, 10).join(" ")}
                {Single_Product.title.split(" ").length > 10 && "..."}
              </h2>
              <p className="detail">Women Textured Handheld Bag</p>
              <div className="price_div">
                <p className="price">{`$${Single_Product.current_price}`}</p>
                <p className="old_price">{`$${Single_Product.previous_price}`}</p>
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

      {/* Pagination */}
      {/* <div className="pagnation mt-5 mb-5">
        <FaArrowLeft
          className={`icon_prop ${currentPage === 1 ? "disabled" : ""}`}
          onClick={prevPage}
        />
        {Array.from({ length: totalPages }, (_, i) => (
          <p
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => goToPage(i + 1)}
          >
            {i + 1}
          </p>
        ))}
        <FaArrowRight
          className={`icon_prop ${
            currentPage === totalPages ? "disabled" : ""
          }`}
          onClick={nextPage}
        />
      </div> */}

      {/* Pagination */}
      {/* Pagination */}
      <div className="pagination mt-5 mb-5">
        <FaArrowLeft
          className={`icon_prop ${currentPage === 1 ? "disabled" : ""}`}
          onClick={prevPage}
        />

        {Array.from({ length: 5 }, (_, i) => (
          <p
            key={i + 1}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => goToPage(i + 1)}
          >
            {i + 1}
          </p>
        ))}

        <p>...</p>

        <FaArrowRight
          className={`icon_prop ${
            currentPage === totalPages ? "disabled" : ""
          }`}
          onClick={nextPage}
        />
      </div>
    </>
  );
}
