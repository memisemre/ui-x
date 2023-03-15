import React from "react";
import SideBar from "../../Components/SideBar";
import RightBar from "../../Components/RightBar";

const viewName = () => {
  return (
    <>
      <SideBar />
      <div className="viewName-container"> viewName </div>
      <RightBar />
    </>
  );
};

export default viewName;
