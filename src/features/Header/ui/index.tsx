import React, { useState } from "react";

import logo from "@assets/logo.svg";

import Hamburger from "hamburger-react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "@shared/lib/redux/menuSlice";

import "./styles.scss";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  function openMenu() {
    dispatch(toggleMenu());
  }

  return (
    <>
      <header className="header flex items-center justify-between">
        <img src={logo} alt="logotype" className="header__logo" />
        <Hamburger color="#FF6600" onToggle={openMenu} />
      </header>
    </>
  );
};
