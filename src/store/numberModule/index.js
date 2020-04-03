
// action type
const ADD_NUMBER = 'number/ADD_NUMBER';

// action 생성함수 (객체를 반환하는걸 잊지말자.)
export const addNumberAction = () => ({
    type: ADD_NUMBER
});

// state
const initialState = {
    number: 100
};


// reducer
export default function numberReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_NUMBER:
            return {
                ...state,
                number : state.number + 1
            }

        default:
            return state

    }

}

