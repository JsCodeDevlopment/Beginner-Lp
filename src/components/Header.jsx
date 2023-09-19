import "../index.css";
import Logo from "../assets/Your-Logo.png";
import Menu from "../assets/menu.png";
import { RightMenu } from "./Menu";

export const Header = () => {
  return (
    <div className="w-full z-10 h-12 bg-background fixed">
      <div className="flex items-center text-white text-xl p-3 justify-center gap-32">
        <a href="#Home">
          <img src={Logo} aria-hidden="true" className="w-30 h-5" />
        </a>
        <button className="inline-flex w-5 h-5 rounded ml-auto lg:hidden">
          <img src={Menu} aria-hidden="true" />
        </button>
        <a href="#Home" className="max-lg:hidden">HOME</a>
        <a href="#Courses" className="max-lg:hidden">COURSES</a>
        <a href="#About" className="max-lg:hidden">ABOUT</a>
        <a href="#Newsletter" className="max-lg:hidden">BLOG</a>
      </div>
      <>
        <RightMenu/>
      </>
    </div>
  );
};
