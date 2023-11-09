import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserInfoFromLocalStorage } from "../assets/api/userInfo";
import { logo } from "../assets/images";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(false);
  const initialUserInfo = getUserInfoFromLocalStorage();
  useEffect(() => {
    const storedUserInfo = getUserInfoFromLocalStorage();
    if (storedUserInfo) {
      setIsLoggedIn(true);
    }
  }, [initialUserInfo]);

  return (
    <header
      className="w-1/1 py-1 px-20 lg:px-60 flex justify-between items-center shadow-md bg-white"
      style={{ height: "var(--height-header)" }}
    >
      <div>
        <Link to="/">
          <img
            className="image-quality-improve"
            src={logo.header}
            alt="바로여기 로고"
          />
        </Link>
      </div>
      <div>
        <button className="mr-10">
          <Link to="/place/list">공유공간 찾기</Link>
        </button>
        <button>
          {isLoggedIn ? (
            <Link to="/">로그아웃</Link>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </button>
      </div>
    </header>
  );
}
