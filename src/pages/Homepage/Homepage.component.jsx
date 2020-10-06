import React from 'react';
import './Homepage.styles.scss';

import { FiUsers, FiUserCheck, FiUserX, FiUserPlus } from 'react-icons/fi';
import { FaUserTie } from 'react-icons/fa';
import { AiOutlineUserAdd } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectIsGettingUserCountSlice, selectUserCountError, selectUserCountSlice } from './../../Redux/Count/user-count.selectors';
import { useHistory } from 'react-router-dom';

const Homepage = ({ userCount, isGettingUserCount, userCountError }) => {
    let history = useHistory();

    return(
        <div className="homepage">
            <div className="homepage__boxes">
                <div className="homepage__box homepage__box--1">
                    <h5 className="homepage__box--heading">Registered Users</h5>
                    <div className="homepage__box--flex">
                        <FiUsers className="homepage__box--icon" />
                        <p className="homepage__box--number">
                            {
                                userCount && !isGettingUserCount ? userCount.registeredUsers : '.'
                            }
                        </p>
                    </div>
                    <button onClick={() => history.push(`/users`)} className="homepage__box--action">View</button>
                </div>
                <div className="homepage__box homepage__box--2">
                    <h5 className="homepage__box--heading">Activated Users</h5>
                    <div className="homepage__box--flex">
                        <FiUserCheck className="homepage__box--icon" />
                        <p className="homepage__box--number">
                            {
                                userCount && !isGettingUserCount ? userCount.activatedUsers : '.'
                            }
                        </p>
                    </div>
                    <button onClick={() => history.push(`/deactivate-users`)} className="homepage__box--action">View</button>
                </div>
                <div className="homepage__box homepage__box--3">
                    <h5 className="homepage__box--heading">Consultants</h5>
                    <div className="homepage__box--flex">
                        <FaUserTie className="homepage__box--icon" />
                        <p className="homepage__box--number">
                            {
                                userCount && !isGettingUserCount ? userCount.agents : '.'
                            }
                        </p>
                    </div>
                    <button onClick={() => history.push(`/agents`)} className="homepage__box--action">View</button>
                </div>
            </div>

            <div className="homepage__actions">
                <Link to="/new-agent" className="homepage__action homepage__action--1">
                    <FiUserPlus className="homepage__action--icon"/>
                    <h6 className="homepage__action--text">New Consultant</h6>
                </Link>
                <div className="homepage__action homepage__action--2">
                    <AiOutlineUserAdd className="homepage__action--icon"/>
                    <h6 className="homepage__action--text">Create Admin</h6>
                </div>
                <Link to="activate-users" className="homepage__action homepage__action--3">
                    <FiUserCheck className="homepage__action--icon"/>
                    <h6 className="homepage__action--text">Activate User</h6>
                </Link>
                <Link to="/deactivate-users" className="homepage__action homepage__action--4">
                    <FiUserX className="homepage__action--icon"/>
                    <h6 className="homepage__action--text">Deactivate User</h6>
                </Link>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    userCount: selectUserCountSlice(state),
    isGettingUserCount: selectIsGettingUserCountSlice(state),
    userCountError: selectUserCountError(state)
})

export default connect(mapStateToProps) (Homepage);