import Link from "next/link";
import styled from "styled-components";
import { HamburgerIcon } from "./Hamburger";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { Fragment } from "react";

interface NavProps {
  isDesktop: boolean;
}

const NavContainer = styled.nav<NavProps>`
  position: fixed;
  height: 55px;
  top: 0;
  right: 0;
  left: 0;
  margin: 0;
  padding: 5px 15px;
  display: flex;
  justify-content: ${({ isDesktop }) =>
    isDesktop ? "center" : "space-between"};
  align-items: center;
  background: ${({ theme }) => theme.nav};
  border-bottom: 3px solid ${({ theme }) => theme.border};
  z-index: 120;
`;

const LinksContainer = styled.div<NavProps>`
  margin-left: 10px;
  margin-right: 10px;
  padding-top: ${({ isDesktop }) => (isDesktop ? "0px" : "20px")};
  font-family: var(--font-body);
  font-size: ${({ isDesktop }) => (isDesktop ? "1rem" : "1.08rem")};
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  transition: transform 0.2s;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.hovered};
    transform: translateY(-1px);
  }
`;

const LogoContainer = styled.div`
  margin-top: 3px;
  margin-left: 10px;
  margin-right: 10px;
  font-family: var(--font-display);
  letter-spacing: 0.04em;
  font-size: 0.95rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Navbar = () => {
  const { isDesktop } = useWindowDimensions();

  if (isDesktop === undefined || isDesktop === null) {
    return null;
  }

  const Links = [
    <Fragment key="links">
      <LinksContainer isDesktop={isDesktop}>
        <Link href="/#collection">Collection</Link>
      </LinksContainer>
      <LinksContainer isDesktop={isDesktop}>
        <Link href="/#wishlist">Wishlist</Link>
      </LinksContainer>
      <LinksContainer isDesktop={isDesktop}>
        <Link href="/#stats">Stats</Link>
      </LinksContainer>
      <LinksContainer isDesktop={isDesktop}>
        <Link href="/#about">About</Link>
      </LinksContainer>
    </Fragment>,
  ];

  return (
    <NavContainer isDesktop={isDesktop}>
      {isDesktop ? (
        <>{Links}</>
      ) : (
        <HamburgerIcon>{Links}</HamburgerIcon>
      )}
    </NavContainer>
  );
};
