import React, { useEffect } from 'react';
import './Agents.styles.scss';

import { HiOutlineDocumentAdd } from 'react-icons/hi';
import { FcCancel, FcCheckmark } from 'react-icons/fc';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { asyncGetAgents } from '../../Redux/Agents/agents.actions';
import { selectAgentsSlice } from '../../Redux/Agents/agents.selectors';
import { selectIsGettingAgents } from './../../Redux/Agents/agents.selectors';
import Loader from 'react-loader-spinner'

const Agents = ({ agents, getAgents, isGettingAgents }) => {

    useEffect(() => {
        const fetchAgents = async () => {
            await getAgents();
        };
        fetchAgents();
    }, [getAgents]);

    return (
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
            {isGettingAgents && !agents &&
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
            }
            {agents && agents.map(agent =>
                <div key={agent.id} className="agents__table-data">
                    <p className="agents__table-data--name">{agent.data.name}</p>
                    <p className="agents__table-data--id">{agent.id}</p>
                    <p className="agents__table-data--All number">{agent.data.totalReferrers}</p>
                    <p className="agents__table-data--referer number">{agent.data.totalReferrers}</p>
                    {
                        agent.isActivated ?
                        <p className="agents__table-data--action"> <FcCheckmark /> <span>Activate</span> </p> :
                        <p className="agents__table-data--action"> <FcCancel /> <span>Disable</span> </p>
                    }
                </div>
            )}
        </div>
        <div className="align-center">
            <button className="agents__more">More</button>
        </div>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    getAgents: () => dispatch(asyncGetAgents())
});

const mapStateToProps = state => ({
    agents: selectAgentsSlice(state),
    isGettingAgents: selectIsGettingAgents(state)
});

export default connect(mapStateToProps, mapDispatchToProps) (Agents);