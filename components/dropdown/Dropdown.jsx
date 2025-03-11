"use client";
import "./dropdown.css";
import React, { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import PriceSlider from "../PriceSlider/PriceSlider";

export default function Dropdown() {
  const [ProductCategories, setProductCategories] = useState(false);
  const [filterbyPrice, setFilterbyPrice] = useState(false);
  const [filterbyColor, setFilterbyColor] = useState(false);
  const [filterbySize, setFilterbySize] = useState(false);

  const handlebySize = () => {
    setFilterbySize(!filterbySize);
  };

  const handleProductCategories = () => {
    setProductCategories(!ProductCategories);
  };

  const handleFilterebyPrice = () => {
    setFilterbyPrice(!filterbyPrice);
  };

  const handlebyColor = () => {
    setFilterbyColor(!filterbyColor);
  };
  return (
    <>
      <div className="Product_Categories">
        <div className="heading_icon" onClick={handleProductCategories}>
          <h3>Product Categories</h3>
          <RiArrowDropDownLine className="drop_down_icon" />
        </div>
        {ProductCategories && (
          <ul>
            <li>
              <input
                type="checkbox"
                id="myCheckbox"
                name="option1"
                value="checked"
              />
              <label for="myCheckbox">Men</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="myCheckbox"
                name="option1"
                value="checked"
              />
              <label for="myCheckbox">Women</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="myCheckbox"
                name="option1"
                value="checked"
              />
              <label for="myCheckbox">Makeup</label>
            </li>
          </ul>
        )}

        <div className="filterByPrice_div">
          <div className="heading_icon" onClick={handleFilterebyPrice}>
            <h3>Filter by Price</h3>
            <RiArrowDropDownLine className="drop_down_icon" />
          </div>
          {filterbyPrice && <PriceSlider />}
        </div>

        <div className="heading_icon" onClick={handlebyColor}>
          <h3>Filter by Color</h3>
          <RiArrowDropDownLine className="drop_down_icon" />
        </div>
        {filterbyColor && (
          <ul>
            <div className="color_div d-flex">
              <li>
                <input
                  className="red"
                  type="checkbox"
                  id="myCheckbox"
                  name="option1"
                  value="checked"
                />
                <label for="myCheckbox">Red</label>
              </li>
              <p>(12)</p>
            </div>
            <div className="color_div d-flex">
              <li>
                <input
                  className="orange"
                  type="checkbox"
                  id="myCheckbox"
                  name="option1"
                  value="checked"
                />
                <label for="myCheckbox">Orange</label>
              </li>
              <p>(12)</p>
            </div>
            <div className="color_div d-flex">
              <li>
                <input
                  className="blue"
                  type="checkbox"
                  id="myCheckbox"
                  name="option1"
                  value="checked"
                />
                <label for="myCheckbox">Blue</label>
              </li>
              <p>(12)</p>
            </div>

            <div className="color_div d-flex">
              <li>
                <input
                  className="yellow"
                  type="checkbox"
                  id="myCheckbox"
                  name="option1"
                  value="checked"
                />
                <label for="myCheckbox">Yellow</label>
              </li>
              <p>(12)</p>
            </div>

            <div className="color_div d-flex">
              <li>
                <input
                  className="green"
                  type="checkbox"
                  id="myCheckbox"
                  name="option1"
                  value="checked"
                />
                <label for="myCheckbox">Green</label>
              </li>
              <p>(12)</p>
            </div>
          </ul>
        )}
        <div className="heading_icon" onClick={handlebySize}>
          <h3>Filter by Size</h3>
          <RiArrowDropDownLine className="drop_down_icon" />
        </div>
        {filterbySize && (
          <ul>
            <div className="color_div d-flex">
              <li>
                <input
                  type="checkbox"
                  id="myCheckbox"
                  name="option1"
                  value="checked"
                />
                <label for="myCheckbox">S</label>
              </li>
              <p>(12)</p>
            </div>
            <div className="color_div d-flex">
              <li>
                <input
                  type="checkbox"
                  id="myCheckbox"
                  name="option1"
                  value="checked"
                />
                <label for="myCheckbox">M</label>
              </li>
              <p>(12)</p>
            </div>
            <div className="color_div d-flex">
              <li>
                <input
                  type="checkbox"
                  id="myCheckbox"
                  name="option1"
                  value="checked"
                />
                <label for="myCheckbox">L</label>
              </li>
              <p>(12)</p>
            </div>
            <div className="color_div d-flex">
              <li>
                <input
                  type="checkbox"
                  id="myCheckbox"
                  name="option1"
                  value="checked"
                />
                <label for="myCheckbox">XL</label>
              </li>
              <p>(12)</p>
            </div>
            <div className="color_div d-flex">
              <li>
                <input
                  type="checkbox"
                  id="myCheckbox"
                  name="option1"
                  value="checked"
                />
                <label for="myCheckbox">XXL</label>
              </li>
              <p>(12)</p>
            </div>
          </ul>
        )}
      </div>
    </>
  );
}
