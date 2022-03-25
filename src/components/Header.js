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
    <div className="text-white font-orbit tracking-widest fixed top-0 left-0 right-0 z-50">
      <div
        className={`flex bg-github justify-between items-center p-6 font-semibold shadow-lg border-b ${
          showMenu === "" && "md:flex-col"
        }`}
      >
        <div className="flex justify-between w-full items-center">
          <Link to="/">
            <h1 className="text-4xl tracking-widest hover:scale-125 transition ease-in-out delay-100 duration-500">
              <span className="text-cyan-400 ">B</span>.
              <span className="text-pink-400">E</span>
            </h1>
          </Link>
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
                className={`list-none mx-5 hover:scale-125 transition ease-in-out delay-100 duration-500 ${
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
                className={`list-none p-2 hover:scale-125 transition ease-in-out delay-100 duration-500 ${
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
