import Man from "../assets/img-to-about.png";
import { ButtonViolet } from "./Button";

export function About() {
  return (
    <div
      className="flex h-screen w-full justify-evenly bg-background flex-wrap gap-10 items-center"
      style={{
        backgroundImage:
          "url('https://cdn.discordapp.com/attachments/303213411544596481/1101998228091699220/Circle_1_copiar.png')",
      }}
    >
      <div className="flex w-80 h-80 gap-8 py-10 flex-wrap">
        <p className="text-white text-5xl font-extrabold">
          ABOUT{" "}
          <span className="text-violeta text-xl font-extralight">Us.</span>
        </p>
        <p className="text-white text-lg font-extralight">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            repellendus nostrum vero provident nulla, necessitatibus id deserunt
            fuga non nemo aliquid quos laudantium eum fugiat nam facilis officia
            asperiores. Facere.
          </p>
          <ButtonViolet name={"READ MORE"}/>
      </div>
      <div className="">
        <img className="w-80" src={Man} aria-hidden="true" />
      </div>
    </div>
  );
}
