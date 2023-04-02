import "../index.css";
import Logo from "../assets/Your-Logo.png";
import Ui from "../assets/ui.png";
import Men from "../assets/img-to-home.png";

export const Home = () => {
  return (
    <div className="bg-background h-vh p-10 flex items-center justify-center">
      <img src={Logo} aria-hidden="true" />
      <img src={Ui} aria-hidden="true" />
      <img src={Men} aria-hidden="true" />
      <div>
        <h1>EDITION</h1>
        <h1>2022</h1>
      </div>
      <div>
        <h1>START GUIDE FOR BEGINNER DESIGNERS</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          aspernatur ipsa delectus? Iusto at voluptatum assumenda similique?
          Voluptas, iusto ad voluptatum voluptate fugit sapiente ex molestiae
          dolores, at, obcaecati delectus.
        </p>
        <button></button>
        <button></button>
      </div>
    </div>
  );
};
