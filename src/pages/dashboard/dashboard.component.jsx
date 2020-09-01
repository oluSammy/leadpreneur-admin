import React from 'react';
import './dashboard.styles.scss';

import Navbar from '../../components/Navbar/Navbar.component';
import Sidebar from '../../components/sidebar/sidebar.components';

const Dashboard = () => (
    <div className="dashboard">
        <div className="dashboard__nav">
            <Navbar/>
        </div>
        <div className="dashboard__sidebar">
            <Sidebar />
        </div>
        <div className="dashboard__main">
            <h1>Main Bowl</h1>
        </div>
    </div>    
);

export default Dashboard;