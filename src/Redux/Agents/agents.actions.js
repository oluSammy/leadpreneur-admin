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

export const asyncAddAgent = agentCredentials => {
    return async dispatch => {
        try {
            dispatch(addAgentStart());
            const { name, email, phone, address } = agentCredentials;
            const agentRef = firestore.collection('agents');
            const updateAgentRef = firestore.collection('users_agents_count').doc('Kd3xKFGqDNZjnOolRxN2');
            await agentRef.add({
                name: name.toLowerCase(),
                isActivated: true,
                totalReferrers: 0,
                dateCreated: FieldValue,
                monthlyReferrer: [],
                email,
                phone,
                address
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
            agentsRef.onSnapshot(docSnapshot => {
                docSnapshot.docs.forEach(doc => {
                    agents.push({id: doc.id, data: doc.data()})
                });
                dispatch(getAgentsSuccess(agents))
            });

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
            agentRef.onSnapshot(agentDoc => {
                dispatch(getAgentSuccess(agentDoc.data()));
            });

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
            if(searchResultDoc.empty) {
                dispatch(searchAgentFailure('empty search'))
            } else {
                searchResultDoc.docs.forEach(doc => {
                    searchResult.push({id: doc.id, data: doc.data()});
                });
                dispatch(searchAgentSuccess(searchResult));
            }

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

const activateAgentStart = () => ({
    type: agentsActionTypes.ACTIVATE_AGENT_START
});

const activateAgentSuccess = () => ({
    type: agentsActionTypes.ACTIVATE_AGENT_SUCCESS
});

const activateAgentFailure = errorMsg => ({
    type: agentsActionTypes.ADD_AGENT_FAILURE,
    payload: errorMsg
})

export const asyncActivateAgent = (id) => {
    return async dispatch => {
        try {
            dispatch(activateAgentStart())
            const agentRef = firestore.collection('agents').doc(`${id}`);
            await agentRef.update({isActivated: true});
            dispatch(activateAgentSuccess());
            Swal.fire(
                'Done',
                'Agent Activated!',
                'success'
            );
        } catch (error) {
            console.log(error);
            dispatch(activateAgentFailure());
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            });
        }
    }
}

const deactivateAgentStart = () => ({
    type: agentsActionTypes.DEACTIVATE_AGENT_START
});

const deactivateAgentSuccess = () => ({
    type: agentsActionTypes.DEACTIVATE_AGENT_SUCCESS
})

const deactivateAgentFailure = errorMsg => ({
    type: agentsActionTypes.DEACTIVATE_AGENT_FAILURE,
    payload: errorMsg
});

export const asyncDeactivateAgent = (id) => {
    return async dispatch => {
        try {
            dispatch(deactivateAgentStart())
            const agentRef = firestore.collection('agents').doc(`${id}`);
            await agentRef.update({isActivated: false});
            dispatch(deactivateAgentSuccess());
            Swal.fire(
                'Done',
                'Agent Deactivated!',
                'success'
            );
        } catch (error) {
            console.log(error);
            dispatch(deactivateAgentFailure());
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
    }
}



