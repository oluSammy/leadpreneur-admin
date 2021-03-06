import React from 'react';
import './dashboard-main.styles.scss';

import { Route, Switch } from 'react-router-dom';
import Homepage from './../Homepage/Homepage.component';
import UsersPage from './../users-page/users-page.components';
import ActivateUserPage from './../Activate-user-page/activate-user.component';
import DeactivateUserPage from './../Deactivate-use/Deactivate-user.components';
import ExpiredSubscription from '../Expired-subscription/Expired-Subscription.component';
import Agents from '../Agents/Agents.components';
import AddAgent from '../Add-agent/Add-agent.component';
import BusinessCategory from '../Business-Category/Business-Category.components';
import UserSearch from './../Search-User/User-Search.components';
import AgentPage from '../AgentPage/AgentPage.component';
import SearchAgent from '../search-agent/SearchAgent.component';
import User from './../User/User.component';


const DashboardMain = () => (
    <div className="dashboard-main">
        <Switch>
            <Route exact path="/users" component={UsersPage} />
            <Route exact path={["/", "/dashboard"]} component={Homepage} />
            <Route exact path="/activate-users" component={ActivateUserPage} />
            <Route exact path="/deactivate-users" component={DeactivateUserPage} />
            <Route exact path="/expired-subscription" component={ExpiredSubscription} />
            <Route exact path="/agents" component={Agents} />
            <Route exact path="/new-agent" component={AddAgent} />
            <Route exact path="/category" component={BusinessCategory} />
            <Route exact path="/search-user/:id" component={UserSearch} />
            <Route exact path="/agent/:id" component={AgentPage} />
            <Route exact path="/search-agent/:id" component={SearchAgent} />
            <Route exact path="/user/:id" component={User} />
        </Switch>
    </div>
)
export default DashboardMain;