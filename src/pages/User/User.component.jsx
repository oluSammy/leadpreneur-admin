import React, { useEffect } from 'react';
import './User.styles.scss';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectUsersSlice } from '../../Redux/Users/users.selectors';
import { asyncGetUserDetail, asyncUpdateActivationStatus } from './../../Redux/Users/users.actions';
import { selectIsGettingUserDetail, selectUserDetail } from './../../Redux/Users/users.selectors';
import { timeStampToDate } from './../../utilityFunctions/timeStampToDate';

const User = ({ users, getUserDetail, isGettingUserDetail, userDetail, updateUserStatus }) => {
    let { id } = useParams();

    useEffect(() => {
        const userDetails = async () => {
            await getUserDetail(id);
        }
        userDetails();
    }, [getUserDetail, id]);

    return (
        isGettingUserDetail || !userDetail ? 'loading' :
        <div className="user-id">
            <h1 className="user-id__header" >User Detail</h1>
            <div className="user-id__detail">
                <div className="user-id__row">
                    <h6 className="user-id__title">Name:</h6>
                    <p className="user-id__value">{`${userDetail.lastName} ${userDetail.firstName}`}</p>
                </div>
                <div className="user-id__row">
                    <h6 className="user-id__title">Username:</h6>
                    <p className="user-id__value">{userDetail.username}</p>
                </div>
                <div className="user-id__row">
                    <h6 className="user-id__title">Email:</h6>
                    <p className="user-id__value">{userDetail.email}</p>
                </div>
                <div className="user-id__row">
                    <h6 className="user-id__title">Phone Number:</h6>
                    <p className="user-id__value">{userDetail.phoneNumber}</p>
                </div>
                <div className="user-id__row">
                    <h6 className="user-id__title">Registration Date:</h6>
                    <p className="user-id__value">---</p>
                </div>
                <div className="user-id__row">
                    <h6 className="user-id__title">Activation Status:</h6>
                    <p className="user-id__value">
                        {userDetail.isActivated ? 'Activated' : 'InActive'}
                    </p>
                    {userDetail.isActivated ? <p onClick={() => updateUserStatus('deactivate', id)} className="user-id__action">Deactivate</p>:
                    <p onClick={() => updateUserStatus('activate', id)} className="user-id__action">Activate </p> }
                </div>
                <div className="user-id__row">
                    <h6 className="user-id__title">Activation Expiration Date:</h6>
                    <p className="user-id__value">
                        {userDetail.expiration ? timeStampToDate(userDetail.expiration) : '---'}
                    </p>
                </div>
                <div className="user-id__row">
                    <h6 className="user-id__title">Bio:</h6>
                    <p className="user-id__value">{userDetail.bio}</p>
                </div>
                <div className="user-id__row">
                    <h6 className="user-id__title">Services Provided:</h6>
                    <p className="user-id__value">
                        {userDetail.servicesProvided.map(service => `${service}, `)}
                    </p>
                </div>
                <div className="user-id__row">
                    <h6 className="user-id__title">Business Category:</h6>
                    <p className="user-id__value">{userDetail.category}</p>
                </div>
                <div className="user-id__row">
                    <h6 className="user-id__title">State:</h6>
                    <p className="user-id__value">{userDetail.state}</p>
                </div>
                <div className="user-id__row">
                    <h6 className="user-id__title">City:</h6>
                    <p className="user-id__value">{userDetail.city}</p>
                </div>
                <div className="user-id__row">
                    <h6 className="user-id__title">Address:</h6>
                    <p className="user-id__value">{userDetail.address}</p>
                </div>
                <div className="user-id__row">
                    <h6 className="user-id__title">Referred By:</h6>
                    <p className="user-id__value">{userDetail.referredBy}</p>
                </div>
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    getUserDetail: userId => dispatch(asyncGetUserDetail(userId)),
    updateUserStatus: (status, id) => dispatch(asyncUpdateActivationStatus(status, id))
})

const mapStateToProps = state => ({
    users: selectUsersSlice(state),
    isGettingUserDetail: selectIsGettingUserDetail(state),
    userDetail: selectUserDetail(state)
})

export default connect(mapStateToProps, mapDispatchToProps) (User)
