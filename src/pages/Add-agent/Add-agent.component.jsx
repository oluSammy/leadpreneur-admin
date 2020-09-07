import React from 'react';
import './Add-agent.styles.scss';

import { AiOutlineUserAdd } from 'react-icons/ai';

const AddAgent = () => (
    <div className="add-agent">
        <h1 className="add-agent__heading">Add New Agent</h1>
        <form className="add-agent__form">
            <label htmlFor="agent-input" className="add-agent__label">Add Agent: </label>
            <input type="text" name="agent-input" id="agent-input" className="add-agent__input" placeholder="Name" />
            <button type="submit" className="add-agent__submit"> 
                <AiOutlineUserAdd className="add-agent__icon"/> 
                <span>Add Agent</span> 
            </button>
        </form>
    </div>
);

export default AddAgent;