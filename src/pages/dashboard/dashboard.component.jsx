import React, { useEffect } from 'react';
import './dashboard.styles.scss';

import Navbar from '../../components/Navbar/Navbar.component';
import Sidebar from '../../components/sidebar/sidebar.components';
import DashboardMain from '../dashboard-main/dashboard-main.components';
import { connect } from 'react-redux';
import { asyncGetUserCount } from './../../Redux/Count/user-count.actions';
import { selectSidebarState } from '../../Redux/User/user.selectors';

const Dashboard = ({ getUserCount, sidebarHidden }) => {
    useEffect(() => {
        const getUsersAndAgentsCount = async () => {
            await getUserCount();
        }
        getUsersAndAgentsCount();
    }, [getUserCount]);

    let sidebarStyle = {}
    if (!sidebarHidden && window.innerWidth < 1000) {
        sidebarStyle = {
            transform: 'translateX(.21%)'
        }
    }
    return (
    <div className="dashboard">
        <div className="dashboard__nav">
            <Navbar/>
        </div>
        <div className="dashboard__sidebar" style={sidebarStyle}>
            <Sidebar />
        </div>
        <div className="dashboard__main">
            <DashboardMain />
        </div>
    </div>
)};

const mapStateToProps = state => ({
    sidebarHidden: selectSidebarState(state)
})

const mapDispatchToProps = dispatch => ({
    getUserCount: () => dispatch(asyncGetUserCount())
})

export default connect(mapStateToProps, mapDispatchToProps) (Dashboard);