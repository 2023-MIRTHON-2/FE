import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { removeAccessTokenFromLocalStorage } from "../assets/api/token";
import { removeUserInfoFromLocalStorage } from "../assets/api/userInfo";

export default function Logout({ handleIsLogout }) {
  const handleClickLogout = () => {
    removeUserInfoFromLocalStorage();
    removeAccessTokenFromLocalStorage();
    handleIsLogout();
  };
  return (
    <div onClick={handleClickLogout}>
      <Link to="/">로그아웃</Link>
    </div>
  );
}
