import React from 'react';
import './User.styles.scss';

const User = () => {
    return (
        <div className="user-id">
            <h1 className="user-id__header" >User Detail</h1>
            <div className="user-id__detail">
                <div className="user-id__row">
                    <h6 className="user-id__title">Name:</h6>
                    <p className="user-id__value">Olamide Adedeji</p>
                </div>
                <div className="user-id__row">
                    <h6 className="user-id__title">Username:</h6>
                    <p className="user-id__value">Olamide_Adedeji</p>
                </div>
                <div className="user-id__row">
                    <h6 className="user-id__title">Activation Status:</h6>
                    <p className="user-id__value">Olamide Adedeji</p>
                </div>
                <div className="user-id__row">
                    <h6 className="user-id__title">Activation Expiration Date:</h6>
                    <p className="user-id__value">Olamide Adedeji</p>
                </div>
                <div className="user-id__row">
                    <h6 className="user-id__title">Bio:</h6>
                    <p className="user-id__value">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, laborum?</p>
                </div>
                <div className="user-id__row">
                    <h6 className="user-id__title">Services Provided:</h6>
                    <p className="user-id__value">Olamide, Adedeji, lorem, ipsum, diabolical, eliminate</p>
                </div>
                <div className="user-id__row">
                    <h6 className="user-id__title">Business Category:</h6>
                    <p className="user-id__value">Manufacturing</p>
                </div>
                <div className="user-id__row">
                    <h6 className="user-id__title">State:</h6>
                    <p className="user-id__value">Lagos</p>
                </div>
                <div className="user-id__row">
                    <h6 className="user-id__title">City:</h6>
                    <p className="user-id__value">Surulere</p>
                </div>
                <div className="user-id__row">
                    <h6 className="user-id__title">LGA:</h6>
                    <p className="user-id__value">Surulere</p>
                </div>
                <div className="user-id__row">
                    <h6 className="user-id__title">Address:</h6>
                    <p className="user-id__value">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className="user-id__row">
                    <h6 className="user-id__title">Referred By:</h6>
                    <p className="user-id__value">Test Agent 2</p>
                </div>
            </div>
        </div>
    )
}

export default User
