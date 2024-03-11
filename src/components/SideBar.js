import { Link } from "gatsby";
import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

export default function SideBar({ menu }) {
  const sideBarDiv ={
    minWidth: "20%",
    maxWidth: "25%",
    fontSize: "14px",
    boxShadow: `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px`,
  }
  const menuTitle = {textAlign:'center', fontSize : '2rem', margin:'.5rem'}
  const isSectionMenu =
    menu.filter((x) => x.relativeDirectory.includes("/")).length > 0;
  return (
    <div
      style={sideBarDiv}>
      <p style={menuTitle}>📖</p>
      <Sidebar width="100%">
        <Menu>
          {isSectionMenu
            ? menu.map((item) => (
                <SubMenu
                  label={
                    isSectionMenu
                      ? item.relativeDirectory.toUpperCase()
                      : item.name.toUpperCase()
                  }>
                  <MenuItem key={item.id}>
                    <Link to={item.name}>{item.name.toUpperCase()}</Link>{" "}
                  </MenuItem>
                </SubMenu>
              ))
            : menu.map((item) => (
                <MenuItem key={item.id}>
                  <Link to={item.name}>{item.name.toUpperCase()}</Link>{" "}
                </MenuItem>
              ))}
        </Menu>
      </Sidebar>
    </div>
  );
}
