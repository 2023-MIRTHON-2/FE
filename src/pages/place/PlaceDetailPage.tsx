import ArrowLeft from "../../assets/svg/ArrowLeft";
import CommunicationIcon from "../../assets/svg/CommunicationIcon";
import { useNavigate } from "react-router-dom";
import ChipWrap from "../../components/category/ChipWrap";
import { convertCategoryList } from "../../assets/functions/place";
import BaisicButton from "../../components/button/BaisicButton";

const PlaceDetailPage = () => {
  const navigate = useNavigate();
  const palce = {
    imgs: ["/"],
    desc: "소개를 해보겠습니다.",
    business: convertCategoryList("business", ["food"], "KOR"),
    location: convertCategoryList("location", ["shinchon"], "KOR"),
    pay: 10000,
  };
  return (
    <article className={``}>
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

      <section className={`flex gap-9 py-[4rem] px-7 basic-boder-bottom`}>
        <div className={`flex flex-col w-fit gap-6`}>
          <div
            className={`felx flex-grow h-[27.5rem] rounded-2xl bg-gray-300`}
          ></div>
          <div className={`flex gap-4`}>
            {[0, 1, 2, 3].map((imgIndex) => (
              <div className={`w-32 h-32  rounded-2xl bg-gray-300`}>
                {palce.imgs[imgIndex] ? palce.imgs[imgIndex] : "ㅎㅎ"}
              </div>
            ))}
          </div>
        </div>

        <div className={`flex flex-col flex-grow gap-8`}>
          <div
            className={`rounded-xl w-full h-[11rem] p-4`}
            style={{ boxShadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.25)" }}
          >
            {palce.desc}
          </div>
          <div className={`flex items-center gap-[2.75rem]`}>
            <div className={`font-bold text-2xl`}>업종</div>
            <ChipWrap
              filteringList={palce.business}
              type={"business"}
            ></ChipWrap>
          </div>
          <div className={`flex items-center gap-[2.75rem]`}>
            <div className={`font-bold text-2xl`}>지역</div>
            <ChipWrap
              filteringList={palce.location}
              type={"location"}
            ></ChipWrap>
          </div>
          <div className={`w-full flex justify-between`}>
            <div className={`font-bold text-2xl`}>월 임대료</div>
            <div className={`flex gap-2 items-baseline pt-8`}>
              <span className={`text-xl`}>월</span>
              <span className={`font-bold text-2xl`}>{palce.pay}</span>
              <span className={`text-xl`}>원</span>
            </div>
          </div>
          <div className={`flex justify-end`}>
            <BaisicButton
              content={"사업 계획서 제출하기"}
              color={"red"}
              type={"button"}
              onClickEvent={() => console.log("page 이동")}
            ></BaisicButton>
          </div>
        </div>
      </section>
      <section>달력</section>
    </article>
  );
};

export default PlaceDetailPage;
