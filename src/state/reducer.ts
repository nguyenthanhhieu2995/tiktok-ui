import { LOG_IN, LOG_OUT} from './constant';

const initState = {
    isLogin: false
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
        default:
            throw new Error('unknown action');
    }
}

export { initState };
export default reducer;
