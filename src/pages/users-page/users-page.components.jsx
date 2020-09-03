import React from 'react';
import './users-page.scss';

import { IoIosArrowDropdown } from 'react-icons/io';
import { FcCancel, FcCheckmark } from 'react-icons/fc';    

const UsersPage = () => (
    <div className="users">
        <h1 className="users__heading">Users</h1>
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
                <p className="users__count-box--text">Not Activated</p>
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
        <div className="users__table-heading-box">
            <h4 className="users__table-heading">Name</h4>
            <h4 className="users__table-heading">Username</h4>
            <h4 className="users__table-heading">Email</h4>
            <h4 className="users__table-heading">Phone Number</h4>
            <h4 className="users__table-heading">Action</h4>
            <h4 className="users__table-heading">Expiration Date</h4>
        </div>

        <div className="users__table-data-box">
            <p className="users__table-data">Olumorin Samuel</p>
            <p className="users__table-data">olusamayor</p>
            <p className="users__table-data">olumorinsammy@gmail.com</p>
            <p className="users__table-data users__table-number">08188465264</p>
            <p className="users__table-data users__table-activate"> <span>Activate</span> <FcCheckmark /> </p>
            <p className="users__table-data users__table-number">12-02-2099</p>
        </div>

        <div className="users__table-data-box">
            <p className="users__table-data">Olumorin Samuel</p>
            <p className="users__table-data">olusamayor</p>
            <p className="users__table-data">olumorinsammy@gmail.com</p>
            <p className="users__table-data">08188465264</p>
            <p className="users__table-data users__table-deactivate"> <span>Deactivate</span> <FcCancel /> </p>
            <p className="users__table-data">12-02-2099</p>
        </div>

        <div className="users__table-data-box">
            <p className="users__table-data">Olumorin Samuel</p>
            <p className="users__table-data">olusamayor</p>
            <p className="users__table-data">olumorinsammy@gmail.com</p>
            <p className="users__table-data">08188465264</p>
            <p className="users__table-data users__table-activate"> <span>Activate</span> <FcCheckmark /> </p>
            <p className="users__table-data">12-02-2099</p>
        </div>

        <div className="users__table-data-box">
            <p className="users__table-data">Olumorin Samuel</p>
            <p className="users__table-data">olusamayor</p>
            <p className="users__table-data">olumorinsammy@gmail.com</p>
            <p className="users__table-data">08188465264</p>
            <p className="users__table-data users__table-activate"> <span>Activate</span> <FcCheckmark /> </p>
            <p className="users__table-data">12-02-2099</p>
        </div>
        <div className="users__table-data-box">
            <p className="users__table-data">Olumorin Samuel</p>
            <p className="users__table-data">olusamayor</p>
            <p className="users__table-data">olumorinsammy@gmail.com</p>
            <p className="users__table-data">08188465264</p>
            <p className="users__table-data users__table-activate"> <span>Activate</span> <FcCheckmark /> </p>
            <p className="users__table-data">12-02-2099</p>
        </div>
        <div className="users__table-data-box">
            <p className="users__table-data">Olumorin Samuel</p>
            <p className="users__table-data">olusamayor</p>
            <p className="users__table-data">olumorinsammy@gmail.com</p>
            <p className="users__table-data">08188465264</p>
            <p className="users__table-data users__table-deactivate"> <span>Deactivate</span> <FcCancel /> </p>
            <p className="users__table-data">12-02-2099</p>
        </div>
        <div className="users__table-data-box">
            <p className="users__table-data">Olumorin Samuel</p>
            <p className="users__table-data">olusamayor</p>
            <p className="users__table-data">olumorinsammy@gmail.com</p>
            <p className="users__table-data">08188465264</p>
            <p className="users__table-data users__table-activate"> <span>Activate</span> <FcCheckmark /> </p>
            <p className="users__table-data">12-02-2099</p>
        </div>
        <div className="users__table-data-box">
            <p className="users__table-data">Olumorin Samuel</p>
            <p className="users__table-data">olusamayor</p>
            <p className="users__table-data">olumorinsammy@gmail.com</p>
            <p className="users__table-data">08188465264</p>
            <p className="users__table-data users__table-deactivate"> <span>Deactivate</span> <FcCancel /> </p>
            <p className="users__table-data">12-02-2099</p>
        </div>
        <div className="users__table-data-box">
            <p className="users__table-data">Olumorin Samuel</p>
            <p className="users__table-data">olusamayor</p>
            <p className="users__table-data">olumorinsammy@gmail.com</p>
            <p className="users__table-data">08188465264</p>
            <p className="users__table-data users__table-deactivate"> <span>Deactivate</span> <FcCancel /> </p>
            <p className="users__table-data">12-02-2099</p>
        </div>
        <div className="users__table-data-box">
            <p className="users__table-data">Olumorin Samuel</p>
            <p className="users__table-data">olusamayor</p>
            <p className="users__table-data">olumorinsammy@gmail.com</p>
            <p className="users__table-data">08188465264</p>
            <p className="users__table-data users__table-activate"> <span>Activate</span> <FcCheckmark /> </p>
            <p className="users__table-data">12-02-2099</p>
        </div>
        <div className="users__table-data-box">
            <p className="users__table-data">Olumorin Samuel</p>
            <p className="users__table-data">olusamayor</p>
            <p className="users__table-data">olumorinsammy@gmail.com</p>
            <p className="users__table-data">08188465264</p>
            <p className="users__table-data users__table-activate"> <span>Activate</span> <FcCheckmark /> </p>
            <p className="users__table-data">12-02-2099</p>
        </div>
        <div className="users__table-data-box">
            <p className="users__table-data">Olumorin Samuel</p>
            <p className="users__table-data">olusamayor</p>
            <p className="users__table-data">olumorinsammy@gmail.com</p>
            <p className="users__table-data">08188465264</p>
            <p className="users__table-data users__table-activate"> <span>Activate</span> <FcCheckmark /> </p>
            <p className="users__table-data">12-02-2099</p>
        </div>

        <div className="align-center">
            <button className="users__table-more">More</button>
        </div>
    </div>
);

export default UsersPage;