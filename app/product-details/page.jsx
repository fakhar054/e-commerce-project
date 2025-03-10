import React from "react";
import "./product_details.css";
import Specifications from "@/components/Specifications/Specifications";
import ReviewSection from "@/components/ReviewSection/ReviewSection";
import ReviewForm from "@/components/shop/ReviewForm";
import ProductInfo from "@/components/product-info/page";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";

export default function page() {
  return (
    <div>
      {/* <Header2 /> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-8">
            <ProductInfo />
          </div>
          <Specifications />
          <ReviewSection />
          <ReviewForm />
        </div>
      </div>
      <Footer2 />
    </div>
  );
}
