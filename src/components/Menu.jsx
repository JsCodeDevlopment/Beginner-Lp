import React from "react";
const links = [
  {
    text: "HOME",
    href: "#home",
  },
  {
    text: "COURSE",
    href: "#course",
  },
  {
    text: "ABOUT",
    href: "#about",
  },
  {
    text: "BLOG",
    href: "#blog",
  },
];

export function RightMenu() {
  return (
    <div className="relative bottom-2 block text-white text-xl ">
      <ul className="flex flex-col justify-evenly pl-2 bg-background w-80 h-96 z-50 relative top-0 left-3/4">
        {links.map((link) => (
          <li key={link.text} className="relative hover:before:absolute hover:before:bg-violeta hover:before:w-32 hover:before:h-2 hover:before:top-6">
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
