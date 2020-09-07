import React from 'react';
import './Expired-Subscription.component.scss';
import SearchUser from './../../components/Search-User/Search-User.component';
import UserDataTable from './../../components/user-data-table/user-data-table.component';


const ExpiredSubscription = () => (
    <div className="expired">
        <div className="expired__header">
            <h1 className="expired__heading">Expired Subscription</h1>
            <SearchUser />
        </div>

        <UserDataTable />
    </div>
);

export default ExpiredSubscription;