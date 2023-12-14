import logo from "@assets/logo_white.svg";
import { BeatLoader } from "react-spinners";

import "./styles.scss";

export const Loader = () => {
  return (
    <div className="loader flex flex-col items-center justify-center">
      <img src={logo} className="loader__logo" alt="Logotype" />
      <BeatLoader size={20} color="white" className="mt-16" />
    </div>
  );
};
