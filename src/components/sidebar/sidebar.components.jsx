import React from 'react';
import './sidebar.styles.scss';

import { GrUserAdmin } from 'react-icons/gr';
import { AiOutlineUserSwitch } from 'react-icons/ai';
import { HiOutlineUsers } from 'react-icons/hi';
import { FaUserSlash } from 'react-icons/fa';
import { FiUserCheck } from 'react-icons/fi';
import { BiMessageSquareError } from 'react-icons/bi';
import { TiUserAddOutline } from 'react-icons/ti';
import { ImCancelCircle } from 'react-icons/im';
import { GoDashboard } from 'react-icons/go';
import { AiOutlineMan } from 'react-icons/ai';

import { NavLink } from 'react-router-dom';

const Sidebar = () => (
    <div className="sidebar">
        <div className="sidebar__img">
            <GrUserAdmin className="sidebar__avatar"/>
        </div>        
        <h4 className="sidebar__admin">
            olumorinsammy@gmail.com
        </h4>
        <ul className="sidebar__list">
            <NavLink to="/" className="sidebar__list--item" activeClassName="sidebar__list--active" >
                <GoDashboard className="sidebar__list--icon" />
                Dashboard
            </NavLink>
            <NavLink to="/" className="sidebar__list--item" >
                <HiOutlineUsers className="sidebar__list--icon" />
                All Users
            </NavLink>
            <NavLink to="/" className="sidebar__list--item">
                <FiUserCheck className="sidebar__list--icon" />
                Activate Users
            </NavLink>
            <NavLink to="/" className="sidebar__list--item">
                <FaUserSlash className="sidebar__list--icon" />
                Deactivate Users
            </NavLink>
            <NavLink to="/" className="sidebar__list--item">
                <BiMessageSquareError className="sidebar__list--icon" />
                Expired Subscription
            </NavLink>
            <NavLink to="/" className="sidebar__list--item">
                <AiOutlineUserSwitch className="sidebar__list--icon" />
                Agents
            </NavLink>
            <NavLink to="/" className="sidebar__list--item">
                <TiUserAddOutline className="sidebar__list--icon" />
                New Agent
            </NavLink>
            <NavLink to="/" className="sidebar__list--item">
                <ImCancelCircle className="sidebar__list--icon" />
                Disable Agent
            </NavLink>
            <NavLink to="/" className="sidebar__list--item">
                <AiOutlineMan className="sidebar__list--icon" />
                Manage Search Filter
            </NavLink>
        </ul>
    </div>
);

export default Sidebar;