import { LOG_IN } from "./constant";
import { LOG_OUT } from "./constant";

export const logIn = () => ({
    type: LOG_IN
})
export const logOut = () => ({
    type: LOG_OUT
})