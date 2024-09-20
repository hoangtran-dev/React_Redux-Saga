import axios from "axios";
import { ADD_USER_FAILURE, ADD_USER_REQUEST, ADD_USER_SUCCESS } from "./actionTypes"

export const addUser = (userData) => async (dispatch) => {
    dispatch({type:ADD_USER_REQUEST});
    try {
        const response = await axios.post('http://localhost:3000/user',userData);
        dispatch({
            type:ADD_USER_SUCCESS,
            payload:response.data,
        });
        
    } catch (error) {
        dispatch({
            type:ADD_USER_FAILURE,
            payload:error.message,
        })
    }
};