const initialState = {

}

export default function request(state = initialState, action) {
    console.log(action.type);
    return state;
}