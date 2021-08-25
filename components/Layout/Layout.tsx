import React from 'react'
import Navbar from 'components/Navbar/Navbar'

export const Layout: React.FC = (props) => {
    return (
        <>
            <Navbar/>
            {props.children}
            <footer>This is de remix</footer>
        </>
    )
}
