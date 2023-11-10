import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import Divider from "../../components/Divider";

export default function MyPage() {
  const { userInfo } = useOutletContext();
  const color = userInfo.is_ceo ? "my-green" : "my-light-red";

  return (
    <section className={`flex flex-col items-center py-10 text-${color}`}>
      <div className="relative pb-20 w-full">
        <h1 className="font-bold text-4xl text-center"> 마이 페이지</h1>
        <Link to="#">
          <span className="absolute bottom-0 right-[7%] underline">
            수정하기
          </span>
        </Link>
      </div>
      <Divider color={color} />
      <div className="w-[50%] py-10  font-semibold text-xl">
        <div className="flex justify-between py-3">
          <div className={`w-[30%] border-r-[0.5px] border-${color}`}>이름</div>
          <div className="w-[50%] font-light">{userInfo.realname}</div>
        </div>
        <div className="flex justify-between py-3">
          <div className={`w-[30%] border-r-[0.5px] border-${color}`}>
            전화번호
          </div>
          <div className="w-[50%] font-light">{userInfo.phone}</div>
        </div>
        <div className="flex justify-between py-3">
          <div className={`w-[30%] border-r-[0.5px] border-${color}`}>
            아이디
          </div>
          <div className="w-[50%] font-light">{userInfo.username}</div>
        </div>
      </div>
    </section>
  );
}
