"use client";
import React, { useEffect, useState } from "react";
import "./all-products.css";
import "../../public/assets/css/theme/main.css";
import AllProduct from "@/components/product/product";
import Dropdown from "@/components/dropdown/Dropdown";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import Features from "@/components/Features_div/page";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useAllProducts from "./All_ProductResponse_Api";

export default function page() {
  const { products, loading, error } = useAllProducts();
  const [selectedSizes, setSelectedSizes] = useState([]);
  const sizeCounts = { S: 0, M: 0, L: 0, XL: 0, XXL: 0 };

  products.forEach((product) => {
    if (Array.isArray(product.size)) {
      product.size.forEach((size) => {
        if (sizeCounts[size] !== undefined) {
          sizeCounts[size] += 1;
        }
      });
    }
  });

  const filteredProducts =
    selectedSizes.length === 0
      ? products
      : products.filter(
          (product) =>
            Array.isArray(product.size) &&
            product.size.some((size) => selectedSizes.includes(size))
        );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section id="all_product" className="all_product ">
      <div className="heading_div">
        <Header2 />
      </div>
      <div className="container margin_top">
        <div className="row ">
          <div className="col-md-12 col-lg-3  show_not">
            <Dropdown setSelectedSizes={setSelectedSizes} sizeCounts={sizeCounts} />
          </div>
          <div className="col-md-12 col-lg-9 ">
            <AllProduct products={filteredProducts} />
          </div>
          <Features />
        </div>
      </div>
      <Footer2 />
    </section>
  );
}
