import React from "react";

export default function MyPlans() {
  return (
    <div className="px-10 py-6 border-2 shadow-md rounded-3xl">
      <div className="flex justify-between items-center">
        <h1>2023-11-11 ~ 2023-11-30</h1>
        <h2 className="underline mr-8">더보기</h2>
      </div>
      <div className="mt-6 flex justify-between items-center font-bold text-xl">
        <h1 className="ml-3 w-[50%] border-r-[1px] border-black">
          멋쟁이 사자 해커톤
        </h1>
        <h2 className="w-[40%]">한명수</h2>
      </div>
    </div>
  );
}
