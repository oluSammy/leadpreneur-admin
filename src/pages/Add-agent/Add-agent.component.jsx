import React, { useState } from 'react';
import './Add-agent.styles.scss';

import { AiOutlineUserAdd } from 'react-icons/ai';
import { connect } from 'react-redux';
import { asyncAddAgent } from '../../Redux/Agents/agents.actions';
import { isAddingAgentsSlice } from './../../Redux/Agents/agents.selectors';

import Loader from 'react-loader-spinner';

const AddAgent = ({ addAgent, isAddingAgents }) => {
    const [name, setName] = useState("");
    
    const handleSubmit = async e => {
        e.preventDefault();
        await addAgent(name);
        setName("")
    }

    return (
        <div className="add-agent">
            <h1 className="add-agent__heading">Add New Agent</h1>
            <form onSubmit={handleSubmit} className="add-agent__form">
                <label htmlFor="agent-input" className="add-agent__label">Add Agent: </label>
                <input 
                    onChange={(e) => setName(e.target.value)}
                    type="text" name="agent-input" id="agent-input" 
                    className="add-agent__input" placeholder="Name" value={name}
                />
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <button type="submit" className="add-agent__submit"> 
                        <AiOutlineUserAdd className="add-agent__icon"/> 
                        <span>Add Agent</span> 
                    </button>
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