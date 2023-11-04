import React, { useState } from "react";
// import Page from "../../components/Page";

const PlaceListPage = () => {
  const [filteringList, setFilteringList] = useState([]);
  const [placeList, setPlaceList] = useState([]);

  return (
    <article className={`flex justify-center flex-col items-center`}>
      <section
        className={`w-full flex flex-col items-center gap-4 basic-boder-bottom p-[1.8125rem]`}
      >
        <div className={`font-bold text-[2.5rem]`}>공유 공간 찾기</div>
        <div>조건에 맞는 공유공간을 확인할 수 있습니다.</div>
      </section>
      <section>filtering</section>
      <section>list</section>
    </article>
  );
};

export default PlaceListPage;
