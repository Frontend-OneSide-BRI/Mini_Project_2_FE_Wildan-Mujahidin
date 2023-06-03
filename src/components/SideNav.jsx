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
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
      <div className="flex flex-col w-full">
        <div className="flex justify-between w-full align-middle items-center px-8 py-5">
          <GiHamburgerMenu size={30} onClick={() => setToggled(!toggled)} />
          <img src={logo} width={"120rem"} alt="" />
          <div className="flex items-center gap-3">
            <IoMdCart size={18} />
            <FaUserAlt size={13} />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
