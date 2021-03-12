import React, { useState } from 'react';
import './Nav.css';
import ReorderIcon from '@material-ui/icons/Reorder';
import SearchIcon from '@material-ui/icons/Search';
//yarn add @material-ui/core
//yarn add @material-ui/icons
function Nav() {

    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className="Navbar">
            <div className="leftSide">
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <a href="/">😀Home</a>
                    <a href="">😃About Us</a>
                    <a href="/users">🤗Users</a>
                    <a href="/forum">📑Forum</a>
                </div>
                <button onClick={() => setShowLinks(!showLinks)}><ReorderIcon /></button>
            </div>
            <div className="rightSide">
                <input type="text" placeholder="subject..." />
                <button><SearchIcon /></button>
            </div>
        </div>
    );
}

export default Nav;