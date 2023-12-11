import React from "react";
import { Header } from "@features/Header/ui";
import { Menu } from "@features/Menu/ui";
import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { ClientScreen } from "@widgets/Clients/ui";

export const ClientsPage = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      <Header />
      {isMenuOpen && <Menu />}
      <ClientScreen />
    </>
  );
};
