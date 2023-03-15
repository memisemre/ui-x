import React from "react";
import Logo from "../Logo/index";
import SideBarLinks from "./sideBarLinks";
import AboutMeButton from "./aboutMeButton";
const SideBar = () => {
  return (
    <div className="sideBar">
      <Logo />
      <SideBarLinks />
      <AboutMeButton />
    </div>
  );
};

export default SideBar;
