import React from "react";
import { Slide } from "react-awesome-reveal";

import "./styles.scss";

export const Menu = () => {
  return (
    <>
      <Slide direction="right">
        <aside className="aside">
          <div className="aside__container flex flex-col items-end"></div>
        </aside>
      </Slide>
    </>
  );
};
