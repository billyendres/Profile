import React from "react";
import Layout from "../components/Layout";
import profileImg from "../images/profileImage.jpg";

import {
  FaReact,
  FaCss3,
  FaJsSquare,
  FaHtml5,
  FaGit,
  FaPython,
} from "react-icons/fa";

const Home = () => {
  return (
    <Layout>
      <div>
        <div className="min-h-screen bg-github flex justify-center">
          <div className="grid md:grid-cols-1 grid-cols-2 h-screen items-center transform rotate-12 md:rotate-0 md:border-0 mx-20 sm:mx-0 bg-github shadow-2xl shadow-neutral-900 border-2 md:shadow-none">
            <div className="md:mx-16">
              <img
                className="p-4 md:-mb-32 rounded-3xl"
                src={profileImg}
                alt={profileImg}
              />
            </div>
            <div className="font-bold text-white md:px-5 md:h-full md:text-center p-4">
              <h1 className="text-5xl  md:text-4xl py-1 font-orbit">
                Hi, I'm <b className="text-cyan-400">BILLY</b>
              </h1>
              <h2 className="text-3xl  md:text-2xl py-1 font-orbit">
                Front End <b className="text-pink-400">React</b> Developer
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-pink-400 h-60 flex justify-center items-center">
            <h1 className="text-6xl text-center text-black md:text-4xl font-bold my-8 uppercase">
              Technologies
            </h1>
          </div>
          <div className="grid md:grid-cols-1 grid-cols-3">
            <FaHtml5
              size={120}
              className="w-full text-center mt-8 hover:scale-125 transition ease-in-out delay-100 duration-500 hover:text-red-500"
            />
            <FaJsSquare
              size={120}
              className="w-full text-center mt-8 hover:scale-125 transition ease-in-out delay-100 duration-500 hover:text-green-500"
            />
            <FaCss3
              size={120}
              className="w-full text-center mt-8 hover:scale-125 transition ease-in-out delay-100 duration-500 hover:text-orange-500"
            />
            <FaReact
              size={120}
              className="w-full text-center mt-8 hover:scale-125 transition ease-in-out delay-100 duration-500 hover:text-cyan-500"
            />
            <FaGit
              size={120}
              className="w-full text-center mt-8 hover:scale-125 transition ease-in-out delay-100 duration-500 hover:text-pink-500"
            />
            <FaPython
              size={120}
              className="w-full text-center mt-8 hover:scale-125 transition ease-in-out delay-100 duration-500 hover:text-purple-500"
            />
          </div>
          <div className="mb-20 mt-8">
            <div className="text-center h-60 bg-cyan-400 flex justify-center items-center" />
            <div className="md:mx-5 mx-32 shadow-2xl shadow-black bg-github -mt-28 rounded-xl py-16 text-white border-2 border-white-400 ">
              <h1 className="font-bold text-4xl md:text-xl uppercase text-center md:px-6 px-14">
                Professional Profile
              </h1>
              <p className="text-2xl md:text-base text-center my-5  md:px-6 px-14 leading-8 font-mont">
                Software development & finance professional. <br /> Experienced
                in full stack software development lifecycle, technical
                reporting and documentation, early stage investment research,
                analysis and review processes, stakeholder management and
                working efficiently and effectively as part of a team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
