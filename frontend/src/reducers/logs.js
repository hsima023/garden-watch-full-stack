import { GET_LOGS, DELETE_LOG, ADD_LOG, CLEAR_LOGS } from '../components/types';

const initialState = {
    logs: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LOGS:
            return {
                ...state,
                logs: action.payload,
            };
        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter((log) => log.id !== action.payload),
            };
        case ADD_LOG:
            return {
                ...state,
                logs: [...state.logs, action.payload],
            };
        case CLEAR_LOGS:
            return {
                ...state,
                logs: [],
            };
        default:
            return state;
    }
}