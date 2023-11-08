import { FormProvider, useForm } from "react-hook-form";
import BookingSection from "../../components/booking/BookingSection";
import { InputType } from "../../components/form/formInput";
import BaisicButton from "../../components/button/BaisicButton";

const userSectionFromData = [
  {
    formType: "input",
    subTitle: "이름",
    name: "name",
    placeholder: "이름을 입력해주세요",
    type: "text" as InputType,
    disabled: false,
    required: true,
  },
  {
    formType: "input",
    subTitle: "전화번호",
    name: "phoneNumber",
    placeholder: "전화번호를 입력해주세요",
    type: "number" as InputType,
    disabled: false,
    required: true,
  },
];
const bookingSectionFromData = [
  {
    formType: "input",
    subTitle: "업종",
    name: "business",
    placeholder: "자신의 업종을 입력해주세요.",
    type: "text" as InputType,
    disabled: false,
    required: true,
  },
  {
    formType: "date-range",
    subTitle: "희망 계약 기간",
    name: "period",
    placeholder: "ㅇㅇ",
    type: "number" as InputType,
    disabled: false,
    required: true,
  },
];
const businessSectionFromData = [
  {
    formType: "text-area",
    subTitle: null,
    name: "businessMemo",
    placeholder: "자신의 사업을 설명해주세요.",
    type: "text",
    disabled: false,
    required: true,
  },
];
const questionSectionFromData = [
  {
    formType: "text-area",
    subTitle: null,
    name: "question",
    placeholder: "사업장에 문의할 내용을 입력하세요.",
    type: "text",
    disabled: false,
    required: true,
  },
];
const CreateBookingPage = () => {
  const methods = useForm({ mode: "onChange" });

  return (
    <article className={`flex w-full flex-col gap-10`}>
      <section
        className={`flex w-full justify-center font-bold text-3xl pb-10 text-my-green basic-border-bottom`}
      >
        사업 계획서
      </section>

      <FormProvider {...methods}>
        <form>
          <BookingSection
            title={"이용자 정보"}
            data={userSectionFromData}
          ></BookingSection>
          <BookingSection
            title={"계약 정보"}
            data={bookingSectionFromData}
          ></BookingSection>
          <BookingSection
            title={"사업 정보"}
            data={businessSectionFromData}
          ></BookingSection>
          <BookingSection
            title={"문의사항"}
            data={questionSectionFromData}
          ></BookingSection>
        </form>
      </FormProvider>

      <div className={`w-full flex justify-center`}>
        <BaisicButton
          content={"접수하기"}
          color={"green"}
          type={"submit"}
          onClickEvent={methods.handleSubmit((result) => {
            console.log(result);
          })}
        ></BaisicButton>
      </div>
    </article>
  );
};

export default CreateBookingPage;
