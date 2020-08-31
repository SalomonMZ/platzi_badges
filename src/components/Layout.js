import React from 'react';

import Navbar from './Navbar';

function Layout(props) {
    const children = props.children
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default Layout