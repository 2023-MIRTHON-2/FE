import { Link } from "../../node_modules/react-router-dom/dist/index";
import { IMG_PATH } from "../constants/path";
export default function Header() {
  return (
    <header className="w-1/1 py-1 px-20 lg:px-60 flex justify-between items-center shadow-md">
      <div>
        <img
          className="image-quality-improve"
          src={IMG_PATH.HEADER_LOGO}
          alt="바로여기 로고"
        />
      </div>
      <div>
        <button className="mr-10">
          <Link to="places">공유공간 찾기</Link>
        </button>
        <button>로그인</button>
      </div>
    </header>
  );
}
