import React from "react";
import { Link } from "react-router-dom";

export default function MyPage() {
  return (
    <section className="py-10 flex flex-col items-center">
      <div className="relative border-2 pb-20 w-full">
        <h1 className="font-bold text-4xl text-center"> 마이 페이지</h1>
        <Link to="#">
          <span className="absolute bottom-0 right-0 underline">수정하기</span>
        </Link>
      </div>
    </section>
  );
}
