import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCart } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import logo from "../assets/logo.svg";

export const SideNav = ({ children }) => {
  const [collapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar
        collapsed={collapsed}
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        breakPoint="all"
      >
        <Menu>
          <SubMenu label="CREATIVE">
            <MenuItem> Collections </MenuItem>
            <MenuItem> Project #ShowUs </MenuItem>
            <MenuItem> Creative Insights </MenuItem>
          </SubMenu>
          <MenuItem> EDITORIAL </MenuItem>
          <SubMenu label="VIDEO">
            <MenuItem> BBC Motion Gallery </MenuItem>
            <MenuItem> NBC News Archives </MenuItem>
          </SubMenu>
          <MenuItem> MUSIC </MenuItem>
          <MenuItem> BLOG </MenuItem>
        </Menu>
      </Sidebar>
      <div className="flex flex-col w-full overflow-x-hidden">
        <div className="flex justify-between w-full align-middle items-center px-8 py-5 border-b">
          <GiHamburgerMenu size={30} onClick={() => setToggled(!toggled)} />
          <img src={logo} width={"120rem"} alt="" />
          <div className="flex items-center gap-3">
            <IoMdCart size={18} />
            <FaUserAlt
              size={13}
              onClick={() => window.my_modal_1.showModal()}
            />
          </div>
        </div>
        {children}
      </div>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg text-center">Login Success</h3>
          <div className="modal-action">
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};
