import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <Link href="/"><Image src="/favicon-original.png" alt="Favicon" width={50} height={50}></Image></Link>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
        </nav>
        
    );

  }