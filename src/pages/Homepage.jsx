import React from "react";
import { Layout } from "../components/Layout";
import { Footer } from "../components/Footer";
import { SideNav } from "../components/SideNav";

export const Homepage = () => {
  return (
    <Layout>
      <SideNav>
        <div className="">Gallery</div>
        <img src="../assets/images/gallery/GettyImages-1058990992.jpg" alt="" />
        <Footer></Footer>
      </SideNav>
    </Layout>
  );
};
