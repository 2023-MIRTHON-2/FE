import React from "react";
import ArrowLeft from "../../assets/svg/ArrowLeft";
import CommunicationIcon from "../../assets/svg/CommunicationIcon";
import { useNavigate } from "react-router-dom";

const PlaceDetailPage = () => {
  const navigate = useNavigate();
  return (
    <article className={`bg-purple-200`}>
      <section
        className={`flex w-full text-my-green justify-between items-center basic-boder-bottom px-3 pb-5`}
      >
        <div
          className={`flex gap-2 items-center cursor-pointer`}
          onClick={() => navigate("/place/list")}
        >
          <ArrowLeft />
          <div className={`font-bold text-3xl`}>사업장 이름</div>
        </div>
        <div className={`flex gap-2 items-center`}>
          <CommunicationIcon />
          <div className={`font-bold text-xl`}>사업자와 채팅</div>
        </div>
      </section>
      <section></section>
      <section>달력</section>
    </article>
  );
};

export default PlaceDetailPage;
