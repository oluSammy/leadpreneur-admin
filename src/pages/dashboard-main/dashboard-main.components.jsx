import React from 'react';
import './dashboard-main.styles.scss';
import { Route, Switch } from 'react-router-dom';
import Homepage from './../Homepage/Homepage.component';
import Login from './../login-page/login.component';
import UsersPage from './../users-page/users-page.components';


const DashboardMain = () => (
    <div className="dashboard-main">
        <Switch>
            <Route exact path="/users" component={UsersPage} />
            <Route exact path={["/", "/dashboard"]} component={Homepage} />
            <Route exact path="/login" component={Login} />
        </Switch>
    </div>
)
export default DashboardMain;