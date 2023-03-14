import React from "react";
import Logo from "../Logo/index";
import { Categories } from "./utils";
import { AiFillCaretDown } from "react-icons/ai";
const SideBar = () => {
  return (
    <div className="sideBar">
      <Logo />
      <nav>
        {Categories.map((navItem) => {
          const { icon, categoryName, subCategories } = navItem;
          return (
            <div
              style={{ color: "#9C2780" }}
              className="navItem"
              key={categoryName}
            >
              {icon} {categoryName} {subCategories && <AiFillCaretDown />}
              <div>
                {subCategories && (
                  <div>
                    {subCategories.map((subNavItem) => {
                      const { categoryName, icon } = subNavItem;
                      return (
                        <div key={categoryName}>
                          {categoryName} {icon}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default SideBar;
