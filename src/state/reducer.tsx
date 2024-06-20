import { LOG_IN, LOG_OUT,SET_SEARCH_INPUT } from './constant';

const initState = {
    isLogin: false,
    inputSearch: '',
};

function reducer(state = initState, action: { type: string; payload: any }) {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                isLogin: true,
            };
        case LOG_OUT:
            return {
                ...state,
                isLogin: false,
            }
        case SET_SEARCH_INPUT:
            return {
                ...state,
                inputSearch: action.payload
            }
        default:
            throw new Error('unknown action');
    }
}

export { initState };
export default reducer;
