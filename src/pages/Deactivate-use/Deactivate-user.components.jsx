import React from 'react'
import './Deactivate-user.styles.scss';
import UserDataTable from '../../components/user-data-table/user-data-table.component';
import SearchUser from '../../components/Search-User/Search-User.component';


const DeactivateUserPage = () => (
    <div className="deactivate-user">
        <div className="deactivate-user__header">
            <h3 className="deactivate-user__heading">Activated Users</h3>
            <SearchUser />
        </div>
        <UserDataTable />        
    </div>
);

export default DeactivateUserPage;