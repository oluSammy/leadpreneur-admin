import React from 'react';
import Navbar from '../../components/Navbar/Navbar.component';
import './dashboard.styles.scss';

const Dashboard = () => (
    <div className="dashboard">
        <div className="dashboard__nav">
            <Navbar/>
        </div>
        <div className="dashboard__sidebar">
            <h1>Sidebar</h1>
        </div>
        <div className="dashboard__main">
            <h1>Main Bowl</h1>
        </div>
    </div>    
);

export default Dashboard;