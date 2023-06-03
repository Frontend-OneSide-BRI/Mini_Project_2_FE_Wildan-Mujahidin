import React from "react";
import { Layout } from "../components/Layout";
import { Footer } from "../components/Footer";
import { SideNav } from "../components/SideNav";
import { BiSearch } from "react-icons/bi";
import { Navbar1 } from "../components/Navbar1";

export const Homepage = () => {
  return (
    <Layout>
      <SideNav>
        <img src="../assets/images/gallery/GettyImages-1058990992.jpg" alt="" />
        <div className="bg-[#F7DEEB]">
          <p className="w-full h-28 flex items-center justify-center text-3xl">
            Move the world
          </p>
          <div className="relative">
            <BiSearch className="absolute top-4 ml-6" size={25} />
            <input
              type="text"
              className="w-full h-14 bg-white pl-20 border border-black"
              placeholder="Search the world’s best creative photos and images"
            />
          </div>
        </div>

        <Navbar1 />
        <Footer />
      </SideNav>
    </Layout>
  );
};
