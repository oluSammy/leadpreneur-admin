import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Agents-Search.styles.scss';
import { connect } from 'react-redux';
import { asyncGetAgent } from '../../Redux/Agents/agents.actions';
import { selectAgent, selectIsGettingAgent } from '../../Redux/Agents/agents.selectors';


const AgentsSearch = ({ agent, getAgent, isGettingAgent }) => {
    let { id } = useParams();

    useEffect(() => {
        const getCurrentAgent = async () => {
            await getAgent(id);
        }
        getCurrentAgent();
    }, [getAgent, id])
    return (
        <div className="agents-search">
            <h1 className="agents-search__heading">Search Agent {id}</h1>
            {!isGettingAgent && agent &&
                <div>
                    <li className="agents-search__list">
                        <h6 className="agents-search__title">Name:</h6>
                        <p className="agents-search__tag">{agent.name}</p>
                    </li>
                    <li className="agents-search__list">
                        <h6 className="agents-search__title">Status:</h6>
                        <p className="agents-search__tag">
                            {agent.isActivated ? 'Active' : 'Inactive' }
                            <span className="agents-search__action">
                            {agent.isActivated ? 'Deactivate' : 'Activate' }
                            </span>
                        </p>
                    </li>
                    <li className="agents-search__list">
                        <h6 className="agents-search__title">Total Referrers:</h6>
                        <p className="agents-search__tag number">{agent.totalReferrers}</p>
                    </li>
                    {agent.monthlyReferrer.map(obj => {
                        const [key] = Object.entries(obj);
                        return(
                            <li className="agents-search__list">
                                <h6 className="agents-search__title agents-search__month">{key[0].split('_').join(' ')}</h6>
                                <p className="agents-search__tag number">{key[1]}</p>
                            </li>)
                    })}
                </div>

            }
        </div>
    )
};

const mapStateToProps = state => ({
    agent: selectAgent(state),
    isGettingAgent: selectIsGettingAgent(state)
});

const mapDispatchToProps = dispatch => ({
    getAgent: (id) => dispatch(asyncGetAgent(id))
});

export default connect(mapStateToProps, mapDispatchToProps) (AgentsSearch);