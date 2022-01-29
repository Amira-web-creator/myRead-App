import React from "react";

const NotFound = () => {
  const mystyle = {
    width: "100%",
  };
  return (
    <img src={require("../images/404.png")} style={mystyle} alt="not found" />
  );
};

export default NotFound;
