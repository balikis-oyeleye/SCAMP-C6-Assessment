import React from "react";
import { BsCart3 } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import avatar from "../../assets/images/image-avatar.png";
import Logo from "../../assets/images/logo.svg";
import "./header.css";

const Header = ({ setSidebar }) => {
  const links = ["Categories", "Men", "Women", "About", "Contact"];

  const navLinks = links.map((link, _index) => {
    return (
      <li className="hover:text-black cursor-pointer" key={_index}>
        {link}
      </li>
    );
  });

  return (
    <header className="header container mx-auto flex flex-row justify-between items-center border-b py-4">
      <nav className="header-nav flex flex-row items-center gap-4 sm:gap-8 justify-center">
        <BiMenu
          className="cursor-pointer text-2xl block md:hidden"
          onClick={() => setSidebar(true)}
        />
        <div className="header-nav__brand cursor-pointer">
          <img src={Logo} alt="logo" className="w-full h-auto" />
        </div>
        <ul className="header-nav__links  flex-row items-center gap-4 text-gray-500 hidden md:flex">
          {navLinks}
        </ul>
      </nav>
      <div className="header-cta flex flex-row items-center gap-6">
        <h2 className="header-cta__cart">
          <BsCart3 size={"24px"} className="cursor-pointer" />
        </h2>
        <div className="header-cta__avatar">
          <img src={avatar} alt="avatar" className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
