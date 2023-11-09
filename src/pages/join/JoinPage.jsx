import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import { JoinImg } from "../../assets/images";
import LoginButton from "../../components/button/LoginButton";

export default function JoinPage() {
  const navigate = useNavigate();
  return (
    <section className="">
      <div className="py-10 text-center">
        <h1 className="font-extrabold text-4xl">회원가입</h1>
      </div>
      <div className="py-10 flex justify-center border-2">
        <div className="flex flex-col items-center mr-[15%]">
          <img src={JoinImg.storeGreen} />
          <p className="mt-4 text-center text-2xl text-my-green tracking-wider">
            <span className="font-extrabold mr-1">바로 여기</span>와 함께
            <h1 className="mt-2">내 가게를 활용해 보세요</h1>
          </p>
          <div className="mt-16">
            <LoginButton
              content={"사업자 회원가입"}
              color={"blue"}
              onClickEvent={() => navigate("/join/ceo")}
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img className="mt-8" src={JoinImg.storeRed} />
          <p className="mt-4 text-center text-2xl text-my-red tracking-wider">
            <span className="font-extrabold mr-1">바로 여기</span>와 함께
            <h1 className="mt-2">창업을 준비해 보세요</h1>
          </p>
          <div className="mt-16">
            <LoginButton
              content={"공간 이용자 회원가입"}
              color={"red"}
              onClickEvent={() => navigate("/join/user")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
