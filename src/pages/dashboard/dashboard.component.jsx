import React from 'react';
import './dashboard.styles.scss';

import Navbar from '../../components/Navbar/Navbar.component';
import Sidebar from '../../components/sidebar/sidebar.components';
import DashboardMain from '../dashboard-main/dashboard-main.components';

const Dashboard = () => (
    <div className="dashboard">
        <div className="dashboard__nav">
            <Navbar/>
        </div>
        <div className="dashboard__sidebar">
            <Sidebar />
        </div>
        <div className="dashboard__main">
            <DashboardMain />            
        </div>
    </div>    
);

export default Dashboard;