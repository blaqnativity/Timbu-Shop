import React, { useState } from "react";

const FilterNav = () => {
  const [activeButton, setActiveButton] = useState("Date");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const linkClass = (buttonName) =>
    buttonName === activeButton
      ? "bg-[#121211] text-white rounded-full px-3 py-2"
      : "hover:text-gray-300";

  return (
    <div className="grid grid-cols-1 gap-4">
      <button
        className={`py-2 px-5 rounded-full border-2 border-gray-800 ${linkClass(
          "Date"
        )}`}
        onClick={() => handleButtonClick("Date")}
      >
        <img
          src="/images/furniture.png"
          alt="Chair"
          className="inline-block mr-2"
        />
        <span>Chair</span>
      </button>
      <button
        className={`py-2 px-5 rounded-full border-2 border-gray-800 ${linkClass(
          "Price"
        )}`}
        onClick={() => handleButtonClick("Price")}
      >
        <img
          src="/images/furniture-1.png"
          alt="Sofa"
          className="inline-block mr-2"
        />
        <span>Sofa</span>
      </button>
      <button
        className={`py-2 px-5 rounded-full border-2 border-gray-800 ${linkClass(
          "Relevance"
        )}`}
        onClick={() => handleButtonClick("Relevance")}
      >
        <img
          src="/images/furniture-2.png"
          alt="Table"
          className="inline-block mr-2"
        />
        <span>Table</span>
      </button>
      <button
        className={`py-2 px-5 rounded-full border-2 border-gray-800 ${linkClass(
          "Rug"
        )}`}
        onClick={() => handleButtonClick("Rug")}
      >
        <img
          src="/images/furniture-3.png"
          alt="Rug"
          className="inline-block mr-2"
        />
        <span>Rug</span>
      </button>
      <button
        className={`py-2 px-5 rounded-full border-2 border-gray-800 ${linkClass(
          "Outdoors"
        )}`}
        onClick={() => handleButtonClick("Outdoors")}
      >
        <img
          src="/images/furniture-4.png"
          alt="Outdoors"
          className="inline-block mr-2"
        />
        <span>Outdoors</span>
      </button>
      <button
        className={`py-2 px-5 rounded-full border-2 border-gray-800 ${linkClass(
          "Dresser"
        )}`}
        onClick={() => handleButtonClick("Dresser")}
      >
        <img
          src="/images/furniture-5.png"
          alt="Dresser"
          className="inline-block mr-2"
        />
        <span>Dresser</span>
      </button>
    </div>
  );
};

export default FilterNav;
