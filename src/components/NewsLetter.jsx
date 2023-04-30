import { ButtonViolet } from "./Button";

export function NewsLetter() {
  return (
    <div
      className="flex h-screen w-full justify-end px-10 bg-background flex-wrap gap-10 items-center"
      style={{
        backgroundImage:
          "url('https://cdn.discordapp.com/attachments/303213411544596481/1102030765820219452/background.png')",
      }}
    >
      <div className="flex w-80 flex-col gap-10 items-center justify-center">
        <div className="flex flex-col gap-5">
          <p className="text-white text-5xl font-extrabold">SUBSCRIBE</p>
          <span className="text-violeta text-xl font-extralight">
            To Our Newsletter.
          </span>
          <p className="text-white text-lg font-extralight">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            repellendus nostrum vero provident nulla, necessitatibus id deserunt
            fuga non nemo aliquid quos laudantium eum fugiat nam facilis officia
            asperiores. Facere.
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center">
          <input type="email" placeholder="Email" className="bg-background border-2 border-violeta w-72 focus:bg-white" />
          <input type="text" placeholder="First name" className="bg-background border-2 border-violeta w-72 focus:bg-white" />
        </div>
        <div className="flex items-center justify-center">
          <ButtonViolet name={"SEND"} />
        </div>
      </div>
    </div>
  );
}
