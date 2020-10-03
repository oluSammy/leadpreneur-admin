import React from 'react';
import './user-data-table.component.scss';

import { FcCancel, FcCheckmark } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { timeStampToDate } from './../../utilityFunctions/timeStampToDate';

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
                <Link to={`/user/${user.id}`} className="user-data__data-box" key={user.id}>
                    <p className="user-data__text">{`${user.data.firstName} ${user.data.lastName}`}</p>
                    <p className="user-data__text">{user.data.username}</p>
                    <p className="user-data__text">{user.data.email}</p>
                    <p className="user-data__text user-data__number">{user.data.phoneNumber}</p>
                    <p className="user-data__text user-data__activate">
                        {user.data.isActivated ? <><span>Activated</span> <FcCheckmark /></> :
                        <span><span>Inactive</span> <FcCancel /></span>}
                    </p>
                    <p className="user-data__text user-data__number">{user.data.expiration ?
                    timeStampToDate(user.data.expiration) :
                    '---'}</p>
                </Link>
            )}
        </div>
    )
};

export default UserDataTable;