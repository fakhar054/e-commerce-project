"use client";
import "./dropdown.css";
import React, { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import PriceSlider from "../PriceSlider/PriceSlider";

function DropdownMenu({ title, options, onOptionClick, customComponent }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getCheckboxClass = () => {
    if (title === "Product Categories") return "checkbox-green";
    if (title === "Filter by Size") return "checkbox-green";

    if (title === "Filter by Color") return "checkbox-yellow";
    return "checkbox-default";
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center py-1 drop_down"
      >
        {title}
        <RiArrowDropDownLine
          className={`ml-2 transform drop_down_icon ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute w-48 bg dropdown_menu_list ">
          {customComponent ? (
            <div>{customComponent}</div>
          ) : (
            <ul>
              {options.map((option, index) => (
                <li key={index} className="cursor-pointer py-1">
                  <input
                    type="checkbox"
                    className={`mr-2 ${getCheckboxClass()}`}
                    id={`checkbox-${title}-${index}`}
                    onClick={() => onOptionClick(option)}
                  />
                  <label
                    htmlFor={`checkbox-${title}-${index}`}
                    className="flex items-center"
                  >
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default function Dropdown() {
  const [currentPath, setCurrentPath] = useState("");

  const handleOptionClick = (option) => {
    console.log(`${option} clicked`);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <p id="path"> {currentPath}</p>

      <DropdownMenu
        title="Product Categories"
        options={["Option 1", "Option 2", "Option 3"]}
        onOptionClick={handleOptionClick}
      />
      <DropdownMenu title="Filter by Price" customComponent={<PriceSlider />} />
      <DropdownMenu
        title="Filter by Color"
        options={["Red", "Green", "Blue"]}
        onOptionClick={handleOptionClick}
      />
      <DropdownMenu
        title="Filter by Size"
        options={["S", "M", "L"]}
        onOptionClick={handleOptionClick}
      />
    </div>
  );
}
