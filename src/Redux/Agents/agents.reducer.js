import { agentsActionTypes } from './agents.types';

const INIT_STATE = {
    isAddingAgent: false,
    addAgentErrorMsg: '',
    agents: [],
    isGettingAgents: false,
    getAgentsErrorMsg: '',
    agent: [],
    isGettingAgent: false,
    getAgentErrorMsg: '',
    isSearchingAgent: false,
    searchResult: [],
    searchError: '',
    isActivatingAgent: false,
    isDeactivatingAgent: false,
    activateAgentErrMsg: '',
    deactivateAgentErrMsg: ''
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
        case agentsActionTypes.GET_AGENT_START:
            return {
                ...state,
                isGettingAgent: true
            }
        case agentsActionTypes.GET_AGENT_SUCCESS:
            return {
                ...state,
                isGettingAgent: false,
                agent: action.payload
            }
        case agentsActionTypes.GET_AGENT_FAILURE:
            return {
                ...state,
                isGettingAgent: false,
                getAgentErrorMsg: action.payload
            }
        case agentsActionTypes.SEARCH_AGENT_START:
            return {
                ...state,
                searchResult: [],
                searchError: '',
                isSearchingAgent: true,
            }
        case agentsActionTypes.SEARCH_AGENT_SUCCESS:
            return {
                ...state,
                isSearchingAgent: false,
                searchResult: action.payload
            }
        case agentsActionTypes.SEARCH_AGENT_FAILURE:
            return {
                ...state,
                isSearchingAgent: false,
                searchError: action.payload
            }
        case agentsActionTypes.ACTIVATE_AGENT_START:
            return {
                ...state,
                isActivatingAgent: true
            }
        case agentsActionTypes.ACTIVATE_AGENT_SUCCESS:
            return {
                ...state,
                isActivatingAgent: false
            }
        case agentsActionTypes.ACTIVATE_AGENT_FAILURE:
            return {
                ...state,
                isActivatingAgent: false,
                activateAgentErrMsg: action.payload
            }
        case agentsActionTypes.DEACTIVATE_AGENT_START:
            return {
                ...state,
                isDeactivatingAgent: true
            }
        case agentsActionTypes.DEACTIVATE_AGENT_SUCCESS:
            return {
                ...state,
                isDeactivatingAgent: false
            }
        case agentsActionTypes.DEACTIVATE_AGENT_FAILURE:
            return {
                ...state,
                isDeactivatingAgent: false,
                deactivateAgentErrMsg: action.payload
            }

        default: return state
    }
}

export default agentReducer;
