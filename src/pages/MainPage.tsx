import React from "react";
import Header from "../components/Header";

export default function MainPage() {
  return (
    <div class="min-h-screen">
      <Header />
      <main class="min-w-full min-h-screen  flex-row px-20 lg:px-60">
        <section class="min-w-full min-h-max py-32">
          <div class="text-3xl font-bold">
            <h1>가게 휴무일, 영업시간 전에</h1>
            <h1 class="mt-5">미리 사업 해보세요!</h1>
          </div>
          <div class="mt-5 relative flex justify-center items-center">
            <h1 class="absolute top-[calc(50%-100px)] left-[calc(50%-160px)] text-5xl font-bold text-[#11434A]">
              Open
            </h1>
            <h1 class="absolute top-[calc(50%+50px)] left-[calc(50%+60px)] text-5xl font-bold text-[#FF6550]">
              Close
            </h1>
            <img
              class="main-logo-rotate-animation"
              src="src/img/main-logo.png"
              alt="메인 로고"
            />
          </div>
        </section>
        <section></section>
      </main>
    </div>
  );
}
