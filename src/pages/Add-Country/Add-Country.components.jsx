import React from 'react';
import './Add-Country.styles.scss';

import { GiWorld } from 'react-icons/gi';

const AddCountry = () => (
    <div className="add-country">
        <div className="add-country__header">
            <h1 className="add-country__heading">Add Country</h1> <GiWorld className="add-country__icon" />
        </div>
        <form className="add-country__form">
            <div className="add-country__form-input">
                <label className="add-country__label" htmlFor="country-name">Country Name:</label>
                <input className="add-country__input" type="text" name="country-name" id="country-name" required/>
            </div>
            <div className="add-country__form-input">
                <label className="add-country__label" htmlFor="country-state">States:</label>
                <input className="add-country__input" type="text" name="country-state" id="country-state" required/>
            </div>
            <div className="add-country__form-input">
                <label className="add-country__label" htmlFor="country-city">Cities:</label>
                <input className="add-country__input" type="text" name="country-city" id="country-city" required/>
            </div>
            <button className="add-country__submit" type="submit">Add Country</button>
        </form>
    </div>
);

export default AddCountry;