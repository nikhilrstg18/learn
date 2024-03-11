import React from "react";
import Content from "../components/Content";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

export default function BookLayout({ children, content, sideMenu}) {
  return (
    <div>
      <NavBar></NavBar>
      <div
        style={{
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "space-between",
          alignItems: "stretch",
          width: "100%",
          height: "92vh",
        }}>
        <SideBar menu={sideMenu}></SideBar>
        <main style={{ flex: "1 auto", padding: ".5rem" }}>{children}</main>
        <Content content={content}></Content>
      </div>
    </div>
  );
}
