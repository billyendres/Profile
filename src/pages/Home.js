import React from "react";
import Layout from "../components/Layout";
import profileImg from "../images/profileImage.jpg";

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
      </div>
    </Layout>
  );
};

export default Home;
