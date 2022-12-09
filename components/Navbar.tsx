import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components';
import { HamburgerIcon } from './Hamburger';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { Fragment } from 'react';
import { useDarkMode } from 'next-dark-mode'
import { ThemeSymbol } from './ThemeSymbol';


interface NavProps {
    isDesktop: boolean;
    darkModeActive: boolean;
  }

const NavContainer = styled.nav<NavProps>`
    position: fixed;
    height: 55px;
    top: 0px;
    right: 0px; 
    left: 0px;
    margin: 0 0 0 0;
    padding: 5px 15px 5px 15px;
    display: flex;
    justify-content: ${( { isDesktop } ) => isDesktop ? 'center' : 'left'};
    align-items: center;
    border-bottom: ${( { isDesktop } ) => isDesktop ? '1px solid': ''};
    border-bottom-color: ${( { theme } ) => theme.text};
    background-color: ${({ theme }) => theme.background};
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
        color: ${({ theme }) => theme.textsecondary};
    }
`;

const LogoContainer = styled.div`
    margin-left: 10px;
    margin-right: 10px;
`






export const Navbar = () => {
    const { isDesktop } = useWindowDimensions();
    const {
        autoModeActive,    // boolean - whether the auto mode is active or not
        autoModeSupported, // boolean - whether the auto mode is supported on this browser
        darkModeActive,    // boolean - whether the dark mode is active or not
        switchToAutoMode,  // function - toggles the auto mode on
        switchToDarkMode,  // function - toggles the dark mode on
        switchToLightMode, // function - toggles the light mode on
      } = useDarkMode()


    const Logo = [
        <Link key='logo' href="/"><Image src="/favicon-original.png" alt="Favicon" width={40} height={40}></Image></Link>
    ]
    
    const Links = [
        <Fragment key='links'>
        <LinksContainer isDesktop={isDesktop} darkModeActive={darkModeActive}><Link href="/">Home</Link></LinksContainer>
        <LinksContainer isDesktop={isDesktop} darkModeActive={darkModeActive}><Link href="/about">About</Link></LinksContainer>
        <LinksContainer isDesktop={isDesktop} darkModeActive={darkModeActive}><Link href="/resume">Resume</Link></LinksContainer>
        <LinksContainer isDesktop={isDesktop} darkModeActive={darkModeActive}><Link href="/projects">Projects</Link></LinksContainer>
        <LinksContainer isDesktop={isDesktop} darkModeActive={darkModeActive}><Link href="/contact">Contact</Link></LinksContainer>
        </Fragment>
    ]


    return (
       <NavContainer isDesktop={isDesktop} darkModeActive={darkModeActive}>
            { isDesktop ? <><LogoContainer>{ Logo }</LogoContainer>{ Links }<ThemeSymbol /></>: <><HamburgerIcon>{Links}</HamburgerIcon>{Logo}</>}        
       </NavContainer>   
    );

  }