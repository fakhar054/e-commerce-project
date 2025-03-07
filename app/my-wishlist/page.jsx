import React from "react";
import MyProfile from "../../components/MyProfile/profile";
import "../../public/assets/css/theme/main.css";
import "./my-wishlist.css";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";

export default function page() {
  return (
    <section className="my_wishlist">
      <div className="heading_div">
        <Header2 />
      </div>
      <div className="container mar_top">
        <div className="row">
          <div className="col-md-4">
            <MyProfile />
          </div>
          <div className="col-md-8">
            <div className="product_grid_main_div">
              <div className="product_parent_div">
                <div className="img_div">
                  <img src="/assets/images/common/dress_pic.png" alt="" />
                </div>
                <div className="content">
                  <h6>Allen Solly</h6>
                  <p id="color_gray">Women Textured Handheld Bag</p>
                  <div className="price_div">
                    <p id="newPrice">$80.00</p>
                    <p id="old_Price">$100.00</p>
                  </div>
                </div>
              </div>
              <div className="product_parent_div">
                <div className="img_div">
                  <img src="/assets/images/common/dress_pic.png" alt="" />
                </div>
                <div className="content">
                  <h6>Allen Solly</h6>
                  <p id="color_gray">Women Textured Handheld Bag</p>
                  <div className="price_div">
                    <p id="newPrice">$80.00</p>
                    <p id="old_Price">$100.00</p>
                  </div>
                </div>
              </div>
              <div className="product_parent_div">
                <div className="img_div">
                  <img src="/assets/images/common/dress_pic.png" alt="" />
                </div>
                <div className="content">
                  <h6>Allen Solly</h6>
                  <p id="color_gray">Women Textured Handheld Bag</p>
                  <div className="price_div">
                    <p id="newPrice">$80.00</p>
                    <p id="old_Price">$100.00</p>
                  </div>
                </div>
              </div>
              <div className="product_parent_div">
                <div className="img_div">
                  <img src="/assets/images/common/dress_pic.png" alt="" />
                </div>
                <div className="content">
                  <h6>Allen Solly</h6>
                  <p id="color_gray">Women Textured Handheld Bag</p>
                  <div className="price_div">
                    <p id="newPrice">$80.00</p>
                    <p id="old_Price">$100.00</p>
                  </div>
                </div>
              </div>
              <div className="product_parent_div">
                <div className="img_div">
                  <img src="/assets/images/common/dress_pic.png" alt="" />
                </div>
                <div className="content">
                  <h6>Allen Solly</h6>
                  <p id="color_gray">Women Textured Handheld Bag</p>
                  <div className="price_div">
                    <p id="newPrice">$80.00</p>
                    <p id="old_Price">$100.00</p>
                  </div>
                </div>
              </div>
              <div className="product_parent_div">
                <div className="img_div">
                  <img src="/assets/images/common/dress_pic.png" alt="" />
                </div>
                <div className="content">
                  <h6>Allen Solly</h6>
                  <p id="color_gray">Women Textured Handheld Bag</p>
                  <div className="price_div">
                    <p id="newPrice">$80.00</p>
                    <p id="old_Price">$100.00</p>
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
