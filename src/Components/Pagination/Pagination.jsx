import React from "react";
import "./Pagination.css";
const Pagination = ({ setTabContent, tabContent }) => {
  const handleIncrement = () => {
    if (tabContent == 4) {
      setTabContent(() => 1);
    } else setTabContent((prev) => prev + 1);
  };
  const handleDecrement = () => {
    if (tabContent == 1) {
      setTabContent(() => 4);
    } else setTabContent((prev) => prev - 1);
  };

  return (
    <div className="pagination">
      <div className="pagination-wrapper">
        <i
          className="fa-solid fa-chevron-left fa-xl arrow"
          onClick={handleDecrement}
        ></i>
        <span className="pagination-result">0{tabContent}/ 04</span>
        <i
          className="fa-solid fa-chevron-right fa-xl arrow"
          onClick={handleIncrement}
        ></i>
      </div>
    </div>
  );
};

export default Pagination;
