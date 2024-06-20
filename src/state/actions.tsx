import { LOG_IN, LOG_OUT, SET_SEARCH_INPUT } from "./constant";


export const logIn = () => ({
    type: LOG_IN
})
export const logOut = () => ({
    type: LOG_OUT
})
export const setSearchInput = (payload: string) => ({
    type: SET_SEARCH_INPUT,
    payload
})