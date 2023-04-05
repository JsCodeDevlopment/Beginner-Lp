import "../index.css";
import Logo from "../assets/Your-Logo.png";


export const Header = () => {
  return (
    <div className="w-full h-12 bg-background fixed">
      <ul className="flex items-center text-white text-xl p-3 justify-center gap-32">
        <li><a href="#"><img src={Logo} aria-hidden="true" /></a></li>
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">COURSES</a></li>
        <li><a href="#">BLOG</a></li>
      </ul>
    </div>
  );
};
