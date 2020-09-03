import React from 'react';
import './Homepage.styles.scss';

import { FiUsers, FiUserCheck, FiUserX, FiUserPlus } from 'react-icons/fi';
import { FaUserTie } from 'react-icons/fa';
import { AiOutlineUserAdd } from 'react-icons/ai';


const Homepage = () => (
    <div className="homepage">
        <div className="homepage__boxes">            
            <div className="homepage__box homepage__box--1">
                <h5 className="homepage__box--heading">Registered Users</h5>
                <div className="homepage__box--flex">
                    <FiUsers className="homepage__box--icon" />
                    <p className="homepage__box--number">2309</p>
                </div>
                <button className="homepage__box--action">View</button>
            </div>
            <div className="homepage__box homepage__box--2">
                <h5 className="homepage__box--heading">Activated Users</h5>
                <div className="homepage__box--flex">
                    <FiUserCheck className="homepage__box--icon" />
                    <p className="homepage__box--number">2309</p>
                </div>
                <button className="homepage__box--action">View</button>
            </div>
            <div className="homepage__box homepage__box--3">
                <h5 className="homepage__box--heading">Agents</h5>
                <div className="homepage__box--flex">
                    <FaUserTie className="homepage__box--icon" />
                    <p className="homepage__box--number">29</p>
                </div>
                <button className="homepage__box--action">View</button>
            </div>
        </div>

        <div className="homepage__actions">
            <div className="homepage__action homepage__action--1">
                <FiUserPlus className="homepage__action--icon"/>
                <h6 className="homepage__action--text">New Agent</h6>
            </div>
            <div className="homepage__action homepage__action--2">
                <AiOutlineUserAdd className="homepage__action--icon"/>
                <h6 className="homepage__action--text">Create Admin</h6>
            </div>
            <div className="homepage__action homepage__action--3">
                <FiUserCheck className="homepage__action--icon"/>
                <h6 className="homepage__action--text">Activate User</h6>
            </div>
            <div className="homepage__action homepage__action--4">
                <FiUserX className="homepage__action--icon"/>
                <h6 className="homepage__action--text">Deactivate User</h6>
            </div>
        </div>
    </div>
);

export default Homepage;