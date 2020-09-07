import React from 'react';
import './Search-Filter.styles.scss';

import { FcCancel, FcCheckmark } from 'react-icons/fc';    
import { Link } from 'react-router-dom';

const SearchFilter = () => (
    <div className="filter">
        <div className="filter__header">
            <h1 className="filter__heading">Filter Search</h1>
            <form className="filter__form">
                <input className="filter__input" type="text" name="filter-input" id="filter-input" placeholder="Search Country"/>
                <button type="submit" className="filter__submit">Search</button>
            </form>
        </div>
        <Link className="filter__link" to="/new-country">Add New Country</Link>
        <div className="filter__table">
            <div className="filter__table-header filter__grid">
                <h4 className="filter__table--heading">Country</h4>
                <h4 className="filter__table--heading">State</h4>
                <h4 className="filter__table--heading">City</h4>
                <h4 className="filter__table--heading">LGA</h4>
                <h4 className="filter__table--heading">---</h4>
            </div>
            <div className="filter__table-data filter__grid">
                <h5 className="filter__table--data">Nigeria</h5>
                <select name="filter__state" id="filter__state">
                    <option value="all">All</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                </select>
                <select name="filter__city" id="filter__city">
                    <option value="all">All</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                </select>
                <select name="filter__lga" id="filter__lga">
                    <option value="all">All</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                </select>
                <h5 className="filter__table--data filter__table--action">Disable <FcCancel /> </h5>
            </div>
            <div className="filter__table-data filter__grid">
                <h5 className="filter__table--data">Nigeria</h5>
                <select name="filter__state" id="filter__state">
                    <option value="all">All</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                </select>
                <select name="filter__city" id="filter__city">
                    <option value="all">All</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                </select>
                <select name="filter__lga" id="filter__lga">
                    <option value="all">All</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                </select>
                <h5 className="filter__table--data filter__table--action"> Activate <FcCheckmark /> </h5>
            </div>
            <div className="filter__table-data filter__grid">
                <h5 className="filter__table--data">Nigeria</h5>
                <select name="filter__state" id="filter__state">
                    <option value="all">All</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                </select>
                <select name="filter__city" id="filter__city">
                    <option value="all">All</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                </select>
                <select name="filter__lga" id="filter__lga">
                    <option value="all">All</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                </select>
                <h5 className="filter__table--data filter__table--action">Disable <FcCancel /> </h5>
            </div>
            <div className="filter__table-data filter__grid">
                <h5 className="filter__table--data">Nigeria</h5>
                <select name="filter__state" id="filter__state">
                    <option value="all">All</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                </select>
                <select name="filter__city" id="filter__city">
                    <option value="all">All</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                </select>
                <select name="filter__lga" id="filter__lga">
                    <option value="all">All</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                </select>
                <h5 className="filter__table--data filter__table--action"> Activate <FcCheckmark /> </h5>
            </div>
            <div className="filter__table-data filter__grid">
                <h5 className="filter__table--data">Nigeria</h5>
                <select name="filter__state" id="filter__state">
                    <option value="all">All</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                </select>
                <select name="filter__city" id="filter__city">
                    <option value="all">All</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                </select>
                <select name="filter__lga" id="filter__lga">
                    <option value="all">All</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                </select>
                <h5 className="filter__table--data filter__table--action">Disable <FcCancel /> </h5>
            </div>
            <div className="filter__table-data filter__grid">
                <h5 className="filter__table--data">Nigeria</h5>
                <select name="filter__state" id="filter__state">
                    <option value="all">All</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                </select>
                <select name="filter__city" id="filter__city">
                    <option value="all">All</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                </select>
                <select name="filter__lga" id="filter__lga">
                    <option value="all">All</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                </select>
                <h5 className="filter__table--data filter__table--action"> Activate <FcCheckmark /> </h5>
            </div>
            <div className="filter__table-data filter__grid">
                <h5 className="filter__table--data">Nigeria</h5>
                <select name="filter__state" id="filter__state">
                    <option value="all">All</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                </select>
                <select name="filter__city" id="filter__city">
                    <option value="all">All</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                </select>
                <select name="filter__lga" id="filter__lga">
                    <option value="all">All</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                </select>
                <h5 className="filter__table--data filter__table--action">Disable <FcCancel /> </h5>
            </div>
            <div className="filter__table-data filter__grid">
                <h5 className="filter__table--data">Nigeria</h5>
                <select name="filter__state" id="filter__state">
                    <option value="all">All</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                </select>
                <select name="filter__city" id="filter__city">
                    <option value="all">All</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                </select>
                <select name="filter__lga" id="filter__lga">
                    <option value="all">All</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                </select>
                <h5 className="filter__table--data filter__table--action"> Activate <FcCheckmark /> </h5>
            </div>
        </div>
    </div>
);

export default SearchFilter;