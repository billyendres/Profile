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
          <div className="grid md:grid-cols-1 grid-cols-2 h-screen items-center border-4 border-white transform rotate-12 md:rotate-0 md:border-0 mx-20 sm:mx-0 bg-github">
            <img className="px-5 md:-mb-24" src={profileImg} alt={profileImg} />
            <div className="font-bold text-white md:px-5 md:h-full">
              <h1 className="text-7xl  md:text-4xl">
                Hi, I'm <b className="text-yellow-500">BILLY</b>
              </h1>
              <h2 className="text-4xl  md:text-2xl">
                Front End <b className="text-blue-500">React</b> Developer
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="text-6xl text-center text-blue-800 md:text-4xl font-bold my-8">
            Technologies
          </h1>
          <div className="grid md:grid-cols-1 grid-cols-3">
            <FaHtml5
              size={180}
              color="red"
              className="w-full text-center mt-8 "
            />
            <FaJsSquare
              size={180}
              color="green"
              className="w-full text-center mt-8 animate-bounce"
            />
            <FaCss3
              size={180}
              color="orange"
              className="w-full text-center mt-8"
            />
            <FaReact
              size={180}
              color="cyan"
              className="w-full text-center mt-8 animate-spin"
            />
            <FaGit
              size={180}
              color="black"
              className="w-full text-center mt-8"
            />
            <FaPython
              size={180}
              color="purple"
              className="w-full text-center mt-8 animate-spin"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
