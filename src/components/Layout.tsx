import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { createContext, useEffect, useState } from "react";
import { getUserInfoFromLocalStorage } from "../assets/api/userInfo";

const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(false);
  useEffect(() => {
    const userInfo = getUserInfoFromLocalStorage();
    if (userInfo) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  function handleIsLoggedIn() {
    setIsLoggedIn(true);
  }
  function handleIsLogout() {
    setIsLoggedIn(false);
  }
  return (
    <article className={`w-screen min-h-screen flex flex-col `}>
      <Header isLoggedIn={isLoggedIn} handleIsLogout={handleIsLogout}></Header>
      <article className={`px-[10%] py-20`}>
        <Outlet context={{ isLoggedIn, handleIsLoggedIn }} />
      </article>
      <Footer />
    </article>
  );
};

export default Layout;
