import { Link } from "gatsby";
import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

export default function SideBar({ menu }) {
  const sideBarDiv = {
    minWidth: "20%",
    maxWidth: "25%",
    fontSize: "14px",
    boxShadow: `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px`,
  };
  const menuTitle = { textAlign: "center", fontSize: "2rem", margin: ".5rem" };
  const isSectionMenu =
    menu.filter((x) => x.relativeDirectory.includes("/")).length > 0;

  function toSectionMenu(input) {
    const output = [];

    // Create an object to store sections
    const sections = {};

    // Group elements by relativeDirectory
    input.forEach((item) => {
      const section = item.relativeDirectory;
      if (!sections[section]) {
        sections[section] = [];
      }
      sections[section].push({ id: item.id, name: item.name });
    });

    // Convert grouped sections into desired output format
    for (const section in sections) {
      output.push({
        section: section,
        menu: sections[section],
      });
    }

    return output;
  }

  function titleCase(str) {
    return str.split("_").join(" ").toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
  }
  const sectionMenu = toSectionMenu(menu);
  return (
    <div style={sideBarDiv}>
      <p style={menuTitle}><Link to="./../">📖</Link></p>
      <Sidebar width="100%" defaultCollapsed={true}>
        <Menu>
          {isSectionMenu
            ? sectionMenu.map((item) => (
                <SubMenu label={titleCase(item.section)}>
                  {item?.menu?.map((m) => (
                    <MenuItem key={m.id}>
                      <Link to={m.name}>{titleCase(m.name)}</Link>{" "}
                    </MenuItem>
                  ))}
                </SubMenu>
              ))
            : menu.map((item) => (
                <MenuItem key={item.id}>
                  <Link to={item.name}>{titleCase(item.name)}</Link>{" "}
                </MenuItem>
              ))}
        </Menu>
      </Sidebar>
    </div>
  );
}
