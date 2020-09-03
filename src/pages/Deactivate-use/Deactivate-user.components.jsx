import React from 'react'
import './Deactivate-user.styles.scss';
import UserDataTable from '../../components/user-data-table/user-data-table.component';


const DeactivateUserPage = () => (
    <div className="deactivate-user">
        <div className="deactivate-user__header">
            <h3 className="deactivate-user__heading">Activated Users</h3>
            <form className="deactivate-user__search">
                <input type="search" name="search" id="search" className="deactivate-user__search--input" 
                    placeholder="Search User by name or username"                
                />
                <button type="submit" className="deactivate-user__search--submit" >Search</button>
            </form>
        </div>
        <UserDataTable />        
    </div>
);

export default DeactivateUserPage;