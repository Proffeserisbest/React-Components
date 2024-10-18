"use client";
import { ChevronDownIcon } from "../icon";
import React, { useState } from "react";
import styles from "../style/dumpStyle/Dropdown.module.scss"

const Dropdown = ({ label, defaultValue, items, labelClasses, onSelect }) => {
  const [isOpen, setISOpen] = useState(false);

  const handleOpen = () => {
    setISOpen(!isOpen);
  };

  return (
    <div className={`${styles["dropdown-flag"]}`}>
      <div
        className={`${styles["dropdown-flag-div"]}`}
        onClick={handleOpen}
      >
        <p className={labelClasses}>{defaultValue || label}</p>
        <span
          style={{transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" , transition:" transform 0.1s"}}
        >
          <ChevronDownIcon />
        </span>
      </div>
      {isOpen && (
        <div className={`${styles["dropdown-menu"]}`}>
          <div className={`${styles["dropdown-flex"]}`}>
            {items?.map((item, idx) => (
              <div
                key={idx}
                className={`${styles["dropdown-item"]}`}
                onClick={() => onSelect(item.value)}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
