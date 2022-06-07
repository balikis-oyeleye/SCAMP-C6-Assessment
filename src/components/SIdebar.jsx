import React from "react";

const Sidebar = () => {
  const links = ["Categories", "Men", "Women", "About", "Contact"];
  const navLinks = links.map((link, _index) => {
    return (
      <li
        className="hover:text-black cursor-pointer font-bold text-lg"
        key={_index}
      >
        {link}
      </li>
    );
  });

  return <ul>{navLinks}</ul>;
};

export default Sidebar;
