import "../index.css";
import Logo from "../assets/Your-Logo.png";
import Menu from "../assets/menu.png";
import CloseMenu from "../assets/close-menu.png";
import { RightMenu } from "./Menu";
import { useState } from "react";

const links = [
  {
    text: "HOME",
    href: "#Home",
  },
  {
    text: "COURSE",
    href: "#Courses",
  },
  {
    text: "ABOUT",
    href: "#About",
  },
  {
    text: "BLOG",
    href: "#Newsletter",
  },
];

export const Header = () => {
  const [menuVisible, setmenuVisible] = useState(false);

  return (
    <div className="w-full z-10 h-12 bg-background fixed">
      <div className="flex items-center text-white text-xl p-3 justify-center gap-32">
        <a href="#Home">
          <img src={Logo} aria-hidden="true" className="w-30 h-5" />
        </a>
        <img
          className="inline-flex w-5 h-5 rounded ml-auto lg:hidden"
          src={menuVisible ? CloseMenu : Menu}
          aria-hidden="true"
          onClick={() => setmenuVisible(!menuVisible)}
        />

        {links.map((link) => (
          <li
            key={link.text}
            className="max-lg:hidden list-none relative hover:before:absolute hover:before:bg-violeta hover:before:w-20 hover:before:h-1 hover:before:top-6"
          >
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </div>
      <>{menuVisible ? <RightMenu /> : <></>}</>
    </div>
  );
};
