import "../index.css";
import Logo from "../assets/Your-Logo.png";
import Ui from "../assets/ui.png";
import Men from "../assets/img-to-home.png";

export const Home = () => {
  return (
    <div className="bg-background h-vh px-2 py-16 flex  items-center flex-col">
      <img src={Logo} aria-hidden="true" />
      <div className="flex items-center w-full justify-between gap-3">
        <img src={Ui} aria-hidden="true" />
        <img src={Men} aria-hidden="true" />
        <div className="w-1/5">
          <div className="flex flex-col items-center justify-end">
            <h1 className="text-white">EDITION</h1>
            <h1 className="text-white">2022</h1>
          </div>
          <div className="flex flex-col w-1/5 flex-wrap gap-2">
            <h1 className="text-white">START GUIDE FOR BEGINNER DESIGNERS</h1>
            <p className="text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              aspernatur ipsa delectus? Iusto at voluptatum assumenda similique?
              Voluptas, iusto ad voluptatum voluptate fugit sapiente ex
              molestiae dolores, at, obcaecati delectus.
            </p>
            <div>
            <button className="text-white bg-violeta">LETS START</button>
            <button className="text-white">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
