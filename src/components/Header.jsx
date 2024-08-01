import React from "react";
import { logo, navBtns, navItems } from "../assets";
import Button from "./Button";

function Header() {
  return (
    <>
      <header className="w-full flex justify-between items-center mb-6 py-8 px-10">
        <img src={logo} alt="logo" className="" />
        <nav className="">
          <ul className="flex items-center justify-center gap-4 hover:cursor-pointer">
            {navItems.map((item) => (
              <li key={item} className="text-[#211D6D]">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-btns flex items-center justify-center gap-2">
          {navBtns.map((item, id) => (
            <Button key={item} btn={item} border={id === 0 ? false : true} classname={id===0?"":"px-8"} />
          ))}
        </div>
      </header>
    </>
  );
}

export default Header;
