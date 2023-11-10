import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { createContext, useEffect, useState } from "react";
import { getUserInfoFromLocalStorage } from "../assets/api/userInfo";

const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(false);
  interface UserInfo {
    id: number;
    is_ceo: boolean;
    realname: string;
    username: string;
  }
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  useEffect(() => {
    console.log("렌더링!");
    const userInfo = getUserInfoFromLocalStorage();
    if (userInfo) {
      setIsLoggedIn(true);
      setUserInfo(userInfo);
    } else {
      setIsLoggedIn(false);
      setUserInfo(null);
    }
  }, [isLoggedIn]);
  function handleIsLoggedIn() {
    setIsLoggedIn(true);
  }
  function handleIsLogout() {
    setIsLoggedIn(false);
  }
  return (
    <article className={`w-screen min-h-screen flex flex-col `}>
      <Header
        isCEO={userInfo?.is_ceo}
        isLoggedIn={isLoggedIn}
        handleIsLogout={handleIsLogout}
      ></Header>
      <article className={`px-[10%] py-20`}>
        <Outlet context={{ isLoggedIn, handleIsLoggedIn, userInfo }} />
      </article>
      <Footer />
    </article>
  );
};

export default Layout;
