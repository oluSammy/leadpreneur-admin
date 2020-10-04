import React from 'react';
import './activate-user.styles.scss';
import UserDataTable from '../../components/user-data-table/user-data-table.component';
import SearchUser from '../../components/Search-User/Search-User.component';


const ActivateUserPage = () => (
    <div className="activate-user">
        <div className="activate-user__header">
            <h3 className="activate-user__heading">Inactive Users</h3>
            <SearchUser />
        </div>
        <UserDataTable />
    </div>
);

export default ActivateUserPage;