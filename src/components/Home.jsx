import "../index.css";
import Ui from "../assets/ui.png";
import Men from "../assets/img-to-home.png";
import { Header } from "./Header";


export const Home = () => {
  return (    
    <>
      <Header />
      <main id="Home" className="bg-background pt-12 px-2.5 flex w-full gap-5 items-center justify-around flex-wrap max-lg:py-10 max-sm:pt-14">
        <section>
          <img src={Ui} aria-hidden="true" />
        </section>
        <section>
          <img src={Men} aria-hidden="true" />
        </section>
        <section className="flex flex-col w-72 gap-3 justify-center">
          <h1 className="text-white text-xl font-semibold">START GUIDE FOR BEGINNER DESIGNERS</h1>
          <p className="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam soluta
            esse harum facere qui alias, excepturi.
          </p>
          <div className="flex gap-5 justify-center">
            <button className="text-white text-xs scale-105 z-0 bg-violeta p-2">LETS START</button>
            <button className="text-white text-xs p-1">READ MORE</button>
          </div>
        </section>
      </main>
    </>
  );
};
