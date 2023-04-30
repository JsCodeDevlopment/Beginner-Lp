import User1 from "../assets/User1.png";
import User2 from "../assets/User2.png";
import User3 from "../assets/User3.png";

export function Comentarios() {
  return (
    <div className="flex bg-background gap-5 h-auto w-full flex-col justify-around items-center">
      <div className="flex flex-col justify-start items-center">
        <p className="text-white text-5xl font-extrabold">WHAT</p>
        <span className="text-violeta text-xl font-extralight">
          Users Think.
        </span>
      </div>
      <div className="flex flex-wrap gap-10">
        <img className="w-30 h-80" src={User1} aria-hidden='true' />
        <img className="w-30 h-80" src={User2} aria-hidden='true' />
        <img className="w-30 h-80" src={User3} aria-hidden='true' />
      </div>
    </div>
  );
}
