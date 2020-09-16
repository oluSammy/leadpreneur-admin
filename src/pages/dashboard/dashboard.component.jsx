import React, { useEffect } from 'react';
import './dashboard.styles.scss';

import Navbar from '../../components/Navbar/Navbar.component';
import Sidebar from '../../components/sidebar/sidebar.components';
import DashboardMain from '../dashboard-main/dashboard-main.components';
import { connect } from 'react-redux';
import { asyncGetUserCount } from './../../Redux/Count/user-count.actions';

const Dashboard = ({ getUserCount }) => {
    useEffect(() => {
        const getUsersAndAgentsCount = async () => {
            await getUserCount();
        }
        getUsersAndAgentsCount();
    })
    return (
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
)};

const mapDispatchToProps = dispatch => ({
    getUserCount: () => dispatch(asyncGetUserCount())
})

export default connect(null, mapDispatchToProps) (Dashboard);