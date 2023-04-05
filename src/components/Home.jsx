import "../index.css";
import Ui from "../assets/ui.png";
import Men from "../assets/img-to-home.png";
import { Header } from "./Header";
import { Faixa } from "./Faixa";

export const Home = () => {
  return (
    <>
      <Header />
      <main className="bg-background pt-12 flex w-full gap-5 items-center justify-around">
        <section>
          <img src={Ui} aria-hidden="true" />
        </section>
        <section>
          <img src={Men} aria-hidden="true" />
        </section>
        <section>
          <div>
            <p><span>+</span>150</p><p><span>HAPPY</span> STUDENTS</p>
          </div>
          <div>
            <p><span>+</span>50</p><p><span>CERTIFIED</span> COURSES</p>
          </div>
          <div>
            <p><span>+</span>1000</p>
            <p><span>AWARDS</span> RECEIVED</p>
            <div className="flex gap-5">
            <button className="text-white bg-violeta">LETS START</button>
            <button className="text-white">READ MORE</button>
            </div>
          </div>
        </section>
      </main>
      <Faixa/>
    </>
  );
};
