import React from "react";
import { Layout } from "../components/Layout";
import { Footer } from "../components/Footer";
import { SideNav } from "../components/SideNav";
import { NavbarHome } from "../components/Navbar1";
import SimpleSlider from "../components/SimpleSlider";
import { dataImages } from "../database/images";
export const Homepage = () => {
  return (
    <Layout>
      <SideNav>
        <img src="../assets/images/gallery/GettyImages-1058990992.jpg" alt="" />
        <div className="bg-[#F7DEEB] md:p-10">
          <p className="w-full h-28 flex items-center justify-center text-3xl">
            Move the world
          </p>
        </div>
        <NavbarHome />

        <SimpleSlider />

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-[-1rem]">
          {dataImages.map((data) => {
            return (
              <div className="relative overflow-hidden album" key={data.id}>
                <img src={data.img} alt={data.category} />
              </div>
            );
          })}
        </div>

        <Footer />
      </SideNav>
    </Layout>
  );
};
