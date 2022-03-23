import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const menuItems = [
  {
    title: "Home",
    key: "/",
  },
  {
    title: "Projects",
    key: "/projects",
  },
  {
    title: "Courses",
    key: "/courses",
  },
  {
    title: "Contact",
    key: "/contact",
  },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState("md:hidden");
  const pathname = window.location.pathname;

  return (
    <div className="text-white font-mont">
      <div
        className={`flex bg-github justify-between items-center p-2 font-semibold shadow-lg ${
          showMenu === "" && "md:flex-col"
        }`}
      >
        <div className="flex justify-between w-full items-center">
          <h1 className="text-4xl">BILLY ENDRES</h1>

          <FaBars
            onClick={() => {
              showMenu === "md:hidden"
                ? setShowMenu("")
                : setShowMenu("md:hidden");
            }}
            className="lg:hidden xl:hidden 2xl:hidden md:flex cursor-pointer"
          />
        </div>
        <div className="flex md:hidden">
          {menuItems.map(({ title, key }) => {
            return (
              <li
                key={key}
                className={`list-none mx-5 ${
                  key === pathname && "bg-white text-black rounded-md px-3"
                }`}
              >
                <Link to={`${key}`}>{title}</Link>
              </li>
            );
          })}
        </div>

        <div
          className={`mt-5 md:flex items-start w-full flex-col lg:hidden xl:hidden 2xl:hidden ${showMenu}`}
        >
          {menuItems.map(({ title, key }) => {
            return (
              <li
                key={key}
                className={`list-none p-2 ${
                  key === pathname && "bg-white text-black rounded-md"
                }`}
              >
                <Link to={`${key}`}>{title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
