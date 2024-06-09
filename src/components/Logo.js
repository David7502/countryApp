import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* When you use the img tag, the src is looking directly into the public folder
      When you want an image using the background property you need to indicate the full path */}
      <img src="./logo192.png" alt="logo react" />
      <h3>React World</h3>
    </div>
  );
};

export default Logo;
