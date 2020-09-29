import React, { useEffect } from 'react';
import './users-page.scss';

import UserDataTable from '../../components/user-data-table/user-data-table.component';
import SearchUser from '../../components/Search-User/Search-User.component';

import { selectIsGettingUserCountSlice, selectUserCountError, selectUserCountSlice } from './../../Redux/Count/user-count.selectors';
import { connect } from 'react-redux';
import { asyncGetInitUsers, asyncGetMoreUsers } from './../../Redux/Users/users.actions';
import { selectIsGettingUsers, selectUsersSlice, selectPrevDoc, isGettingMoreUsers } from './../../Redux/Users/users.selectors';
import Loader from 'react-loader-spinner'

const UsersPage = ({ userCount, isGettingUserCount, getInitUsers, isGettingUsers,
                    users, getMoreUsers, prevDoc, isGettingMoreUsers }) => {

    useEffect(() => {
        const getUsers = async () => {
            await getInitUsers();
        }
        getUsers();
    }, [getInitUsers]);

    const addMoreUsers = () => {
        if(!isGettingMoreUsers) {
            getMoreUsers(prevDoc);
        }
    }

    return(
        <div className="users">
            <div className="users__page-top">
                <h1 className="users__heading">Users</h1>
                <SearchUser />
            </div>
            <div className="users__count">
                <div className="users__count-box">
                    <h5 className="users__count-box--number users__heading--1">
                        {
                            userCount && !isGettingUserCount ? userCount.registeredUsers : '.'
                        }
                    </h5>
                    <p className="users__count-box--text">Registered Users</p>
                </div>
                <div className="users__count-box">
                    <h5 className="users__count-box--number users__heading--2">
                        {
                            userCount && !isGettingUserCount ? userCount.activatedUsers : '.'
                        }
                    </h5>
                    <p className="users__count-box--text">Activated Users</p>
                </div>
                <div className="users__count-box">
                    <h5 className="users__count-box--number users__heading--3">
                        {
                            userCount && !isGettingUserCount ? userCount.registeredUsers - userCount.activatedUsers : '.'
                        }
                    </h5>
                    <p className="users__count-box--text">Inactivated</p>
                </div>
            </div>
            {/* <div className="users__sort">
                <h3 className="users__sort-heading">Sort By:</h3>
                <div className="users__sort-box">
                    <div className="users__dropdown">
                        <label htmlFor="reg-month" className="users__label">Registration Month:</label>
                        <select name="reg-month" id="reg-month" className="users__select">
                            <option value="all">All</option>
                            <option value="aug-2020">August 2020</option>
                            <option value="aug-2020">August 2020</option>
                            <option value="aug-2020">August 2020</option>
                            <option value="aug-2020">August 2020</option>
                            <option value="aug-2020">August 2020</option>
                            <option value="aug-2020">August 2020</option>
                        </select>
                    </div>

                    <div className="users__dropdown">
                        <label htmlFor="agents" className="users__label">Agents:</label>
                        <select name="agents" id="agents" className="users__select">
                            <option value="all">All</option>
                            <option value="aug-2020">August 2020</option>
                            <option value="aug-2020">August 2020</option>
                            <option value="aug-2020">August 2020</option>
                            <option value="aug-2020">August 2020</option>
                            <option value="aug-2020">August 2020</option>
                            <option value="aug-2020">August 2020</option>
                        </select>
                    </div>

                    <div className="users__dropdown">
                        <label htmlFor="activation-status" className="users__label">Activation Status: </label>
                        <select name="activation-status" id="activation-status" className="users__select">
                            <option value="all">All</option>
                            <option value="aug-2020">Activated</option>
                            <option value="aug-2020">Inactive</option>
                        </select>
                    </div>
                </div>
            </div> */}
            {isGettingUsers ?
            <div className="align-center">
                <Loader
                    type="TailSpin"
                    color="#2717d5"
                    height={100}
                />
            </div> :
            <UserDataTable users={users} allUsers={true} /> }
            {
                isGettingUsers ? '' :
                <div className="align-center">
                    {userCount.registeredUsers > users.length &&
                    <button onClick={addMoreUsers} className="users__table-more">More</button>}
                </div>
            }
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    getInitUsers: () => dispatch(asyncGetInitUsers()),
    getMoreUsers: prevDoc => dispatch(asyncGetMoreUsers(prevDoc))
})

const mapStateToProps = state => ({
    userCount: selectUserCountSlice(state),
    isGettingUserCount: selectIsGettingUserCountSlice(state),
    userCountError: selectUserCountError(state),
    isGettingUsers: selectIsGettingUsers(state),
    users: selectUsersSlice(state),
    prevDoc: selectPrevDoc(state),
    isGettingMoreUsers: isGettingMoreUsers(state)
})

export default connect(mapStateToProps, mapDispatchToProps) (UsersPage);