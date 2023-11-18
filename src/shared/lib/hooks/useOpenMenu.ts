import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "@shared/lib/redux/menuSlice";

export const useOpenMenu = (isOpen: boolean) => {
  const dispatch = useDispatch();

  const openMenu = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return openMenu;
};
