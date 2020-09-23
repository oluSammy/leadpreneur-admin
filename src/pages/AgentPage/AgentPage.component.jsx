import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './AgentPage.styles.scss';
import { connect } from 'react-redux';
import { asyncDeactivateAgent, asyncGetAgent } from '../../Redux/Agents/agents.actions';
import { selectAgent, selectIsGettingAgent } from '../../Redux/Agents/agents.selectors';
import Loader from 'react-loader-spinner';
import { asyncActivateAgent } from './../../Redux/Agents/agents.actions';


const AgentPage = ({ agent, getAgent, isGettingAgent, activateAgent, deactivateAgent }) => {
    let { id } = useParams();

    useEffect(() => {
        const getCurrentAgent = async () => {
            await getAgent(id);
        }
        getCurrentAgent();
    }, [getAgent, id])

    const updateAgent = () => {
        if(!agent.isActivated) {
            activateAgent(id);
        } else {
            deactivateAgent(id);
        }
    }
    return (
        <div className="agents-search">
            <h1 className="agents-search__heading">Agent</h1>
            {isGettingAgent &&
                <Loader
                    type="ThreeDots"
                    color="#0c0432"
                    height={60}
                    width={60}
                />
            }
            {!isGettingAgent && agent &&
                <div>
                    <li className="agents-search__list">
                        <h6 className="agents-search__title">Name:</h6>
                        <p className="agents-search__tag">{agent.name}</p>
                    </li>
                    <li className="agents-search__list">
                        <h6 className="agents-search__title">Status:</h6>
                        <div className="agents-search__status">
                            <p className="agents-search__status--status">{agent.isActivated ? 'Active' : 'Inactive' }</p>
                            <p onClick={updateAgent} className="agents-search__status--action" >
                                {agent.isActivated ? 'Deactivate' : 'Activate' }
                            </p>
                        </div>
                    </li>
                    <li className="agents-search__list">
                        <h6 className="agents-search__title">Total Referrers:</h6>
                        <p className="agents-search__tag number">{agent.totalReferrers}</p>
                    </li>
                    {agent.monthlyReferrer && agent.monthlyReferrer.map(obj => {
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
    getAgent: (id) => dispatch(asyncGetAgent(id)),
    activateAgent: (id) => dispatch(asyncActivateAgent(id)),
    deactivateAgent: id => dispatch(asyncDeactivateAgent(id))
});

export default connect(mapStateToProps, mapDispatchToProps) (AgentPage);