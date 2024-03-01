import React from "react";
import Content from "../components/Content";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function BookLayout({ children }) {
  return (
    <div>
      <NavBar></NavBar>
      <div style={{display:'flex',flexFlow:'row wrap', justifyContent: 'space-between', alignItems: 'stretch', width:'100%', height:'92vh'}}>
        <SideBar></SideBar>
        <main style={{flex:'1 auto', padding:'.5rem'}}>{children}</main>
        <Content></Content>
      </div>
    </div>
  );
}
