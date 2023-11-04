// import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <article className={`w-screen min-h-screen flex flex-col `}>
      <Header></Header>
      <article className={`px-[10%] py-20`}>
        <Outlet></Outlet>
      </article>
    </article>
  );
};

export default Layout;
