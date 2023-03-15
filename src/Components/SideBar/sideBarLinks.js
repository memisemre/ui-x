import React, { useState } from "react";
import { Categories } from "./utils";
import { AiFillCaretDown } from "react-icons/ai";

const SideBarLinks = () => {
  const [activeCategory, setActiveCategory] = useState("Picker");
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const handleSubCategoryClick = ()=>{
    activeSubCategory && setActiveSubCategory(null);
  }
  return (
    <nav>
      {Categories.map((navItem) => {
        const { icon, categoryName, subCategories } = navItem;
        return (
          <div className="navItem-wrapper" key={categoryName}>
            <div
              className={`navItem ${
                activeCategory === categoryName ? "active" : ""
              }`}
              onClick={() => {
                setActiveCategory(categoryName);
                setActiveSubCategory(categoryName);
              }}
            >
              <div className="container">
                <div className="icon-container">{icon}</div>
                <p>{categoryName}</p>
              </div>
              {subCategories && <AiFillCaretDown onClick={handleSubCategoryClick}/>}
            </div>
            
              {subCategories && (
                <div className={`dropDown-container ${
                  activeSubCategory === categoryName ? "active" : ""
                }`}>
                  {subCategories.map((subNavItem) => {
                    const { categoryName, icon } = subNavItem;
                    return (
                      <div className="dropDown-item">
                        {icon} <p>{categoryName}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            
          </div>
        );
      })}
    </nav>
  );
};

export default SideBarLinks;
