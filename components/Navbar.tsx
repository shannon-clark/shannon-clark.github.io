import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components';
import { HamburgerIcon } from './Hamburger';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { Fragment } from 'react';
import { useDarkMode } from 'next-dark-mode'
import { ThemeSymbol } from './ThemeSymbol';

const StyledImage = styled.img`
  max-width: 100%;
  max-height: calc(100vh - 55px);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  bottom: 0px;
`;

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
  justify-content: ${({ isDesktop }) => (isDesktop ? 'center' : 'space-between')};
  align-items: center;
  border-bottom: ${({ isDesktop }) => (isDesktop ? '1px solid' : 'none')};
  border-bottom-color: ${({ theme }) => theme.text};
`;


const LinksContainer = styled.div<NavProps>`
    margin-left: 10px;
    margin-right: 10px;
    padding-top: ${( { isDesktop } ) => isDesktop ? '0px': '20px'};
    font-family: Helvetica Neue, Arial, sans-serif;
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
`

const ThemeContainer = styled.div`
    margin-left: 10px;
    margin-right: 10px;
`





export const Navbar = () => {
    const { isDesktop } = useWindowDimensions();


    if (isDesktop === undefined || isDesktop === null) {
    return null; // or a small placeholder like <div style={{ height: 55 }} />
  }
    const {
        autoModeActive,    // boolean - whether the auto mode is active or not
        autoModeSupported, // boolean - whether the auto mode is supported on this browser
        darkModeActive,    // boolean - whether the dark mode is active or not
        switchToAutoMode,  // function - toggles the auto mode on
        switchToDarkMode,  // function - toggles the dark mode on
        switchToLightMode, // function - toggles the light mode on
      } = useDarkMode()


  const Logo = [
    <Link key='logo' href="/">
    <Image 
        key='logo-image'
        src={'/photo.svg'} 
        alt={'Logo or main image'} 
        width={36}
        height={36}
    />
    </Link>
]
    const Links = [
        <Fragment key='links'>
        <LinksContainer isDesktop={isDesktop} darkModeActive={darkModeActive}><Link href="/about">About</Link></LinksContainer>
        <LinksContainer isDesktop={isDesktop} darkModeActive={darkModeActive}><Link href="/resume">Resume</Link></LinksContainer>
        <LinksContainer isDesktop={isDesktop} darkModeActive={darkModeActive}><Link href="/projects">Projects</Link></LinksContainer>
        <LinksContainer isDesktop={isDesktop} darkModeActive={darkModeActive}><Link href="/contact">Contact</Link></LinksContainer>
        </Fragment>
    ]


    return (
       <NavContainer isDesktop={isDesktop} darkModeActive={darkModeActive}>
            { isDesktop ? <><LogoContainer>{ Logo }</LogoContainer>{ Links }<ThemeContainer><ThemeSymbol /></ThemeContainer></>: <><HamburgerIcon>{Links}</HamburgerIcon>{Logo}<ThemeSymbol /></>}        
       </NavContainer>   
    );

  }