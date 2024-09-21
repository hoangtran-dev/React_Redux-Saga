// import { ADD_USER_FAILURE, ADD_USER_REQUEST, ADD_USER_SUCCESS } from "../Action/actionTypes";

// const initaState = {
//     loading: false,
//     users: [],
//     error: null,
// };
// const userReducer = (state = initaState, action) => {
//     switch (action.type) {
//         case ADD_USER_REQUEST:
//             return { ...state, loading: true };
//         case ADD_USER_SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 users: [...state.users, action.payload],
//             };
//         case ADD_USER_FAILURE:
//             return { ...state, loading: false, error: action.payload };
//         default:
//             return state;

//     }
// };
// export default userReducer;