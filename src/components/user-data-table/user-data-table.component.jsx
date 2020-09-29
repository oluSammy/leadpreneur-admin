import React from 'react';
import './user-data-table.component.scss';

import { FcCancel, FcCheckmark } from 'react-icons/fc';

const UserDataTable = ({ users, allUsers }) => {
    return(
        <div className="user-data">
            <div className="user-data__heading">
                <h4 className="user-data__heading-text">Name</h4>
                <h4 className="user-data__heading-text">Username</h4>
                <h4 className="user-data__heading-text">Email</h4>
                <h4 className="user-data__heading-text">Phone Number</h4>
                <h4 className="user-data__heading-text">Action</h4>
                <h4 className="user-data__heading-text">Expiration</h4>
            </div>
            {allUsers && users.map(user =>
                <div className="user-data__data-box">
                    <p className="user-data__text">{`${user.firstName} ${user.lastName}`}</p>
                    <p className="user-data__text">{user.username}</p>
                    <p className="user-data__text">{user.email}</p>
                    <p className="user-data__text user-data__number">{user.phoneNumber}</p>
                    <p className="user-data__text user-data__activate">
                        {user.isActivated ? <div><span>Activated</span> <FcCheckmark /></div> :
                        <div><span>Inactive</span> <FcCancel /></div>}
                    </p>
                    <p className="user-data__text user-data__number">{user.expiration ? 'yeah' : '---'}</p>
                </div>
            )}
        </div>
    )
};

export default UserDataTable;