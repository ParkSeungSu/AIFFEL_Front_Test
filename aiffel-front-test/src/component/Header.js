import React from 'react';
import logo from '../aiffel_logo.png';
import profile from '../profile.png';
import './Header.css'
function Header() {

    const name = "Tester";
    return (
        <div className="Header">
            <ul className="headList">
                <li className="logo"><a href="/"><img src={logo} alt="logo" /></a></li>
                <li className="profile">
                    <ul>
                        <li><a href="/profile"><img src={profile} alt="profile" width="10%" height="10%" /></a></li>
                        <li className="nameSpace"><a href="/profile">{name}</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Header;