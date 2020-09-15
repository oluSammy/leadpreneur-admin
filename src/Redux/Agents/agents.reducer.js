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
        case agentsActionTypes.GET_AGENTS_START: 
            return {
                ...state,
                isGettingAgents: true
            }
        case agentsActionTypes.GET_AGENTS_SUCCESS:
            return {
                ...state,
                isGettingAgents: false,
                agents: action.payload
            }
        case agentsActionTypes.GET_AGENTS_FAILURE:
            return {
                ...state,
                isGettingAgents: false,
                getAgentsErrorMsg: action.payload
            }

        default: return state
    }
}

export default agentReducer;
