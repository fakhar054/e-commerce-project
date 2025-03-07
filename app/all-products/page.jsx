import React from "react";
import "./all-products.css";
import "../../public/assets/css/theme/main.css";
import AllProduct from "@/components/product/product";
import Dropdown from "@/components/dropdown/Dropdown";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";

export default function page() {
  return (
    <section id="all_product" className="all_product ">
      <div className="heading_div">
        <Header2 />
      </div>
      <div className="container margin_top">
        <div className="row ">
          <div className="col-md-12 col-lg-3  show_not">
            <Dropdown />
          </div>
          <div className="col-md-12 col-lg-9 ">
            <AllProduct />
          </div>
        </div>
      </div>
      <Footer2 />
    </section>
  );
}
