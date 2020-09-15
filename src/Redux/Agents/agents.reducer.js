import { agentsActionTypes } from './agents.types';

const INIT_STATE = {
    isAddingAgent: false,
    addAgentErrorMsg: '',
    agents: null,
    isGettingAgents: false,
    getAgentsErrorMsg: ''
}

const agentReducer = (state=INIT_STATE, action) => {
    switch (action.type) {
        case agentsActionTypes.ADD_AGENT_START:
            return {
                ...state,
                isAddingAgent: true
            }
        case agentsActionTypes.ADD_AGENT_FAILURE:
            return {
                ...state,
                isAddingAgent: false,
                addAgentErrorMsg: ''
            }
        case agentsActionTypes.ADD_AGENT_SUCCESS:
            return {
                ...state,
                isAddingAgent: false
            }

        default: return state
    }
}

export default agentReducer;
