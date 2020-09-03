import React from 'react';
import './activate-user.styles.scss';
import UserDataTable from '../../components/user-data-table/user-data-table.component';


const ActivateUserPage = () => (
    <div className="activate-user">
        <div className="activate-user__header">
            <h3 className="activate-user__heading">Inactivated Users</h3>
            <form className="activate-user__search">
                <input type="search" name="search" id="search" className="activate-user__search--input" 
                    placeholder="Search User by name or username"                
                />
                <button type="submit" className="activate-user__search--submit" >Search</button>
            </form>
        </div>
        <UserDataTable />        
    </div>
);

export default ActivateUserPage;