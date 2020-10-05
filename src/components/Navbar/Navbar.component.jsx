import React from 'react';
import './Navbar.styles.scss';

import { FiUsers } from 'react-icons/fi';
import { AiOutlineLogout } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenu } from 'react-icons/hi';
import { RiUserShared2Line, RiFacebookCircleLine } from 'react-icons/ri';
import { IoLogoInstagram } from 'react-icons/io';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import { NavLink, Link } from 'react-router-dom';
import { auth } from './../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { selectUserSlice, selectSidebarState } from './../../Redux/User/user.selectors';
import { toggleSideBar } from '../../Redux/User/user.actions';


const Navbar = ({ currentUser, toggleSidebar, sidebarIsHidden }) => (
  <div className="navbar">
    {/*  */}
    <div className="navbar__logo">
      <h1 className="navbar__logo--text">
        <span className="lead">Leadpreneuer</span>
        <span className="africa">Africa</span>
      </h1>
    </div>
      {
        currentUser &&
          <ul className="navbar__list">
            <NavLink to="/users" className="navbar__list--item navbar-link">
              <FiUsers className="navbar__list--icon" />
              Users
            </NavLink>
            <NavLink to="/agents" className="navbar__list--item navbar-link">
              <RiUserShared2Line className="navbar__list--icon" />
              Agents
            </NavLink>
            <Link to="" onClick={() => auth.signOut()} className="navbar__list--item navbar-link">
              <AiOutlineLogout className="navbar__list--icon" />
              Sign out
            </Link>
          </ul>
      }

    <ul className="navbar__socials">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="navbar__socials--item">
        <RiFacebookCircleLine className="navbar__socials--logo" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="navbar__socials--item">
        <IoLogoInstagram className="navbar__socials--logo" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="navbar__socials--item">
        <TiSocialTwitterCircular className="navbar__socials--logo" />
      </a>
    </ul>
    {sidebarIsHidden ? <HiOutlineMenu onClick={toggleSidebar} className="navbar__menu"/> :
    <AiOutlineClose onClick={toggleSidebar} className="navbar__menu" /> }
  </div>
);

const mapStateToProps = state => ({
  currentUser: selectUserSlice(state),
  sidebarIsHidden: selectSidebarState(state)
});

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch(toggleSideBar())
})


export default connect(mapStateToProps, mapDispatchToProps) (Navbar);
