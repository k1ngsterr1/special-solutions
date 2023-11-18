import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useOpenMenu } from "@shared/lib/hooks/useOpenMenu";

import logo from "@assets/logo.svg";

import Hamburger from "hamburger-react";

import "./styles.scss";

export const Header = () => {
  const isMenuOpen = useSelector((state: any) => state.menu.isOpen);
  const openMenu = useOpenMenu(isMenuOpen);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="header flex items-center justify-between">
        <img src={logo} alt="logotype" className="header__logo" />
        <Hamburger color="#FF6600" onToggle={openMenu} />
      </header>
    </>
  );
};
