import React from 'react';
import './Agents-Search.styles.scss';


const AgentsSearch = () => (
    <div className="agents-search">
        <h1 className="agents-search__heading">Search Agent</h1>
        <li className="agents-search__list">
            <h6 className="agents-search__title">Name:</h6>
            <p className="agents-search__tag">Test agent 3</p>
        </li>
        <li className="agents-search__list">
            <h6 className="agents-search__title">Status:</h6>
            <p className="agents-search__tag">Active <span className="agents-search__action">Deactivate</span> </p>
        </li>
        <li className="agents-search__list">
            <h6 className="agents-search__title">Total Referrers:</h6>
            <p className="agents-search__tag number">200</p>
        </li>
        <li className="agents-search__list">
            <h6 className="agents-search__title">August 2020</h6>
            <p className="agents-search__tag number">20</p>
        </li>
        <li className="agents-search__list">
            <h6 className="agents-search__title">September 2020</h6>
            <p className="agents-search__tag number">200</p>
        </li>
        <li className="agents-search__list">
            <h6 className="agents-search__title">November 2020</h6>
            <p className="agents-search__tag number">200</p>
        </li>
    </div>
);

export default AgentsSearch;