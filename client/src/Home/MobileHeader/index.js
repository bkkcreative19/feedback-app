import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import {
  Clickable,
  HeadingSubTitle,
  HeadingTitle,
  MobileHeaderContainer,
  MobileSide,
  Overlay,
  Scroll,
  TextContent,
} from "./Styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { Selections } from "../../shared/components/Selections";
import { Roadmap } from "../../shared/components/Roadmap";
import useOnOutsideClick from "../../shared/hooks/onOutsideClick";

export const MobileHeader = ({ setFilter, currentFilter }) => {
  const clickableOverlayRef = useRef();
  const modalRef = useRef();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const handleToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const close = () => {
    setIsMobileOpen(false);
  };

  useOnOutsideClick(modalRef, isMobileOpen, close, clickableOverlayRef);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isMobileOpen]);

  return (
    <>
      <MobileHeaderContainer>
        <TextContent>
          <HeadingTitle>FrontEnd Mentor</HeadingTitle>
          <HeadingSubTitle>Feedback Board</HeadingSubTitle>
        </TextContent>
        {isMobileOpen ? (
          <MdOutlineClose color="#FFF" size={"2.5em"} onClick={handleToggle} />
        ) : (
          <GiHamburgerMenu color="#FFF" size={"2.5em"} onClick={handleToggle} />
        )}
      </MobileHeaderContainer>
      {isMobileOpen &&
        ReactDOM.createPortal(
          <Overlay>
            <Clickable ref={clickableOverlayRef}>
              <MobileSide ref={modalRef}>
                <Selections
                  currentFilter={currentFilter}
                  setFilter={setFilter}
                />
                <Roadmap />
              </MobileSide>
            </Clickable>
          </Overlay>,
          root
        )}
    </>
  );
};

const root = document.getElementById("root");
