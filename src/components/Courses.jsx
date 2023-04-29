import edition from "../assets/Edition.png";
import { ButtonViolet } from "./Button";

function CourseCards({ number }) {
  return (
    <div className="flex flex-col gap-4 p-3 w-64 h-80 border-4 border-white justify-center items-center">
      <div className="flex gap-3">
        <p className="text-white text-5xl font-extrabold">COURSE</p>
        <span className="text-violeta text-5xl font-extrabold">{number}</span>
      </div>
      <div>
        <p className="text-violeta">_______</p>
      </div>
      <p className="text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam soluta
        esse harum facere qui alias, excepturi.
      </p>
      <ButtonViolet name={"READ MORE"} />
    </div>
  );
}

export function Courses() {
  return (
    <div className="flex w-full h-vh flex-col bg-background">
      <div className="flex p-10 gap-2 justify-between">
        <p className="text-white text-5xl font-extrabold">
          FIND{" "}
          <span className="text-violeta text-xl font-extralight">
            Your Course.
          </span>
        </p>
        <img src={edition} aria-hidden="true" />
      </div>

      <div className="flex flex-wrap gap-3 p-3 justify-evenly">
        
      <CourseCards number={1} />
      <CourseCards number={2} />
      <CourseCards number={3} />
      <CourseCards number={4} />
      </div>
    </div>
  );
}
