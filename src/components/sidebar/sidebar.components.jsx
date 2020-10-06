import React from 'react';
import './sidebar.styles.scss';

import { GrUserAdmin } from 'react-icons/gr';
import { AiOutlineUserSwitch } from 'react-icons/ai';
import { HiOutlineUsers } from 'react-icons/hi';
import { FaUserSlash } from 'react-icons/fa';
import { FiUserCheck } from 'react-icons/fi';
import { BiMessageSquareError } from 'react-icons/bi';
import { TiUserAddOutline } from 'react-icons/ti';
import { GoDashboard } from 'react-icons/go';
import { IoMdBusiness } from 'react-icons/io';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectUserSlice } from './../../Redux/User/user.selectors';

const Sidebar = ({ user }) => {

    return(
        <div className="sidebar">
            <div className="sidebar__img">
                <GrUserAdmin className="sidebar__avatar"/>
            </div>
            <h4 className="sidebar__admin">
                {user ? user.email : '*'}
            </h4>
            <ul className="sidebar__list">
                <NavLink to="/dashboard" className="sidebar__list--item" activeClassName="sidebar__list--active" >
                    <GoDashboard className="sidebar__list--icon" />
                    Dashboard
                </NavLink>
                <NavLink to="/users" className="sidebar__list--item" activeClassName="sidebar__list--active" >
                    <HiOutlineUsers className="sidebar__list--icon" />
                    All Users
                </NavLink>
                <NavLink to="/activate-users" className="sidebar__list--item" activeClassName="sidebar__list--active">
                    <FiUserCheck className="sidebar__list--icon" />
                    Activate Users
                </NavLink>
                <NavLink to="/deactivate-users" className="sidebar__list--item" activeClassName="sidebar__list--active">
                    <FaUserSlash className="sidebar__list--icon" />
                    Deactivate Users
                </NavLink>
                <NavLink to="/expired-subscription" className="sidebar__list--item" activeClassName="sidebar__list--active">
                    <BiMessageSquareError className="sidebar__list--icon" />
                    Expired Subscription
                </NavLink>
                <NavLink to="/agents" className="sidebar__list--item" activeClassName="sidebar__list--active">
                    <AiOutlineUserSwitch className="sidebar__list--icon" />
                    Consultants
                </NavLink>
                <NavLink to="/new-agent" className="sidebar__list--item" activeClassName="sidebar__list--active">
                    <TiUserAddOutline className="sidebar__list--icon" />
                    New Consultant
                </NavLink>
                <NavLink to="/category" className="sidebar__list--item" activeClassName="sidebar__list--active">
                    <IoMdBusiness className="sidebar__list--icon" />
                    Business Categories
                </NavLink>
            </ul>
        </div>
    )
};

const mapStateToProps = state => ({
    user: selectUserSlice(state)
})

export default connect(mapStateToProps) (Sidebar);