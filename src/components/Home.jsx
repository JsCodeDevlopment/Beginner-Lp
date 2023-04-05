import "../index.css";
import Ui from "../assets/ui.png";
import Men from "../assets/img-to-home.png";
import { Header } from "./Header";
import { Faixa } from "./Faixa";


export const Home = (props) => {
  return (    
    <>
      <Header />
      <main className="bg-background pt-12 px-2.5 flex w-full gap-5 items-center justify-around flex-wrap">
        <section>
          <img src={Ui} aria-hidden="true" />
        </section>
        <section>
          <img src={Men} aria-hidden="true" />
        </section>
        <section className="flex flex-col w-72 justify-center">
          <h1 className="text-white text-xl font-semibold">START GUIDE FOR BEGINNER DESIGNERS</h1>
          <p className="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam soluta
            esse harum facere qui alias, excepturi.
          </p>
          <div className="flex gap-5 justify-center">
            <button className="text-white text-xs bg-violeta p-2">LETS START</button>
            <button className="text-white text-xs p-1">READ MORE</button>
          </div>
        </section>
      </main>
      <Faixa />
    </>
  );
};
