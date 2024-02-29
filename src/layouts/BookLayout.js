import React from "react";
import NavBar from "../components/NavBar";

export default function BookLayout({ children }) {
  return (
    <div>
      <NavBar></NavBar>
      <div>placeholder for side nav</div>
      <main>{children}</main>
    </div>
  );
}
