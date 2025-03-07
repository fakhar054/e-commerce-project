import React from "react";
import "./orders.css";
import { BsFilter } from "react-icons/bs";
import MyProfile from "../../components/MyProfile/profile";
import "../../public/assets/css/theme/main.css";
import { IoSearchOutline } from "react-icons/io5";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";

export default function page() {
  return (
    <section className="my_Orders ">
      <div className="heading_div">
        <Header2 />
      </div>
      <div className="container product_image">
        <div className="first_main_div mb-3">
          <h1>My Profile</h1>
          <div className="input_search_div">
            <input type="text" placeholder="Search" />
            <IoSearchOutline className="search_icon " />
            <div className="filer_div">
              <p>Filter</p>
              <BsFilter className="icon_filter" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 my_profile">
            <MyProfile />
          </div>
          <div className="col-lg-8 mt-5">
            <div className="single_order_div pb-2 mb-3">
              <div className="img_content_div">
                <img
                  src="/assets/images/common/product_imge.png"
                  alt="prod image"
                />
                <div className="content_div">
                  <h6>Girls Pink Moana Printed Dress</h6>
                  <p>Size: S </p>
                  <p>QTY: 1</p>
                  <div className="flex_div_props">
                    <p id="delivered">Delivered</p>
                    <p>Your Product has been delivered</p>
                  </div>
                </div>
                <div className="view_div">
                  <p id="price">$80.00</p>
                  <div className="button_div">
                    <button className="view_order">View Order</button>
                    <button className="write_review">Write a review</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="single_order_div pb-2 mb-3">
              <div className="img_content_div">
                <img
                  src="/assets/images/common/product_imge.png"
                  alt="prod image"
                />
                <div className="content_div">
                  <h6>Girls Pink Moana Printed Dress</h6>
                  <p>Size: S </p>
                  <p>QTY: 1</p>
                  <div className="flex_div_props">
                    <p id="delivered">Delivered</p>
                    <p>Your Product has been delivered</p>
                  </div>
                </div>
                <div className="view_div">
                  <p id="price">$80.00</p>
                  <div className="button_div">
                    <button className="view_order">View Order</button>
                    <button className="write_review">Write a review</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="single_order_div pb-2 mb-3">
              <div className="img_content_div">
                <img
                  src="/assets/images/common/product_imge.png"
                  alt="prod image"
                />
                <div className="content_div">
                  <h6>Girls Pink Moana Printed Dress</h6>
                  <p>Size: S </p>
                  <p>QTY: 1</p>
                  <div className="flex_div_props">
                    <p id="delivered">In Process</p>
                    <p>Your Product has been delivered</p>
                  </div>
                </div>
                <div className="view_div">
                  <p id="price">$80.00</p>
                  <div className="button_div">
                    <button className="view_order">View Order</button>
                    <button className="cancel">Cancel Order</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </section>
  );
}
