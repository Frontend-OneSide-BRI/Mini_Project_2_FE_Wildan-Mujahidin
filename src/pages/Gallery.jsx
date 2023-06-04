import React from "react";
import { Layout } from "../components/Layout";
import { Footer } from "../components/Footer";
import { SideNav } from "../components/SideNav";
import { BiSearch } from "react-icons/bi";
import { NavbarGallery } from "../components/Navbar1";
import { Navbar2 } from "../components/Navbar2";
export const Gallery = () => {
  return (
    <Layout>
      <SideNav>
        <NavbarGallery />
        <img src="../assets/images/gallery/GettyImages-1058990992.jpg" alt="" />
        <div className="bg-[#F7DEEB] md:p-10">
          <p className="w-full h-28 flex items-center justify-center text-3xl">
            Move the world
          </p>
          <div className="relative flex justify-center ">
            <div>
              <BiSearch className="absolute top-4 ml-6" size={25} />
            </div>
            <input
              type="text"
              className="w-full md:w-[58rem] h-14 bg-white pl-20 border border-black"
              placeholder="Search the world’s best creative photos and images"
            />
          </div>
        </div>

        <Navbar2 />

        <Footer />
      </SideNav>
    </Layout>
  );
};
