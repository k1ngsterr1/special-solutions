import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMarsStroke } from "@fortawesome/free-solid-svg-icons";
import { Slide } from "react-awesome-reveal";
import Popup from "reactjs-popup";

import "./styles.scss";
import { Button } from "@shared/ui/Button";

interface PopupProps {
  closeMenu: () => void;
  open: boolean;
}

export const ThanksPopup: React.FC<PopupProps> = ({ open, closeMenu }) => {
  return (
    <>
      <Popup
        open={open}
        modal
        nested
        className="popup-container"
        position="center center"
        overlayStyle={{ background: "rgba(0,0,0,0.7)" }}
      >
        <Slide direction="up">
          <div className="popup-container__modal">
            <FontAwesomeIcon
              icon={faMarsStroke}
              className="popup-container__modal__icon"
            />
            <h1 className="popup-container__modal__heading">
              Спасибо за вашу заявку!
            </h1>
            <p className="popup-container__modal__paragraph">
              В скором времени мы с вами свяжемся
            </p>
            <Button text="Закрыть" onClick={closeMenu} type="filled" />
          </div>
        </Slide>
      </Popup>
    </>
  );
};
