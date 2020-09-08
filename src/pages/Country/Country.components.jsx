import React from 'react';
import './Country.styles.scss';

const Country = () => (
    <div className="country-page">
        <h1 className="country-page__heading">Nigeria</h1>
        <form className="country-page__form country-page__form--state">
            <div className="country-page__form-group">
                <label htmlFor="state" className="country-page__label">Add States:</label>
                <input type="text" name="state" id="state" className="country-page__form-input" required />
            </div>
            <button className="country-page__submit" type="submit">Add</button>
        </form>
        <form className="country-page__form country-page__form--state">
            <div className="country-page__form-group">
                <label htmlFor="city" className="country-page__label">Add cities:</label>
                <input type="text" name="city" id="city" className="country-page__form-input" required />
            </div>
            <button className="country-page__submit" type="submit">Add</button>
        </form>

        <div className="country-page__table country-page__table--states">
            <div className="country-page__table-header country-page__grid">
                <h4 className="country-page__table-heading">States</h4>
                <h4 className="country-page__table-heading">---</h4>
            </div>
            <div className="country-page__table-data country-page__grid">
                <p className="country-page__table-text">Kaduna</p>
                <p className="country-page__table-text country-page__table-action">Disable</p>
            </div>
            <div className="country-page__table-data country-page__grid">
                <p className="country-page__table-text">Kaduna</p>
                <p className="country-page__table-text country-page__table-action">Activate</p>
            </div>
            <div className="country-page__table-data country-page__grid">
                <p className="country-page__table-text">Kaduna</p>
                <p className="country-page__table-text country-page__table-action">Disable</p>
            </div>
        </div>

        <div className="country-page__table country-page__table--cities">
            <div className="country-page__table-header country-page__grid">
                <h4 className="country-page__table-heading">Cities</h4>
                <h4 className="country-page__table-heading">---</h4>
            </div>
            <div className="country-page__table-data country-page__grid">
                <p className="country-page__table-text">Kaduna</p>
                <p className="country-page__table-text country-page__table-action">Activate</p>
            </div>
            <div className="country-page__table-data country-page__grid">
                <p className="country-page__table-text">Kaduna</p>
                <p className="country-page__table-text country-page__table-action">Disable</p>
            </div>
            <div className="country-page__table-data country-page__grid">
                <p className="country-page__table-text">Kaduna</p>
                <p className="country-page__table-text country-page__table-action">Disable</p>
            </div>
        </div>


    </div>
);

export default Country;