import React from 'react';
import './Agents.styles.scss';

import { HiOutlineDocumentAdd } from 'react-icons/hi';
import { FcCancel, FcCheckmark } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Agents = () => (
    <div className="agents">
        <div className="agents__header">
            <h4 className="agents__heading">Agents</h4>
            <form className="agents__form">
                <input type="search" name="agent" id="agent" placeholder="Search Agents by name" className="agents__search"/>
                <button type="submit" className="agents__submit">Search</button>
            </form>
        </div>
        <div className="agents__filter">
            <div className="agents__month">
                <label htmlFor="agent-month" className="agents__label">Filter by Month</label>

                <select name="select-agents" id="agent-month">
                    <option value="all">All</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                    <option value="aug-2020">August 2020</option>
                </select>
            </div>
            <Link to="/new-agent" className="agents__new-btn"> <HiOutlineDocumentAdd /> New Agent</Link>
        </div>
        <div className="agents__table">
            <div className="agents__table-header">
                <h4 className="agents__table-header--heading">Name</h4>
                <h4 className="agents__table-header--heading">Id</h4>
                <h4 className="agents__table-header--heading">All </h4>
                <h4 className="agents__table-header--heading">Total Referrers</h4>
                <h4 className="agents__table-header--heading">---</h4>
            </div>
            <div className="agents__table-data">
                <p className="agents__table-data--name">Olumorin Samuel</p>
                <p className="agents__table-data--id">9489983jdhdg</p>
                <p className="agents__table-data--All">676</p>
                <p className="agents__table-data--referer">676</p>
                <p className="agents__table-data--action"> <FcCancel /> <span>Disable</span> </p>
            </div>
            <div className="agents__table-data">
                <p className="agents__table-data--name">Olumorin Samuel</p>
                <p className="agents__table-data--id">9489983jdhdg</p>
                <p className="agents__table-data--All">676</p>
                <p className="agents__table-data--referer">676</p>
                <p className="agents__table-data--action"> <FcCancel /> <span>Disable</span> </p>
            </div>
            <div className="agents__table-data">
                <p className="agents__table-data--name">Olumorin Samuel</p>
                <p className="agents__table-data--id">9489983jdhdg</p>
                <p className="agents__table-data--All">676</p>
                <p className="agents__table-data--referer">676</p>
                <p className="agents__table-data--action"> <FcCheckmark /> <span>Disable</span> </p>
            </div>
            <div className="agents__table-data">
                <p className="agents__table-data--name">Olumorin Samuel</p>
                <p className="agents__table-data--id">9489983jdhdg</p>
                <p className="agents__table-data--All">676</p>
                <p className="agents__table-data--referer">676</p>
                <p className="agents__table-data--action"> <FcCheckmark /> <span>Disable</span> </p>
            </div>
            <div className="agents__table-data">
                <p className="agents__table-data--name">Olumorin Samuel</p>
                <p className="agents__table-data--id">9489983jdhdg</p>
                <p className="agents__table-data--All">676</p>
                <p className="agents__table-data--referer">676</p>
                <p className="agents__table-data--action"> <FcCheckmark /> <span>Disable</span> </p>
            </div>
            <div className="agents__table-data">
                <p className="agents__table-data--name">Olumorin Samuel</p>
                <p className="agents__table-data--id">9489983jdhdg</p>
                <p className="agents__table-data--All">676</p>
                <p className="agents__table-data--referer">676</p>
                <p className="agents__table-data--action"> <FcCancel /> <span>Disable</span> </p>
            </div>
        </div>
        <div className="align-center">
            <button className="agents__more">More</button>
        </div>
    </div>
);

export default Agents;