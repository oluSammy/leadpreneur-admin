import React, { useState } from 'react';
import './Add-agent.styles.scss';

import { AiOutlineUserAdd } from 'react-icons/ai';
import { connect } from 'react-redux';
import { asyncAddAgent } from '../../Redux/Agents/agents.actions';
import { isAddingAgentsSlice } from './../../Redux/Agents/agents.selectors';

import Loader from 'react-loader-spinner';

const AddAgent = ({ addAgent, isAddingAgents }) => {
    const [agentCredentials, setAgentCredentials] = useState({ name: '', email: '', phone: '', address: '' });

    const handleSubmit = async e => {
        e.preventDefault();
        await addAgent(agentCredentials);
        setAgentCredentials({ name: '', email: '', phone: '', address: '' })
    }

    const handleChange = e => {
        const { value, name } = e.target;
        setAgentCredentials({...agentCredentials, [name]: value })
    }

    return (
        <div className="add-agent">
            <h1 className="add-agent__heading">Add New Consultant</h1>
            <form onSubmit={handleSubmit} className="add-agent__form">
                <div className="add-agent__form-group">
                    <label htmlFor="agent-input" className="add-agent__label">Name: </label>
                    <input
                        onChange={handleChange}
                        type="text" name="name" id="agent-input" required
                        className="add-agent__input" placeholder="Name" value={agentCredentials.name}
                    />
                </div>
                <div className="add-agent__form-group">
                    <label htmlFor="agent-email" className="add-agent__label">Email: </label>
                    <input
                        onChange={handleChange}
                        type="email" name="email" id="agent-email" required
                        className="add-agent__input" placeholder="Email" value={agentCredentials.email}
                    />
                </div>
                <div className="add-agent__form-group">
                    <label htmlFor="agent-phone" className="add-agent__label">Phone No: </label>
                    <input
                        onChange={handleChange}
                        type="number" name="phone" id="agent-phone" required
                        className="add-agent__input" placeholder="Phone Number" value={agentCredentials.phone}
                    />
                </div>
                <div className="add-agent__form-group">
                    <label htmlFor="agent-address" className="add-agent__label">Address: </label>
                    <textarea onChange={handleChange} value={agentCredentials.address}
                        className="add-agent__input" name="address" id="agent-address" cols="10" rows="3"
                        placeholder="Address"
                    />
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    {isAddingAgents ?
                        <button className="add-agent__submit" disabled style={{color: '#0A0A56'}}>
                            <AiOutlineUserAdd className="add-agent__icon"/>
                            <span style={{color: '#ffffff'}}>Adding Agent</span>
                        </button> :
                        <button type="submit" className="add-agent__submit">
                            <AiOutlineUserAdd className="add-agent__icon"/>
                            <span>Add Consultant</span>
                        </button>
                    }
                    {isAddingAgents &&
                        <Loader
                            style={{marginTop: '3rem', marginLeft: '2rem'}}
                            type="Circles"
                            color="#0A0A56"
                            height={20}
                            width={20}
                        />
                    }
                </div>
            </form>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addAgent: (name) => dispatch(asyncAddAgent(name))
});

const mapStateToProps = state => ({
    isAddingAgents: isAddingAgentsSlice(state)
})

export default connect(mapStateToProps, mapDispatchToProps) (AddAgent);