import React from 'react';
import './Navbar.styles.scss';

import { FiUsers } from 'react-icons/fi';
import { GrUserNew } from 'react-icons/gr';
import { AiOutlineLogout } from 'react-icons/ai';

const Navbar = () => (
    <div className="navbar">
        <div className="navbar__logo">
            {/* <div className="navbar__logo--img">
                <img src={require("../../assets/img/leadpreneuer-logo-3.png")} alt="logo leadpreneuer" style={{ width: '6rem'}}/>
            </div> */}
            <p className="navbar__logo--text">LeadPreneuer</p>
        </div>
        <ul className="navbar__list">
            <li className="navbar__list--item">Users</li>
            <li className="navbar__list--item">Agents</li>
            <li className="navbar__list--item">Sign out</li>
        </ul>

        <ul className="navbar__socials">
            <li className="navbar__socials--item">Facebook</li>
            <li className="navbar__socials--item">Instagram</li>
            <li className="navbar__socials--item">Twitter</li>
        </ul>
    </div>
);

export default Navbar;