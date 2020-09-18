import React from 'react';
import './SearchAgent.styles.scss';
import { Link } from 'react-router-dom';
import { FcCheckmark, FcCancel } from 'react-icons/fc';
import { connect } from 'react-redux';
import { selectSearchResult } from '../../Redux/Agents/agents.selectors';

const SearchAgent = ({ searchResult }) => (
    <div className="search-agent">
        <h1 className="agents-search__heading">Agent</h1>
        <div className="agents__table">
            <div className="agents__table-header">
                <h4 className="agents__table-header--heading">Name</h4>
                <h4 className="agents__table-header--heading">Id</h4>
                <h4 className="agents__table-header--heading">Total Referrers</h4>
                <h4 className="agents__table-header--heading">---</h4>
            </div>
                {searchResult &&
                    searchResult.map(agent =>
                    <Link to={`/agent/${agent.id}`} key={agent.id} className="agents__table-data">
                        <p className="agents__table-data--name">{agent.data.name}</p>
                        <p className="agents__table-data--id">{agent.id}</p>
                        <p className="agents__table-data--referer number">{agent.data.totalReferrers}</p>
                        {
                        agent.isActivated ?
                        <p className="agents__table-data--action"> <FcCheckmark /> <span>Activate</span> </p> :
                        <p className="agents__table-data--action"> <FcCancel /> <span>Disable</span> </p>
                        }
                    </Link>
                    )
                }
        </div>
        <div className="align-center">
            <button className="agents__more">More</button>
        </div>
    </div>
);

const mapStateToProps = state => ({
    searchResult: selectSearchResult(state)
});

export default connect(mapStateToProps) (SearchAgent);