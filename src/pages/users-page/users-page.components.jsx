import React from 'react';
import './users-page.scss';

import { IoIosArrowDropdown } from 'react-icons/io';
import UserDataTable from '../../components/user-data-table/user-data-table.component';
import SearchUser from '../../components/Search-User/Search-User.component';

const UsersPage = () => (
    <div className="users">
        <div className="users__page-top">
            <h1 className="users__heading">Users</h1>
            <SearchUser />
        </div>
        <div className="users__count">
            <div className="users__count-box">
                <h5 className="users__count-box--number users__heading--1">2234</h5>
                <p className="users__count-box--text">Registered Users</p>
            </div>
            <div className="users__count-box">
                <h5 className="users__count-box--number users__heading--2">75</h5>
                <p className="users__count-box--text">Activated Users</p>
            </div>
            <div className="users__count-box">
                <h5 className="users__count-box--number users__heading--3">24</h5>
                <p className="users__count-box--text">Inactivated</p>
            </div>
        </div>
        <div className="users__sort">
            <h3 className="users__sort-heading">Sort By:</h3>
            <div className="users__sort-box">
                <div className="users__dropdown">
                    <h6 className="users__dropdown--status">All</h6>
                    <div className="dropdown-hover">
                        <h5 className="users__dropdown--heading"> 
                            <span>Registration Month</span> 
                            <IoIosArrowDropdown className="users__dropdown--icon" />
                        </h5>
                        <ul className="users__dropdown--list">
                            <li className="users__dropdown--list-item">All</li>
                            <li className="users__dropdown--list-item">August 2020</li>
                            <li className="users__dropdown--list-item">July 2020</li>
                            <li className="users__dropdown--list-item">June 2020</li>
                            <li className="users__dropdown--list-item">May 2020</li>
                            <li className="users__dropdown--list-item">April 2020</li>
                        </ul>
                    </div>
                </div>

                <div className="users__dropdown">
                    <h6 className="users__dropdown--status">All</h6>
                    <div className="dropdown-hover">
                        <h5 className="users__dropdown--heading">
                            <span>Agents</span> 
                            <IoIosArrowDropdown className="users__dropdown--icon" />
                        </h5>
                        <ul className="users__dropdown--list">
                            <li className="users__dropdown--list-item">All</li>
                            <li className="users__dropdown--list-item">August 2020</li>
                            <li className="users__dropdown--list-item">July 2020</li>
                            <li className="users__dropdown--list-item">June 2020</li>
                            <li className="users__dropdown--list-item">May 2020</li>
                            <li className="users__dropdown--list-item">April 2020</li>
                        </ul>
                    </div>
                </div>

                <div className="users__dropdown">
                    <h6 className="users__dropdown--status">All</h6>
                    <div className="dropdown-hover">
                        <h5 className="users__dropdown--heading">
                            <span>Activation</span> 
                            <IoIosArrowDropdown className="users__dropdown--icon" />
                        </h5>
                        <ul className="users__dropdown--list">
                            <li className="users__dropdown--list-item">All</li>
                            <li className="users__dropdown--list-item">Activated</li>
                            <li className="users__dropdown--list-item">Non Activated</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <UserDataTable />
        <div className="align-center">
            <button className="users__table-more">More</button>
        </div>
    </div>
);

export default UsersPage;