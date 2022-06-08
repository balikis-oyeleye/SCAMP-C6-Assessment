import React from "react";
import { BsX } from "react-icons/bs";

const Sidebar = ({ setSidebar }) => {
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

  return (
    <aside className="sidebar">
      <div className="bg-white w-3/4 h-screen pl-4 pt-4">
        <BsX
          className="text-3xl font-bold cursor-pointer"
          onClick={() => setSidebar(false)}
        />
        <ul className=" pt-10 flex flex-col gap-5">{navLinks}</ul>
      </div>
    </aside>
  );
};

export default Sidebar;
