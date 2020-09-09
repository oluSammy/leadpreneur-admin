import React from 'react';
import './Agents-Data-Table.components.scss';

import { FcCancel, FcCheckmark } from 'react-icons/fc';

const AgentsDataTable = () => (
    <div className="agent-table">
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
    </div>
);

export default AgentsDataTable;