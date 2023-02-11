import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { CryptoProvider } from "../context/CryptoContext";

const Home = () => {
  return (
    <CryptoProvider>
      <main className="w-full h-full flex flex-col content-center items-center relative text-white font-nunito">
        <div className="bg-gray-300 fixed w-screen h-screen -z-10" />
        <Logo />
        <Navigation />
        <Outlet />
      </main>
    </CryptoProvider>
  );
};

export default Home;
