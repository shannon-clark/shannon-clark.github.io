import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { HamburgerIcon } from "./Hamburger";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { Fragment } from "react";
import { useTheme } from "next-themes";
import { ThemeSymbol } from "./ThemeSymbol";

interface NavProps {
  isDesktop: boolean;
  darkModeActive: boolean;
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
  border-bottom: ${({ isDesktop }) => (isDesktop ? "1px solid" : "none")};
  border-bottom-color: ${({ theme }) => theme.text};
`;

const LinksContainer = styled.div<NavProps>`
  margin-left: 10px;
  margin-right: 10px;
  padding-top: ${({ isDesktop }) => (isDesktop ? "0px" : "20px")};
  font-family:
    Helvetica Neue,
    Arial,
    sans-serif;
  font-size: large;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  transition: font-size 0.25s;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.hovered};
  }
`;

const LogoContainer = styled.div`
  margin-top: 2px;
  margin-left: 10px;
  margin-right: 10px;
`;

const ThemeContainer = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

export const Navbar = () => {
  const { theme } = useTheme();
  const darkModeActive = theme === "dark";
  const { isDesktop } = useWindowDimensions();

  if (isDesktop === undefined || isDesktop === null) {
    return null;
  }

  const Logo = [
    <Link key="logo" href="/">
      <Image
        key="logo-image"
        src={"/photo.svg"}
        alt={"Logo or main image"}
        width={36}
        height={36}
      />
    </Link>,
  ];
  const Links = [
    <Fragment key="links">
      <LinksContainer isDesktop={isDesktop} darkModeActive={darkModeActive}>
        <Link href="/about">About</Link>
      </LinksContainer>
      <LinksContainer isDesktop={isDesktop} darkModeActive={darkModeActive}>
        <Link href="/resume">Resume</Link>
      </LinksContainer>
      <LinksContainer isDesktop={isDesktop} darkModeActive={darkModeActive}>
        <Link href="/projects">Projects</Link>
      </LinksContainer>
      <LinksContainer isDesktop={isDesktop} darkModeActive={darkModeActive}>
        <Link href="/contact">Contact</Link>
      </LinksContainer>
    </Fragment>,
  ];

  return (
    <NavContainer isDesktop={isDesktop} darkModeActive={darkModeActive}>
      {isDesktop ? (
        <>
          <LogoContainer>{Logo}</LogoContainer>
          {Links}
          <ThemeContainer>
            <ThemeSymbol />
          </ThemeContainer>
        </>
      ) : (
        <>
          <HamburgerIcon>{Links}</HamburgerIcon>
          {Logo}
          <ThemeSymbol />
        </>
      )}
    </NavContainer>
  );
};
