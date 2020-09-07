import React from 'react';
import './Business-Category.styles.scss';

import { BiMessageAltAdd } from 'react-icons/bi';
import { FcCheckmark, FcCancel } from 'react-icons/fc';

const BusinessCategory = () => (
    <div className="category">
        <h2 className="category__heading">Business Category</h2>
        <div className="category__add">
            <h4 className="category__add--heading">Add Business Category</h4>
            <form className="category__form">
                <input type="text" className="category__input" placeholder="Category" />
                <button type="submit" className="category__submit"> <BiMessageAltAdd /> <span>Add</span> </button>
            </form>
        </div>
        <div className="category__table">
            <div className="category__table-header">
                <h5 className="category__table--heading">Business Categories</h5>
                <h5 className="category__table--heading">---</h5>
            </div>
            <div className="category__table-data">
                <p className="category__table--text">Test Category</p>
                <p className="category__table--text category__table--action"> Disable <FcCancel /> </p>
            </div>
            <div className="category__table-data">
                <p className="category__table--text">Test Category</p>
                <p className="category__table--text category__table--action">disable <FcCancel /> </p>
            </div>
            <div className="category__table-data">
                <p className="category__table--text">Test Category</p>
                <p className="category__table--text category__table--action"> Activate <FcCheckmark /> </p>
            </div>
            <div className="category__table-data">
                <p className="category__table--text">Test Category</p>
                <p className="category__table--text category__table--action">disable <FcCancel /> </p>
            </div>
        </div>
    </div>
);

export default BusinessCategory;