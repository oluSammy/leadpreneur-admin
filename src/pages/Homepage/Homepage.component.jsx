import React from 'react';
import './Homepage.styles.scss';

import { FiUsers } from 'react-icons/fi';

const Homepage = () => (
    <div className="homepage">
        <div className="homepage__boxes">            
            <div className="homepage__box homepage__box--1">
                <h5 className="homepage__box--heading">Registered Users</h5>
                <FiUsers />
                <p className="homepage__box--number">2309</p>
                <button className="homepage__box--action">View Users</button>
            </div>
            <div className="homepage__box homepage__box--2">
                <h5 className="homepage__box--heading">Activated Users</h5>
                <FiUsers />
                <p className="homepage__box--number">2309</p>
                <button className="homepage__box--action">View Users</button>
            </div>
            <div className="homepage__box homepage__box--3">
                <h5 className="homepage__box--heading">Agents</h5>
                <FiUsers />
                <p className="homepage__box--number">2309</p>
                <button className="homepage__box--action">View Users</button>
            </div>
            {/* <div className="homepage__box homepage__box--4">
                <h5 className="homepage__box--heading">Registered Users</h5>
                <FiUsers />
                <p className="homepage__box--number">2309</p>
                <button className="homepage__box--action">View Users</button>
            </div> */}
        </div>
    </div>
);

export default Homepage;