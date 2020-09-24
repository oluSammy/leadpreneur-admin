import React, { useState, useEffect } from 'react';
import './Business-Category.styles.scss';

import { BiMessageAltAdd } from 'react-icons/bi';
import { connect } from 'react-redux';
import { asyncAddCategory, asyncGetCategories } from './../../Redux/Category/category.actions';
import { selectIsAddingCategories } from './../../Redux/Category/category.selectors';

const BusinessCategory = ({ addCategory, isAddingCategories, getCategory }) => {
    const [categoryName, setCategoryName] = useState("");

    useEffect(() => {
        getCategory();
    }, [])

    const handleSubmit = async e => {
        e.preventDefault();
        addCategory(categoryName);
        setCategoryName("");
    }

    return(
        <div className="category">
            <h2 className="category__heading">Business Category</h2>
            <div className="category__add">
                <h4 className="category__add--heading">Add Business Category</h4>
                <form onSubmit={handleSubmit} className="category__form">
                    <input
                        onChange={e => setCategoryName(e.target.value)}
                        type="text" className="category__input" value={categoryName}
                        placeholder="Category" required
                    />
                    {isAddingCategories ?
                        <button disabled className="category__submit"> <BiMessageAltAdd /> <span>Add</span> </button> :
                        <button type="submit" className="category__submit"> <BiMessageAltAdd /> <span>Add</span> </button>
                    }
                </form>
            </div>
            <div className="category__table">
                <div className="category__table-header">
                    <h5 className="category__table--heading">Business Categories</h5>
                </div>
                <div className="category__table-data">
                    <p className="category__table--text">Test Category</p>
                </div>
                <div className="category__table-data">
                    <p className="category__table--text">Test Category</p>
                </div>
                <div className="category__table-data">
                    <p className="category__table--text">Test Category</p>
                </div>
                <div className="category__table-data">
                    <p className="category__table--text">Test Category</p>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    isAddingCategories: selectIsAddingCategories(state)
})

const mapDispatchToProps = dispatch => ({
    addCategory: categoryName => dispatch(asyncAddCategory(categoryName)),
    getCategory: () => dispatch(asyncGetCategories())
})

export default connect(mapStateToProps, mapDispatchToProps) (BusinessCategory);