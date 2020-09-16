import { createSelector } from 'reselect';

const selectAgents = state => state.agents;

export const isAddingAgentsSlice = createSelector(
    [selectAgents],
    agents => agents.isAddingAgent
);

export const selectAgentsSlice = createSelector(
    [selectAgents],
    agents => agents.agents
);

export const selectIsGettingAgents = createSelector(
    [selectAgents],
    agents => agents.isGettingAgents
);

export const selectIsGettingAgent = createSelector(
    [selectAgents],
    agents => agents.isGettingAgent
);

export const selectAgent = createSelector(
    [selectAgents],
    agents => agents.agent
);