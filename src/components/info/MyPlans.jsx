import React from "react";

export default function MyPlans({
  id,
  renterId,
  placeId,
  startDate,
  endDate,
  ceoId,
}) {
  return (
    <div className="px-10 py-6 border-2 shadow-md rounded-3xl">
      <div className="flex justify-between items-center">
        <h1>
          {startDate} ~ {endDate}
        </h1>
      </div>
      <div className="mt-6 flex justify-between items-center font-bold text-xl">
        <h1 className="ml-3 w-[40%] border-r-[1px] border-black">{ceoId}</h1>
        <h2 className="w-[20%]">공간이용자</h2>
        <h2 className="w-[30%] tracking-wider font-semibold">{renterId}</h2>
      </div>
    </div>
  );
}
