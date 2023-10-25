import React from "react";

const Dropdown = ({ title, show, onClick, items }) => {
  return (
    <div className="relative group">
      <button
        onClick={onClick}
        className={`${
          show ? "text-white" : "text-gray-400 hover:text-white"
        } px-4 py-2 font-medium`}
      >
        {title}
      </button>
      {show && (
        <div className="absolute mt-2 py-2 px-3 bg-gray-800 text-white whitespace-nowrap">
          {items.map((item, index) => (
            <div key={index} className="py-1">
              <a href={item.link} className="text-gray-300 hover:text-white">
                {item.label}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;