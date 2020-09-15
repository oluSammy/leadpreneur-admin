import { createSelector } from 'reselect';

const selectAgents = state => state.agents;

export const isAddingAgentsSlice = createSelector(
    [selectAgents],
    agents => agents.isAddingAgent
);