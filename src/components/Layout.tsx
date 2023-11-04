import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <article className={` bg-purple-100 min-h-screen flex flex-col`}>
      <Header></Header>
      <Outlet></Outlet>
    </article>
  );
};

export default Layout;
