import { firestore, FieldValue } from '../../firebase/firebase.utils';
import { agentsActionTypes } from './agents.types';
import Swal from 'sweetalert2';

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

export const asyncAddAgent = (name) => {
    return async dispatch => {
        try {
            dispatch(addAgentStart());

            const agentRef = firestore.collection('agents');
            await agentRef.add({
                name,
                isActivated: true,
                totalReferrers: 0,
                dateCreated: FieldValue
            });

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
}