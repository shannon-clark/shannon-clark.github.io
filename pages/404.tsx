import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function NotFound() {
    const router = useRouter();
    
    useEffect (() => {
        setTimeout(() => {
            router.push("/");
        }, 10000)
    }, [])
    
    return (
        <div>
            <h1>That page cannot be found</h1>
            <p>Go back to the <Link href="/">homepage</Link></p>
        </div>   
        
    );
  }