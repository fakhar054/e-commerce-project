"use client";
import "./dropdown.css";
import React, { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import PriceSlider from "../PriceSlider/PriceSlider";

export default function Dropdown({ setSelectedSizes, sizeCounts }) {
  const [ProductCategories, setProductCategories] = useState(false);
  const [filterbyPrice, setFilterbyPrice] = useState(false);
  const [filterbyColor, setFilterbyColor] = useState(false);
  const [filterbySize, setFilterbySize] = useState(false);
  console.log(sizeCounts);

  //for size
  const [selectedSizes, setLocalSelectedSizes] = useState([]);
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setLocalSelectedSizes((prevSizes) =>
      checked ? [...prevSizes, name] : prevSizes.filter((size) => size !== name)
    );
  };
  // Sync local state with MainPage state
  useEffect(() => {
    setSelectedSizes(selectedSizes);
  }, [selectedSizes, setSelectedSizes]);

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
              <label htmlFor="myCheckbox">Men</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="myCheckbox"
                name="option1"
                value="checked"
              />
              <label htmlFor="myCheckbox">Women</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="myCheckbox"
                name="option1"
                value="checked"
              />
              <label htmlFor="myCheckbox">Makeup</label>
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
                <label htmlFor="myCheckbox">Red</label>
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
                <label htmlFor="myCheckbox">Orange</label>
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
                <label htmlFor="myCheckbox">Blue</label>
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
                <label htmlFor="myCheckbox">Yellow</label>
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
                <label htmlFor="myCheckbox">Green</label>
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
                  id="S"
                  name="S"
                  value="checked"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="S">S</label>
              </li>
              <p>{sizeCounts.S}</p>
            </div>
            <div className="color_div d-flex">
              <li>
                <input
                  type="checkbox"
                  id="M"
                  name="M"
                  value="checked"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="M">M</label>
              </li>
              <p>{sizeCounts.M}</p>
            </div>
            <div className="color_div d-flex">
              <li>
                <input
                  type="checkbox"
                  id="large"
                  name="large"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="large">L</label>
              </li>
              <p>{sizeCounts.L}</p>
            </div>
            <div className="color_div d-flex">
              <li>
                <input
                  type="checkbox"
                  id="XL"
                  name="XL"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="XL">XL</label>
              </li>
              <p>{sizeCounts.XL}</p>
            </div>
            <div className="color_div d-flex">
              <li>
                <input
                  type="checkbox"
                  id="XXL"
                  name="XXL"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="XXL">XXL</label>
              </li>
              <p>{sizeCounts.XXL}</p>
            </div>
          </ul>
        )}
      </div>
    </>
  );
}
