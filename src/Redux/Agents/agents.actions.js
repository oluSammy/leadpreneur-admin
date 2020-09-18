import { firestore, FieldValue } from '../../firebase/firebase.utils';
import { agentsActionTypes } from './agents.types';
import Swal from 'sweetalert2';
import firebase from 'firebase/app';

const addAgentStart = () => ({
    type: agentsActionTypes.ADD_AGENT_START
})

const addAgentSuccess = () => ({
    type: agentsActionTypes.ADD_AGENT_SUCCESS
});

const addAgentFailure = (errorMsg) => ({
    type: agentsActionTypes.ADD_AGENT_FAILURE,
    payload: errorMsg
});

const getAgentsStart = () => ({
    type: agentsActionTypes.GET_AGENTS_START
});

const getAgentsSuccess = agents => ({
    type: agentsActionTypes.GET_AGENTS_SUCCESS,
    payload: agents
});

const getAgentsFailure = errorMsg => ({
    type: agentsActionTypes.GET_AGENTS_FAILURE,
    payload: errorMsg
})

const getAgentStart = () => ({
    type: agentsActionTypes.GET_AGENT_START
});

const getAgentSuccess = agent => ({
    type: agentsActionTypes.GET_AGENT_SUCCESS,
    payload: agent
});

const getAgentFailure = errorMsg => ({
    type: agentsActionTypes.GET_AGENT_FAILURE,
    payload: errorMsg
});

const searchAgentStart = () => ({
    type: agentsActionTypes.SEARCH_AGENT_START
});

const searchAgentSuccess = agent => ({
    type: agentsActionTypes.SEARCH_AGENT_SUCCESS,
    payload: agent
});

const searchAgentFailure = errorMsg => ({
    type: agentsActionTypes.SEARCH_AGENT_FAILURE,
    payload: errorMsg
})

export const asyncAddAgent = (name) => {
    return async dispatch => {
        try {
            dispatch(addAgentStart());

            const agentRef = firestore.collection('agents');
            const updateAgentRef = firestore.collection('users_agents_count').doc('Kd3xKFGqDNZjnOolRxN2');
            await agentRef.add({
                name: name.toLowerCase(),
                isActivated: true,
                totalReferrers: 0,
                dateCreated: FieldValue,
                monthlyReferrer: []
            });
            await updateAgentRef.update({agents: firebase.firestore.FieldValue.increment(1)});

            dispatch(addAgentSuccess());
            Swal.fire(
                'Done!',
                `${name} added as an agent`,
                'success'
            )

        } catch (error) {
            dispatch(addAgentFailure(error));
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: 'Try Again'
            });
        }
    }
};

export const asyncGetAgents = () => {
    return async dispatch => {
        try {
            let agents = [];

            dispatch(getAgentsStart());
            const agentsRef = firestore.collection('agents');
            const agentsDocs = await agentsRef.get();
            agentsDocs.docs.forEach(doc => {
                agents.push({id: doc.id, data: doc.data()})
            });
            dispatch(getAgentsSuccess(agents))

        } catch (error) {
            dispatch(getAgentsFailure(error));
        }
    }
}

export const asyncGetAgent = (agentId) => {
    return async dispatch => {
        try {
            dispatch(getAgentStart())

            const agentRef = firestore.collection('agents').doc(`${agentId}`);
            const agentDoc = await agentRef.get();
            dispatch(getAgentSuccess(agentDoc.data()));

        } catch (error) {
            dispatch(getAgentFailure(error));
        }
    }
}

export const asyncSearchAgent = (searchStr) => {
    return async dispatch => {

        try {
            dispatch(searchAgentStart());
            let searchResult = [];
            const searchRef = firestore.collection('agents');
            const lowerSearchStr = searchStr.toLowerCase();
            const searchResultDoc = await searchRef.where('name', '==', lowerSearchStr).get();
            searchResultDoc.docs.forEach(doc => {
                searchResult.push({id: doc.id, data: doc.data()});
            });
            dispatch(searchAgentSuccess(searchResult));

        } catch (error) {
            dispatch(searchAgentFailure(error))
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: 'Try Again'
            });
        }
    }
}



