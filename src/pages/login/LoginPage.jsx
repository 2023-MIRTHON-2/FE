import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginButton from "../../components/button/LoginButton";
import FormInput from "../../components/form/FormLogin";

export default function LoginPage() {
  const [login, setLogin] = useState({
    id: "",
    password: "",
  });

  const handleLogin = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  return (
    <section className="flex flex-col items-center">
      <div className="py-10">
        <h1 className="font-extrabold text-4xl">로그인</h1>
      </div>
      <form className="flex flex-col w-[400px] py-6">
        <FormInput
          type={"text"}
          id={"id"}
          label={"아이디"}
          value={login.id}
          onChange={handleLogin}
        />
        <FormInput
          type={"password"}
          id={"password"}
          label={"비밀번호"}
          value={login.password}
          onChange={handleLogin}
        />
        <div className="mt-10 w-[100%] flex justify-end">
          <LoginButton color="blue" content="로그인" size="w-[75%]" />
        </div>
      </form>
      <div className="py-10 flex text-my-green">
        <span>바로 여기의 회원이 아니신가요?</span>
        <h1 className="ml-6 underline">
          <Link to="/join">회원가입</Link>
        </h1>
      </div>
    </section>
  );
}
