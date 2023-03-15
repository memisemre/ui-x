import React from "react";
import Logo from "../Logo/index";
import SideBarLinks from "./sideBarLinks";
const SideBar = () => {
  return (
    <div className="sideBar">
      <Logo />
      <SideBarLinks />
    </div>
  );
};

export default SideBar;
