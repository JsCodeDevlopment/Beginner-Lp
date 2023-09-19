import React from "react";
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

export function RightMenu() {
  return (
    <div className="relative bottom-2 block text-white text-xl ">
      <ul className="flex flex-col justify-evenly pl-2 bg-background w-96 h-96 z-50 relative top-0 left-3/4 max-[500px]:left-80 max-[434px]:left-40">
        {links.map((link) => (
          <li key={link.text} className="relative hover:before:absolute hover:before:bg-violeta hover:before:w-32 hover:before:h-1 hover:before:top-6">
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
