import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components';
import { HamburgerIcon } from './Hamburger';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { Fragment } from 'react';

interface NavProps {
    isDesktop: boolean;
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
    justify-content: ${( { isDesktop } ) => isDesktop ? 'center' : 'right'};
    align-items: center;
    border-bottom: ${( { isDesktop } ) => isDesktop ? '1px solid #ddd' : ''};
    background-color:rgb(12, 11, 11)
`;


const LinksContainer = styled.div<NavProps>`
    margin-left: 20px;
    padding-top: ${( { isDesktop } ) => isDesktop ? '0px': '20px'};
    font-family: Helvetica, Arial, sans-serif;
    font-size: large;
    font-weight: bold;
    color: white;
    transition: font-size 0.25s;
    &:hover,
    &:focus {
        color: #68d4e6;
    }
`;




export const Navbar = () => {
    const { isDesktop } = useWindowDimensions();


    const Logo = [
        <Link key='logo' href="/"><Image src="/favicon-original.png" alt="Favicon" width={40} height={40}></Image></Link>
    ]
    
    const Links = [
        <Fragment key='links'>
        <LinksContainer isDesktop={isDesktop}><Link href="/">Home</Link></LinksContainer>
        <LinksContainer isDesktop={isDesktop}><Link href="/about">About</Link></LinksContainer>
        <LinksContainer isDesktop={isDesktop}><Link href="/resume">Resume</Link></LinksContainer>
        <LinksContainer isDesktop={isDesktop}><Link href="/projects">Projects</Link></LinksContainer>
        <LinksContainer isDesktop={isDesktop}><Link href="/contact">Contact</Link></LinksContainer>
        {/* <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link> */}
        {/* <><Link href="/">Home</Link></>
        <><Link href="/about">About</Link></>
        <><Link href="/resume">Resume</Link></>
        <><Link href="/projects">Projects</Link></>
        <><Link href="/contact">Contact</Link></> */}
        </Fragment>
    ]


    return (
       <NavContainer isDesktop={isDesktop}>
            { isDesktop ? <>{ Logo }{ Links }</>: <HamburgerIcon>{Links}</HamburgerIcon>}        
       </NavContainer>   
    );

  }