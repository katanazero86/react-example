import * as types from './actionTypes';

// state
const initialState = {
    number: 100
};


// reducer
export default function numberReducer(state = initialState, action) {

    switch (action.type) {
        case types.ADD_NUMBER:
            return {
                ...state,
                number : state.number + 1
            }

        default:
            return state

    }

}

