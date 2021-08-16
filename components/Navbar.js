import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <nav className='navbar'>
            <menu>   
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>Home</a></Link>
            </menu>
        </nav>
    )
}

export default Navbar
