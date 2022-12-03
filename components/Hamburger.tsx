import { ReactNode, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";


interface HamburgerProps {
    children: ReactNode;
  }
  
const HamburgerContainer = styled.div`
    margin-right: 20
`;


const HamburgerMenuBackdrop = styled.div<{ open: boolean }>`
  position: fixed;
  height: 100vh;
  transition: opacity 3000ms;
  opacity: ${({ open }) => (open ? 1 : 0)};
  width: 100vw;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.paper}80;
  pointer-events: visiblePainted;
`;
const HamburgerMenu = styled.div<{ open: boolean }>`
  position: fixed;
  height: 100vh;
  transition: width 300ms;
  width: ${({ open }) => (open ? "65vw" : "0vw")};
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.background};
  z-index: 110;
`;
interface HamburgerProps {
    children: ReactNode;
}

export const HamburgerIcon= (props: HamburgerProps) => {
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
            <FontAwesomeIcon
                onClick={() => {
                    setIsMenuOpen(true);
                }}
                style={{ zIndex: 115, cursor: "pointer" }}
                size="xl"
                icon={faBars} 
                color="grey"
            />
            <HamburgerMenu open={isMenuOpen}>
                {props.children}
            </HamburgerMenu>
        </HamburgerContainer>
    );
};



