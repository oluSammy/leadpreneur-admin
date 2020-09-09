import React from 'react';
import './User-Search.components.scss';
import UserDataTable from '../../components/user-data-table/user-data-table.component';


const UserSearch = () => (
    <div className="user-search">
        <h1 className="user-search__heading" >Hello Search User page</h1>
        <UserDataTable />
    </div>
);

export default UserSearch;