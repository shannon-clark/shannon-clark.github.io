import { ReactNode, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

interface HamburgerProps {
  children: ReactNode;
}

const HamburgerContainer = styled.div`
  margin-right: 8px;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.text};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.textsecondary};
  }
`;

const HamburgerMenuBackdrop = styled.div<{ open: boolean }>`
  position: fixed;
  height: 100vh;
  transition: opacity 200ms;
  opacity: ${({ open }) => (open ? 1 : 0)};
  width: 100vw;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  pointer-events: ${({ open }) => (open ? "all" : "none")};
  z-index: 108;
`;

const HamburgerMenu = styled.div<{ open: boolean }>`
  position: fixed;
  height: 100vh;
  transition: width 250ms;
  width: ${({ open }) => (open ? "min(80vw, 320px)" : "0px")};
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.nav};
  border-right: 3px solid ${({ theme }) => theme.border};
  padding-top: 78px;
  padding-left: ${({ open }) => (open ? "12px" : "0px")};
  z-index: 110;
`;

export const HamburgerIcon = (props: HamburgerProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <HamburgerContainer>
      <HamburgerMenuBackdrop
        hidden={!isMenuOpen}
        open={isMenuOpen}
        onClick={() => {
          setIsMenuOpen(false);
        }}
      />
      <StyledFontAwesomeIcon
        onClick={() => {
          setIsMenuOpen((value) => !value);
        }}
        style={{ zIndex: 115, cursor: "pointer" }}
        size="xl"
        icon={faBars}
      />
      <HamburgerMenu open={isMenuOpen}>
        {isMenuOpen ? props.children : <></>}
      </HamburgerMenu>
    </HamburgerContainer>
  );
};
