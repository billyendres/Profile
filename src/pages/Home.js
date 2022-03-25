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
        <div className="mt-20">
          <h1 className="text-6xl text-center text-black md:text-4xl font-bold my-8 uppercase">
            Technologies
          </h1>
          <div className="grid md:grid-cols-1 grid-cols-3">
            <FaHtml5
              size={120}
              color="red"
              className="w-full text-center mt-8 "
            />
            <FaJsSquare
              size={120}
              color="green"
              className="w-full text-center mt-8"
            />
            <FaCss3
              size={120}
              color="orange"
              className="w-full text-center mt-8"
            />
            <FaReact
              size={120}
              color="cyan"
              className="w-full text-center mt-8"
            />
            <FaGit
              size={120}
              color="black"
              className="w-full text-center mt-8"
            />
            <FaPython
              size={120}
              color="purple"
              className="w-full text-center mt-8"
            />
          </div>
          <div className="my-20">
            <div className="text-center h-52 bg-cyan-400 flex justify-center items-center">
              <h1 className="text-white font-bold text-4xl md:text-3xl mb-16 uppercase">
                Specialising in React and Web3.0
              </h1>
            </div>
            <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 hover:bg-github -mt-20 rounded-xl py-16  hover:text-white transition ease-in-out delay-300 duration-500">
              <div className="h-96 ">
                <lottie-player
                  src="https://assets1.lottiefiles.com/packages/lf20_kyu7xb1v.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <p className="text-2xl md:text-1xl text-center my-5 font-semibold md:px-5 px-14">
                Javascript, react, web3, trading derivatives, investment <br />
                analysis, nextJS, CSS, HTML, Python, MatplotLib, Pandas, NumPy
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
