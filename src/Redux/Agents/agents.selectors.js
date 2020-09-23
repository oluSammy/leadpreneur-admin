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

export const selectSearchResult = createSelector(
    [selectAgents],
    agents => agents.searchResult
);

export const selectIsSearching = createSelector(
    [selectAgents],
    agents => agents.isSearchingAgent
);

export const selectErrMsg = createSelector(
    [selectAgents],
    agents => agents.searchError
);